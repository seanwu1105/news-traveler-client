<script lang="ts">
  import LoadingIcon from '$lib/components/LoadingIcon.svelte'
  import News from '$lib/components/News.svelte'
  import NoData from '$lib/components/NoData.svelte'
  import type { GetBiasArgs, GetBiasResult } from '$lib/server/get-bias'
  import type {
    ListOppositeSentimentNewsArgs,
    ListOppositeSentimentNewsResult,
  } from '$lib/server/list-opposite-sentiment-news'
  import IconEmotionHappy from '~icons/ri/emotion-happy-line'
  import IconEmotionNormal from '~icons/ri/emotion-normal-line'
  import IconEmotionUnhappy from '~icons/ri/emotion-unhappy-line'
  import IconExternalLink from '~icons/ri/external-link-line'
  import IconGovernment from '~icons/ri/government-line'
  import type { PageData } from './$types'
  import { articleNews } from './store'

  export let data: PageData

  $: listOppositeSentimentNews = async (): Promise<
    ListOppositeSentimentNewsResult['results']
  > => {
    const body: ListOppositeSentimentNewsArgs = {
      content: $articleNews.content,
      keyword: data.query,
    }
    const response = await fetch('api/opposite-sentiment-news', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
    return response
      .json()
      .then(r => r.results)
      .then(sortOppositeNews)
      .then(news => {
        if ($articleNews.sentiment.kind === 'positive')
          return [...news].reverse()
        if ($articleNews.sentiment.kind === 'neutral') {
          const positive = news.filter(n => n.sentiment.kind === 'positive')
          const neutral = news.filter(n => n.sentiment.kind === 'neutral')
          const negative = news.filter(n => n.sentiment.kind === 'negative')
          return [...positive, ...negative, ...neutral]
        }
        return news
      })
  }

  function sortOppositeNews(news: ListOppositeSentimentNewsResult['results']) {
    return [...news].sort((a, b) => {
      if (a.sentiment.kind === 'positive' && b.sentiment.kind === 'neutral')
        return -1
      if (a.sentiment.kind === 'positive' && b.sentiment.kind === 'negative')
        return -1
      if (a.sentiment.kind === 'neutral' && b.sentiment.kind === 'negative')
        return -1
      if (a.sentiment.kind === 'neutral' && b.sentiment.kind === 'positive')
        return 1
      if (a.sentiment.kind === 'negative' && b.sentiment.kind === 'positive')
        return 1
      if (a.sentiment.kind === 'negative' && b.sentiment.kind === 'neutral')
        return 1
      if (a.sentiment.kind === 'positive' && b.sentiment.kind === 'positive')
        return b.sentiment.confidence - a.sentiment.confidence
      if (a.sentiment.kind === 'neutral' && b.sentiment.kind === 'neutral')
        return 0
      if (a.sentiment.kind === 'negative' && b.sentiment.kind === 'negative')
        return a.sentiment.confidence - b.sentiment.confidence
      return 0
    })
  }

  $: getBias = async (): Promise<GetBiasResult['bias']> => {
    const body: GetBiasArgs = { content: $articleNews.content }
    const response = await fetch('api/bias', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
    return response.json().then(r => r.bias)
  }
</script>

<div class="md:flex h-full">
  <article
    class="flex-1 card card-compact card-bordered ml-2 mb-2 overflow-auto"
  >
    {#if $articleNews.urlToImage}
      <figure class="px-4 pt-4">
        <img src={$articleNews.urlToImage} alt="cover" class="rounded-xl" />
      </figure>
    {/if}

    <div class="card-body">
      <header class="flex flex-col gap-4">
        <h1 class="card-title">
          {$articleNews.title}
        </h1>
        <p>
          <span>{$articleNews.source ?? 'Unknown Source'}</span> • {#if $articleNews.author}
            <span>{$articleNews.author}</span> •
          {/if}
          {#if $articleNews.publishedAt}
            <span>{new Date($articleNews.publishedAt).toLocaleString()}</span>
          {/if}
        </p>

        <div class="flex gap-4 items-center">
          <div class="flex flex-col items-center">
            {#if $articleNews.sentiment.kind === 'positive'}
              <IconEmotionHappy
                class="text-emerald-700 dark:text-emerald-400 text-lg lg:text-md flex-1"
              />
            {:else if $articleNews.sentiment.kind === 'negative'}
              <IconEmotionUnhappy
                class="text-rose-700 dark:text-rose-400 text-lg lg:text-md flex-1"
              />
            {:else}
              <IconEmotionNormal
                class="text-neutral-700 dark:text-neutral-400 text-lg lg:text-md flex-1"
              />
            {/if}
            <p>{($articleNews.sentiment.confidence * 100).toFixed(1)}%</p>
          </div>

          {#await getBias()}
            <div class="h-full max-h-10 aspect-square"><LoadingIcon /></div>
          {:then bias}
            <div
              class="flex flex-col items-center"
              title={`${bias > 0 ? 'Right' : 'Left'} Wing Political View`}
            >
              {#if bias > 0}
                <IconGovernment
                  class="text-red-500 dark:text-red-400 text-lg lg:text-md flex-1"
                />
              {:else if bias < 0}
                <IconGovernment
                  class="text-blue-500 dark:text-blue-400 text-lg lg:text-md flex-1"
                />
              {:else}
                <IconGovernment
                  class="text-neutral-700 dark:text-neutral-400 text-lg lg:text-md flex-1"
                />
              {/if}
              <p>{(Math.abs(bias) * 100).toFixed(1)}%</p>
            </div>
          {:catch}
            <p>error</p>
          {/await}

          <div class="flex-1" />

          <a href={$articleNews.url} target="_blank" rel="noreferrer"
            ><button class="btn btn-circle">
              <IconExternalLink />
            </button></a
          >
        </div>
      </header>

      <p class="text-base leading-loose mt-5">
        {$articleNews.content}
      </p>
    </div>
  </article>

  <aside class="flex-1 overflow-auto">
    <h2 class="text-xl font-bold m-2">Same Event, Different Stories</h2>
    {#await listOppositeSentimentNews()}
      <div class="flex justify-center">
        <div class="w-24 m-16"><LoadingIcon /></div>
      </div>
    {:then oppositeSentimentNews}
      {#if oppositeSentimentNews.length === 0}
        <NoData />
      {:else}
        {#each oppositeSentimentNews as news}
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a on:click={() => articleNews.set(news)} href="#">
            <News
              title={news.title}
              content={news.content}
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
