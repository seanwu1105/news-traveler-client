<script>
  import {
    Button,
    Card,
    Navbar,
    NavBrand,
    Search,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from 'flowbite-svelte'

  import { CodeBracket, Sun } from 'svelte-heros-v2'
</script>

<Navbar>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold"
      >News Traveler</span
    >
  </NavBrand>

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

<div class="flex gap-2 px-2">
  <div class="flex-1">
    <div><Search size="sm" /></div>
  </div>

  <div class="flex-1"><Card /></div>

  <div class="flex-1">
    <Table>
      <TableHead>
        <TableHeadCell>A</TableHeadCell>
        <TableHeadCell>B</TableHeadCell>
        <TableHeadCell>C</TableHeadCell>
      </TableHead>
      <TableBody>
        <TableBodyRow>
          <TableBodyCell>value</TableBodyCell>
          <TableBodyCell>value</TableBodyCell>
          <TableBodyCell>value</TableBodyCell>
        </TableBodyRow>
      </TableBody>
    </Table>
  </div>
</div>
