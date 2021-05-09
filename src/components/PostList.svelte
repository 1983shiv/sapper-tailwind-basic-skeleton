<script>
  export let posts;
  import PostCard from "../components/PostCard.svelte";
</script>

{#each posts as post}
  <PostCard {post} />
{/each}

<!-- <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      {#each posts as post}
        <PostCard {post} />
      {/each}
    </div>
  </div>
</section>
 -->
<!-- <a href={`/posts/${slugify(post.title)}`}>
            <img src={post.image} alt={post.title} width="200" height="auto" />
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
          </a> -->
