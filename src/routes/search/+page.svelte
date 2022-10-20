<script lang="ts">
  import News from '$lib/components/News.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

{#each data.results as news}
  <News {...news} />
{/each}
