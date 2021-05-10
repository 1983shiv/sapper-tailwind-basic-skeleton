<script context="module">
  import { findByTag } from "../../posts.js";

  export function preload(page) {
    const { tag } = page.params;
    const posts = findByTag(tag);

    return { tag, posts };
  }
</script>

<script>
  import PostList from "../../components/PostList.svelte";
  import Sidebar from "../../components/Sidebar.svelte";
  import Bloghero from "../../components/Bloghero.svelte";
  export let tag, posts;
</script>

<svelte:head>
  <title>Latest Articles for {tag}</title>
</svelte:head>
<Bloghero title1="Latest Articles for " title2={tag} />
<section class="text-gray-600 body-font relative mb-4">
  <div
    class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2"
  >
    <div
      class="container my-1 px-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:px-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3 bg-gray-50"
    >
      <PostList {posts} />
    </div>
    <div
      class="containermy-6 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"
    >
      <Sidebar />
    </div>
  </div>
</section>

<!-- <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1
      class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-8"
    >
      <span class="block xl:inline">#</span>
      <span class="block text-pink-600 xl:inline">{tag}</span>
    </h1>
    <div class="flex flex-wrap -m-4">
      <PostList {posts} />
    </div>
  </div>
</section> -->
