<script lang="ts">
  import IconEmotionHappy from '~icons/ri/emotion-happy-line'
  import IconEmotionNormal from '~icons/ri/emotion-normal-line'
  import IconEmotionUnhappy from '~icons/ri/emotion-unhappy-line'

  export let title: string
  export let content: string
  export let urlToImage: string | null
  export let publishedAt: string | null
  export let sentimentKind: 'positive' | 'negative' | 'neutral'
  export let sentimentScore: number
</script>

<section
  class="flex m-2 rounded-2xl bg-base-200 transition group group-hover:bg-base-300"
>
  <div
    class="flex flex-col gap-1 justify-center items-center p-2 lg:flex-row lg:gap-5"
  >
    <div class="flex flex-col gap-1 items-center">
      {#if sentimentKind === 'positive'}
        <IconEmotionHappy
          class="text-emerald-700 dark:text-emerald-400 text-lg lg:text-3xl"
        />
      {:else if sentimentKind === 'negative'}
        <IconEmotionUnhappy
          class="text-rose-700 dark:text-rose-400 text-lg lg:text-3xl"
        />
      {:else}
        <IconEmotionNormal
          class="text-neutral-700 dark:text-neutral-400 text-lg lg:text-3xl"
        />
      {/if}
      <span class="lg:text-lg">{(sentimentScore * 100).toFixed(1)}%</span>
    </div>
  </div>

  <div
    class="flex gap-2 p-2 h-36 overflow-hidden flex-1 transition rounded-2xl bg-base-300 group-hover:bg-primary group-hover:text-primary-content"
  >
    <div class="flex-1 flex flex-col gap-1">
      <article class="flex-1">
        <h2 class="line-clamp-2 text-lg font-bold mb-1">
          {title}
        </h2>
        <p class="line-clamp-2">
          {content}
        </p>
      </article>

      {#if publishedAt}
        <time class="text-sm text-neutral-500">
          {new Date(publishedAt).toLocaleString()}
        </time>
      {/if}
    </div>

    {#if urlToImage}
      <figure class="flex-1 rounded-lg overflow-hidden max-w-xs">
        <img src={urlToImage} alt={title} class="w-full h-full object-cover" />
      </figure>
    {/if}
  </div>
</section>
