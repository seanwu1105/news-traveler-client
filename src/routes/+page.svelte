<script>
  import IconSearch from '~icons/ri/search-line'

  let query = ''
</script>

<main>
  <h1 class="m-3 text-center text-5xl font-semibold">News Traveler</h1>
  <p class="m-2 text-center text-2xl">
    Gather opposite news to the same event.
  </p>

  <form action={`/search`}>
    <div class="form-control m-4">
      <div class="input-group justify-center">
        <input
          bind:value={query}
          name="query"
          type="text"
          placeholder="Search…"
          class="input input-bordered min-w-[400px]"
        />
        <button
          class="btn btn-square"
          disabled={query.length === 0 ? true : null}
        >
          <IconSearch />
        </button>
      </div>
    </div>
  </form>
</main>
