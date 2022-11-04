<script lang="ts">
  import News from '$lib/components/News.svelte'
  import NoData from '$lib/components/NoData.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

{#if data.results.length === 0}
  <NoData />
{:else}
  {#each data.results as news}
    <News
      id={JSON.stringify(news)}
      title={news.title}
      description={news.description}
      urlToImage={news.urlToImage}
      publishedAt={news.publishedAt}
    />
  {/each}
{/if}
