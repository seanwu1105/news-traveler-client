<script lang="ts">
  import IconGitHub from '~icons/ri/github-line'
  import IconSearch from '~icons/ri/search-line'
  import '../app.css'
  import type { LayoutData } from './$types'

  export let data: LayoutData

  let query = ''
</script>

<svelte:head>
  <title>News Traveler</title>
</svelte:head>

<nav class="navbar flex-initial">
  <div class="navbar-start">
    {#if !data.isRoot}
      <a href="/" class="btn btn-ghost text-xl normal-case">News Traveler</a>
    {/if}
  </div>
  <div class="navbar-center" />
  <div class="navbar-end">
    {#if !data.isRoot}
      <form action={`/search`}>
        <div class="form-control">
          <div class="input-group input-group-sm">
            <input
              bind:value={query}
              name="query"
              type="text"
              placeholder="Search…"
              class="input input-bordered input-sm"
            />
            <button
              disabled={query.length === 0 ? true : null}
              class="btn btn-square btn-sm"
            >
              <IconSearch width="1.4em" height="1.4em" />
            </button>
          </div>
        </div>
      </form>
    {/if}

    <a
      href="https://github.com/seanwu1105/news-traveler-client"
      target="_blank"
      rel="noreferrer"
      class="btn btn-circle btn-ghost"
    >
      <IconGitHub />
    </a>
  </div>
</nav>

<main class="flex-1 overflow-auto">
  <slot />
</main>
