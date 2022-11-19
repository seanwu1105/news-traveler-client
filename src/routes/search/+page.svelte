<script lang="ts">
  import News from '$lib/components/News.svelte'
  import NoData from '$lib/components/NoData.svelte'
  import type { PageData } from './$types'
  import { news as articleNews } from '../../routes/article/store'

  export let data: PageData
</script>

{#if data.results.length === 0}
  <NoData />
{:else}
  <div class="flex overflow-auto flex-wrap">
    {#each data.results as news}
      <div class="w-full md:w-1/2">
        <a
          class="group"
          on:click={() => articleNews.set(news)}
          href={`/article`}
        >
          <News
            title={news.title}
            description={news.description}
            urlToImage={news.urlToImage}
            publishedAt={news.publishedAt}
            sentimentKind={news.sentiment.kind}
            sentimentScore={news.sentiment.confidence}
          /></a
        >
      </div>
    {/each}
  </div>
{/if}
