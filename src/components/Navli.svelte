<script>
  export let text;
  export let segment;
  export let classes;
  export let linkk;
</script>

<a
  class={classes}
  aria-current={segment === linkk ? "page" : undefined}
  href={linkk}
  >{text}
</a>
