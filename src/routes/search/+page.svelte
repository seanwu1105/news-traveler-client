<script lang="ts">
  import News from '$lib/components/News.svelte'
  import NoData from '$lib/components/NoData.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

{#if data.results.length === 0}
  <NoData />
{:else}
  <div class="flex overflow-auto flex-wrap">
    {#each data.results as news}
      <div class="w-full md:w-1/2">
        <News
          id={JSON.stringify(news)}
          title={news.title}
          description={news.description}
          urlToImage={news.urlToImage}
          publishedAt={news.publishedAt}
        />
      </div>
    {/each}
  </div>
{/if}
