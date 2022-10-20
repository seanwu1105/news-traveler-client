<script>
  import IconSearch from '~icons/ri/search-line'
</script>

<main>
  <h1 class="m-3 text-center text-5xl font-semibold">News Traveler</h1>
  <p class="m-2 text-center text-2xl">
    Gather opposite news to the same event.
  </p>

  <div class="form-control m-4">
    <div class="input-group justify-center">
      <input
        type="text"
        placeholder="Search…"
        class="input input-bordered min-w-[400px]"
      />
      <a href="/search" class="btn btn-square">
        <IconSearch />
      </a>
    </div>
  </div>
</main>
