<script>
  export let tags;
  // console.log("tags", tags);
</script>

<nav class="flex flex-wrap">
  {#each tags as tag}
    <span class="mx-1 bg-gray-50 rounded p-2"
      ><a class="font-lg" href="/tag/{tag}">#{tag}</a></span
    >
  {/each}
</nav>

<style>
  nav {
    display: flex;
    gap: 4px;
  }
</style>
