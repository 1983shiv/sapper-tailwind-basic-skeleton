<script context="module">
  import { findPost } from "../../posts.js";
  import SvelteSeo from "svelte-seo";
  import { slugify } from "../../posts.js";
  export function preload(page) {
    return { post: findPost(page.params.permalink) };
  }
</script>

<script>
  import Tags from "../../components/Tags.svelte";
  import Bloghero from "../../components/Bloghero.svelte";
  import Sidebar from "../../components/Sidebar.svelte";
  // import Image from "svelte-image";
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

<Bloghero title1="" title2={post.title} blogdate={post.date ? post.date : ""} />
<section class="text-gray-600 body-font relative mb-4">
  <div
    class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2"
  >
    <div
      class="my-1 px-1 w-full mt-4 overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:px-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"
    >
      <div class="flex flow-row flex-wrap m-4 justify-center">
        <div class="block w-auto">
          <img src={post.image} alt={post.title} />
        </div>
      </div>
      <div class="flex flow-row flex-wrap m-8">
        <Tags tags={post.tags} />
      </div>
      <div class="flex flow-row flex-wrap m-8 justify-center text-justify">
        {@html post.html}
      </div>
    </div>
    <div
      class="my-6 px-2 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"
    >
      <Sidebar />
    </div>
  </div>
</section>

<!-- 
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1
      class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-2xl mb-8"
    >
      <span class="block text-pink-600 xl:inline">{post.title}</span>
    </h1>
    <div class="flex flex-wrap m-4">
      <Tags tags={post.tags} />

      <div class="block w-auto h-400">
        <img src={post.image} alt={post.title} />
      </div>
      <div class="row">{@html post.html}</div>
    </div>
  </div>
</section> -->
