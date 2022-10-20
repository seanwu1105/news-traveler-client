<script lang="ts">
  import News from '$lib/components/News.svelte'
  import NoData from '$lib/components/NoData.svelte'
  import IconExternalLink from '~icons/ri/external-link-line'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<div class="md:flex h-full">
  <article
    class="flex-1 card card-compact card-bordered ml-2 mb-2 overflow-auto"
  >
    <figure class="px-4 pt-4">
      <img src={data.urlToImage} alt="cover" class="rounded-xl" />
    </figure>

    <div class="card-body">
      <header class="flex">
        <div class="flex-1">
          <h1 class="card-title">
            {data.title}
          </h1>
          <span>{data.source}</span> • <span>{data.author}</span> •
          <time>{data.publishedAt}</time>
        </div>

        <a href={data.urlToSource} target="_blank" rel="noreferrer"
          ><button class="btn btn-circle">
            <IconExternalLink />
          </button></a
        >
      </header>

      <p class="text-base text-justify">
        {data.content}
      </p>
    </div>
  </article>

  <aside class="flex-1 overflow-auto">
    <h2 class="text-xl font-bold m-2">Same Event, Different Stories</h2>

    {#if data.relatedNews.length === 0}
      <NoData />
    {:else}
      {#each data.relatedNews as news}
        <News {...news} />
      {/each}
    {/if}
  </aside>
</div>
