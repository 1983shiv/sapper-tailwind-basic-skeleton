<script>
  import Nav2 from "../components/Nav2.svelte";
  import Footer from "../components/Footer.svelte";
  export let segment;
</script>

<Nav2 {segment} />

<slot />
<Footer />
