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
  export let tag, posts;
</script>

<svelte:head>
  <title>#{tag}</title>
</svelte:head>

<section class="text-gray-600 body-font">
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
</section>
