<script>
  import IconSearch from '~icons/ri/search-line'

  let query = ''
</script>

<h1 class="m-3 text-center text-5xl font-semibold">
  News
  <span class="text-primary">Traveler</span>
</h1>
<p class="m-2 text-center text-2xl">Gather opposite news to the same event.</p>

<form action={`/search`}>
  <div class="form-control m-4">
    <div class="input-group justify-center">
      <input
        bind:value={query}
        name="query"
        type="text"
        placeholder="Search…"
        required
        class="input input-bordered"
      />
      <button class="btn btn-square">
        <IconSearch />
      </button>
    </div>
  </div>
</form>
