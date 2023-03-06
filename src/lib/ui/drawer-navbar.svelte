<script>
  import ScrambleText from '$lib/scramble-text/scramble-text.svelte';
</script>

<aside class="nav-outer-wrapper">
  <nav class="nav-inner-wrapper">
    <ul class="nav-item-list">
      <li class="nav-item">
        <ScrambleText><a href="/#">HOME</a></ScrambleText>
      </li>
      <li class="nav-item">
        <ScrambleText><a href="/#">ABOUT</a></ScrambleText>
      </li>
      <li class="nav-item">
        <ScrambleText><a href="/#">PROJECTS</a></ScrambleText>
      </li>
      <li class="nav-item">
        <ScrambleText><a href="/#">GITHUB</a></ScrambleText>
      </li>
      <li class="nav-item">
        <ScrambleText><a href="/#">RESUME</a></ScrambleText>
      </li>
      <li class="nav-item">
        <ScrambleText><a href="/#">CONTACT ME</a></ScrambleText>
      </li>
    </ul>
  </nav>
</aside>

<style lang="postcss">
  @tailwind components;
  @layer components {
    .nav-outer-wrapper {
      @apply h-screen w-96 bg-slate-900 shadow-md;
    }
    .nav-item-list {
      @apply flex flex-col gap-4 px-4;
    }
    .nav-item {
      @apply w-full font-mono text-5xl font-semibold uppercase text-white;
    }
    .nav-item:hover {
      @apply text-yellow-400;
    }
  }
</style>
