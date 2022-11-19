<script lang="ts">
  import IconExternalLink from '~icons/ri/external-link-line'

  import { news } from './store'
</script>

<div class="md:flex h-full">
  <article
    class="flex-1 card card-compact card-bordered ml-2 mb-2 overflow-auto"
  >
    {#if $news.urlToImage}
      <figure class="px-4 pt-4">
        <img src={$news.urlToImage} alt="cover" class="rounded-xl" />
      </figure>
    {/if}

    <div class="card-body">
      <header class="flex">
        <div class="flex-1">
          <h1 class="card-title">
            {$news.title}
          </h1>
          <span>{$news.source}</span> • <span>{$news.author}</span> •
          <time>{$news.publishedAt}</time>
        </div>

        <a href={$news.url} target="_blank" rel="noreferrer"
          ><button class="btn btn-circle">
            <IconExternalLink />
          </button></a
        >
      </header>

      <p class="text-base leading-loose">
        {$news.content}
      </p>
    </div>
  </article>

  <aside class="flex-1 overflow-auto">
    <h2 class="text-xl font-bold m-2">Same Event, Different Stories</h2>

    <!-- {#if data.relatedNews.length === 0}
      <NoData />
    {:else}
      {#each data.relatedNews as news}
        <News {...news} />
      {/each}
    {/if} -->
  </aside>
</div>
