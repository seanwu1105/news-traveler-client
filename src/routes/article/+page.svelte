<script lang="ts">
  import type {
    ListOppositeSentimentNewsArgs,
    ListOppositeSentimentNewsResult,
  } from '$lib/server/list-opposite-sentiment-news'
  import IconExternalLink from '~icons/ri/external-link-line'
  import News from '../../lib/components/News.svelte'
  import NoData from '../../lib/components/NoData.svelte'
  import type { PageData } from './$types'

  export let data: PageData

  $: listOppositeSentimentNews = async (): Promise<
    ListOppositeSentimentNewsResult['results']
  > => {
    const body: ListOppositeSentimentNewsArgs = {
      content: data.articleNews.content,
      keyword: data.query,
    }
    const response = await fetch('api/opposite-sentiment-news', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
    return response.json().then(r => r.results)
  }
</script>

<div class="md:flex h-full">
  <article
    class="flex-1 card card-compact card-bordered ml-2 mb-2 overflow-auto"
  >
    {#if data.articleNews.urlToImage}
      <figure class="px-4 pt-4">
        <img src={data.articleNews.urlToImage} alt="cover" class="rounded-xl" />
      </figure>
    {/if}

    <div class="card-body">
      <header class="flex">
        <div class="flex-1">
          <h1 class="card-title">
            {data.articleNews.title}
          </h1>
          <span>{data.articleNews.source}</span> • {#if data.articleNews.author}
            <span>{data.articleNews.author}</span> •
          {/if}
          <time>{data.articleNews.publishedAt}</time>
        </div>

        <a href={data.articleNews.url} target="_blank" rel="noreferrer"
          ><button class="btn btn-circle">
            <IconExternalLink />
          </button></a
        >
      </header>

      <p class="text-base leading-loose">
        {data.articleNews.content}
      </p>
    </div>
  </article>

  <aside class="flex-1 overflow-auto">
    <h2 class="text-xl font-bold m-2">Same Event, Different Stories</h2>
    {#await listOppositeSentimentNews()}
      <div class="flex justify-center p-16">
        <div class="lds-ripple">
          <div />
          <div />
        </div>
      </div>
    {:then oppositeSentimentNews}
      {#if oppositeSentimentNews.length === 0}
        <NoData />
      {:else}
        {#each oppositeSentimentNews as news}
          <a
            on:click={() => (data.articleNews = news)}
            href={`/article?${new URLSearchParams({ query: data.query })}`}
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
        {/each}
      {/if}
    {:catch error}
      <p class="m-16">
        Oh no! An error occurs when fetching opposite-sentiment news: {error.message}
      </p>
    {/await}
  </aside>
</div>

<style>
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
</style>
