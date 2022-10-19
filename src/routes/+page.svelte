<script>
  import IconGitHub from '~icons/ri/github-line'
  import IconSearch from '~icons/ri/search-line'
</script>

<div class="navbar">
  <div class="navbar-start" />
  <div class="navbar-center" />
  <div class="navbar-end">
    <a
      href="https://github.com/seanwu1105/news-traveler-client"
      target="_blank"
      rel="noreferrer"
      class="btn btn-circle btn-ghost"
    >
      <IconGitHub />
    </a>
  </div>
</div>

<h1 class="m-3 text-center text-5xl font-semibold">News Traveler</h1>
<p class="m-2 text-center text-2xl">Gather opposite news to the same event.</p>

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
