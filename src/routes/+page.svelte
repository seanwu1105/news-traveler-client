<script>
  import IconSearch from '~icons/ri/search-line'

  let query = ''
  let similarityThreshold = 0.5
</script>

<h1 class="m-3 text-center text-5xl font-semibold">
  News
  <span class="text-primary">Traveler</span>
</h1>
<p class="m-2 text-center text-2xl">Gather opposite news to the same event.</p>

<form
  action={`/search`}
  class="card rounded-md bg-base-200 flex flex-col items-center w-fit m-auto"
>
  <div class="flex">
    <input
      bind:value={query}
      name="query"
      type="text"
      placeholder="Search…"
      class="input input-bordered min-w-[400px] rounded-r-none"
    />

    <button
      class="btn btn-square rounded-l-none"
      disabled={query.length === 0 ? true : null}
    >
      <IconSearch />
    </button>
  </div>

  <div class="p-2 w-full grid grid-cols-[auto_1fr_auto] gap-6 items-center">
    <label for="similarity-threshold" class="whitespace-nowrap"
      >Similarity Threshold</label
    >
    <input
      id="similarity-threshold"
      type="range"
      min="0"
      max="1"
      bind:value={similarityThreshold}
      step="any"
      class="range range-sm"
    />
    <span>{similarityThreshold.toFixed(3)}</span>

    <label for="similarity-threshold" class="whitespace-nowrap"
      >Similarity Threshold</label
    >
    <input
      id="similarity-threshold"
      type="range"
      min="0"
      max="1"
      bind:value={similarityThreshold}
      step="any"
      class="range range-sm"
    />
    <span>{similarityThreshold.toFixed(3)}</span>
  </div>
</form>
