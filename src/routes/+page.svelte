<script>
  import { Button, Heading, Navbar, NavUl, P, Search } from 'flowbite-svelte'
  import { CodeBracket, MagnifyingGlass, Sun } from 'svelte-heros-v2'
</script>

<Navbar>
  <NavUl class="order-1" />
  <div class="flex gap-2 order-2">
    <Button pill color="alternative" class="!p-2"
      ><Sun class="focus:outline-none" /></Button
    >
    <Button
      href="https://github.com/seanwu1105/news-traveler-client"
      target="_blank"
      rel="noreferrer"
      pill
      color="alternative"
      class="!p-2"><CodeBracket class="focus:outline-none" /></Button
    >
  </div>
</Navbar>

<Heading tag="h1" class="text-center m-4">News Traveler</Heading>
<P opacity={100} space="normal" size="3xl" class="text-center m-3"
  >Gather opposite news to the same event.</P
>

<div class="mx-auto mt-10 max-w-4xl">
  <Search>
    <Button><MagnifyingGlass class="focus:outline-none mr-1" /> Search</Button>
  </Search>
</div>
