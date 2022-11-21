<script lang="ts">
  import LoadingIcon from '$lib/components/LoadingIcon.svelte'
  import type { GetBiasArgs, GetBiasResult } from '$lib/server/get-bias'
  import IconEmotionHappy from '~icons/ri/emotion-happy-line'
  import IconEmotionNormal from '~icons/ri/emotion-normal-line'
  import IconEmotionUnhappy from '~icons/ri/emotion-unhappy-line'
  import IconGovernment from '~icons/ri/government-line'

  export let title: string
  export let description: string
  export let urlToImage: string | null
  export let publishedAt: string
  export let content: string
  export let sentimentKind: 'positive' | 'negative' | 'neutral'
  export let sentimentScore: number

  $: getBias = async (): Promise<GetBiasResult['bias']> => {
    const body: GetBiasArgs = { content }
    const response = await fetch('api/bias', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
    return response.json().then(r => r.bias)
  }
</script>

<section
  class="flex m-2 rounded-2xl bg-base-200 transition group group-hover:bg-base-300"
>
  <div class="flex gap-1 justify-center items-center p-2 lg:flex-row lg:gap-5">
    <div class="flex flex-col gap-1 items-center w-12">
      {#if sentimentKind === 'positive'}
        <IconEmotionHappy
          class="text-emerald-700 dark:text-emerald-400 text-2xl lg:text-3xl flex-1"
        />
      {:else if sentimentKind === 'negative'}
        <IconEmotionUnhappy
          class="text-rose-700 dark:text-rose-400 text-2xl lg:text-3xl flex-1"
        />
      {:else}
        <IconEmotionNormal
          class="text-neutral-700 dark:text-neutral-400 text-2xl lg:text-3xl flex-1"
        />
      {/if}
      <span class="lg:text-lg">{(sentimentScore * 100).toFixed(1)}%</span>
    </div>

    <div class="flex flex-col gap-1 items-center w-12">
      {#await getBias()}
        <div class="h-full max-h-16 aspect-square"><LoadingIcon /></div>
      {:then bias}
        {#if bias > 0}
          <IconGovernment
            class="text-red-500 dark:text-red-400 text-2xl lg:text-3xl flex-1"
          />
        {:else if bias < 0}
          <IconGovernment
            class="text-blue-500 dark:text-blue-400 text-2xl lg:text-3xl flex-1"
          />
        {:else}
          <IconGovernment
            class="text-neutral-700 dark:text-neutral-400 text-2xl lg:text-3xl flex-1"
          />
        {/if}
        <span class="lg:text-lg">{(Math.abs(bias) * 100).toFixed(1)}%</span>
      {:catch}
        <p>error</p>
      {/await}
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
          {description}
        </p>
      </article>

      <time class="text-sm">{publishedAt}</time>
    </div>

    {#if urlToImage}
      <figure class="flex-1 rounded-lg overflow-hidden max-w-xs">
        <img src={urlToImage} alt={title} class="w-full h-full object-cover" />
      </figure>
    {/if}
  </div>
</section>
