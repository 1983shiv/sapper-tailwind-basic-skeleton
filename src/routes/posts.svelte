<script>
  import PostList from "../components/PostList.svelte";
  // import { posts } from "@/posts";
  import { posts } from "../posts.js";
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<section class="text-pink-500 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1
      class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-8"
    >
      <span class="block xl:inline">Latest</span>
      <span class="block text-pink-600 xl:inline">Articles...</span>
    </h1>
    <div class="flex flex-wrap m-4">
      <PostList {posts} />
    </div>
  </div>
</section>
