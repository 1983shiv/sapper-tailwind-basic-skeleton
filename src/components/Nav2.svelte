<script>
  // Menu Source: https://github.com/justalever/tailwind-navbar/blob/master/public/index.html
  import Navli from "../components/Navli.svelte";
  export let segment;
  export let isOpen = true;

  function toggleNav() {
    isOpen = !isOpen;
  }
</script>

<header
  class="lg:px-16 px-6 bg-gray-50 flex flex-wrap items-center lg:py-2 py-2"
>
  <div class="flex-1 flex justify-between items-center">
    <a href=".">
      <svg
        width="32"
        height="36"
        viewBox="0 0 32 36"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"
        /></svg
      >
    </a>
  </div>

  <label
    for="menu-toggle"
    class="pointer-cursor lg:hidden block"
    on:click={toggleNav}
    ><svg
      class="fill-current text-gray-900"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      ><title>menu</title><path
        d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
      /></svg
    ></label
  >
  <input class={isOpen ? "hidden" : ""} type="hidden" id="menu-toggle" />

  <div
    class="{isOpen ? 'hidden' : ''} lg:flex lg:items-center lg:w-auto w-full"
    id="menu"
  >
    <nav>
      <ul
        class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
      >
        <li on:click={toggleNav}>
          <Navli
            text="Home"
            classes="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            linkk="."
            {segment}
          />
        </li>
        <li on:click={toggleNav}>
          <Navli
            text="About"
            classes="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            linkk="about"
            {segment}
          />
        </li>
        <li on:click={toggleNav}>
          <Navli
            text="Services"
            classes="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            linkk="services"
            {segment}
          />
        </li>
        <li on:click={toggleNav}>
          <Navli
            on:click={toggleNav}
            text="Portfolio"
            classes="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            linkk="portfolio"
            {segment}
          />
        </li>
        <li on:click={toggleNav}>
          <Navli
            text="Contact"
            classes="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            linkk="contact"
            {segment}
          />
        </li>
        <!-- <li on:click={toggleNav}>
          <a
            class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            aria-current={segment === undefined ? "page" : undefined}
            href=".">home</a
          >
        </li>
        <li on:click={toggleNav}>
          <a
            class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            aria-current={segment === "about" ? "page" : undefined}
            href="about">about</a
          >
        </li>
        <li on:click={toggleNav}>
          <a
            class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            aria-current={segment === "services" ? "page" : undefined}
            href="services">services</a
          >
        </li>
        <li on:click={toggleNav}>
          <a
            class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
            aria-current={segment === "portfolio" ? "page" : undefined}
            href="portfolio">portfolio</a
          >
        </li>
        <li on:click={toggleNav}>
          <a
            class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
            aria-current={segment === "contact" ? "page" : undefined}
            href="contact">contact</a
          >
        </li> -->
      </ul>
    </nav>
    <!-- <a
      href="."
      class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
    >
      <img
        class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
        src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
        alt="Andy Leverenz"
      />
    </a> -->
  </div>
</header>

<style>
  /* #menu-toggle:checked + #menu {
    display: block;
  } */
</style>
