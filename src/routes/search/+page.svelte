<script lang="ts">
  import News from '$lib/components/News.svelte'
  import NoData from '$lib/components/NoData.svelte'
  import type { GetSentimentResult } from '$lib/server/get-sentiment'
  import type { SearchResult } from '$lib/server/search'
  import { articleNews } from '../article/store'
  import type { PageData } from './$types'

  export let data: PageData

  let loading = false

  async function loadMore() {
    loading = true
    const params = new URLSearchParams()
    params.append('query', data.query)
    if (!data.nextOffset) throw new Error('No more data')
    params.append('offset', `${data.nextOffset}`)
    const response = await fetch(`api/search?${params}`)
    const json = await response.json()
    if (!response.ok) throw new Error(json.message)
    const { results, nextOffset } = json as SearchResult

    const newsWithSentiment = await Promise.all(
      results.map(async news => ({
        ...news,
        ...(await getSentiment(news.content)),
      })),
    )

    data.results = [...data.results, ...newsWithSentiment]
    data.nextOffset = nextOffset
    loading = false
  }

  async function getSentiment(content: string): Promise<GetSentimentResult> {
    return fetch('api/sentiment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    }).then(res => res.json())
  }
</script>

<div class="h-full overflow-auto">
  {#if data.results.length === 0}
    <NoData />
  {:else}
    <div class="flex overflow-auto flex-wrap">
      {#each data.results as news}
        <div class="w-full md:w-1/2">
          <a
            on:click={() => articleNews.set(news)}
            href={`/article?${new URLSearchParams({ query: data.query })}`}
          >
            <News
              title={news.title}
              content={news.content}
              urlToImage={news.urlToImage}
              publishedAt={news.publishedAt}
              sentimentKind={news.sentiment.kind}
              sentimentScore={news.sentiment.confidence}
            /></a
          >
        </div>
      {/each}
    </div>

    {#if data.nextOffset}
      <div class="w-full p-5">
        <button
          on:click={() => loadMore()}
          class="btn btn-ghost w-full"
          class:loading
          disabled={loading}>Load More</button
        >
      </div>
    {/if}
  {/if}
</div>
