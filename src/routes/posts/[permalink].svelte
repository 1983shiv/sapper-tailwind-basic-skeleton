<script context="module">
  import { findPost } from "../../posts.js";
  import SvelteSeo from "svelte-seo";
  import Image from "svelte-image";
  import { slugify } from "../../posts.js";
  export function preload(page) {
    return { post: findPost(page.params.permalink) };
  }
</script>

<script>
  import Tags from "../../components/Tags.svelte";
  export let post;
</script>

<svelte:head>
  <!-- <title>{post.title}</title> -->
</svelte:head>

<SvelteSeo
  title={post.title}
  description={post.summery ? post.summery : ""}
  openGraph={{
    title: post.title,
    description: post.summery ? post.summery : "",
    url: `/posts/${slugify(post.title)}`,
    type: "website",
    images: [
      {
        url: post.image ? post.image : "",
        width: 850,
        height: 650,
        alt: post.title,
      },
    ],
  }}
/>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1
      class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-2xl mb-8"
    >
      <span class="block xl:inline">#</span>
      <span class="block text-pink-600 xl:inline">{post.title}</span>
    </h1>
    <div class="flex flex-wrap m-4">
      <Tags tags={post.tags} />

      <div class="block">
        <Image src={post.image} alt={post.title} />
      </div>
      <div class="row">{@html post.html}</div>
    </div>
  </div>
</section>
