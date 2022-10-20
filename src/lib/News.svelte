<script lang="ts">
  import IconEmotionHappy from '~icons/ri/emotion-happy-line'
  import IconGovernment from '~icons/ri/government-line'

  export let id: string
  export let title: string
  export let description: string
  export let urlToImage: string
  export let publishedAt: string
</script>

<a href={`/article/${id}`}
  ><div
    class="flex gap-2 p-2 h-44 overflow-hidden transition hover:bg-base-300"
  >
    <figure class="flex-1 rounded-lg overflow-hidden max-w-md">
      <img src={urlToImage} alt={title} class="w-full" />
    </figure>
    <div class="flex-1 flex flex-col gap-1">
      <div class="flex gap-1">
        <IconEmotionHappy
          class="text-emerald-700 dark:text-emerald-400 text-sm"
        />
        <IconGovernment class="text-rose-700 dark:text-rose-400 text-sm" />
      </div>

      <article>
        <p class="line-clamp-2 text-lg font-bold mb-1">
          {title}
        </p>
        <p class="line-clamp-2">
          {description}
        </p>
      </article>

      <p class="text-sm">{publishedAt}</p>
    </div>
  </div></a
>
