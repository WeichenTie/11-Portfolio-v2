<script lang="ts">
    import Spinner from "$lib/ui/spinner.svelte";
    import MouseTrailer from "$lib/mouse-trailer/mouse-trailer.svelte";
    import Drawer from "$lib/primitives/drawer/drawer.svelte";
    import DrawerNavbar from "$lib/ui/drawer-navbar.svelte";
    import ScrambleText from "$lib/scramble-text/scramble-text.svelte";
    import Modal from "$lib/primitives/modal/modal.svelte";
    import Hero from "$lib/hero-banner/hero.svelte";


    let drawOpen = false;
    let modalOpen = false;
</script>

<MouseTrailer></MouseTrailer>
<Hero></Hero>
<main>
  <section class="w-full h-screen flex justify-center items-center flex-col text-white">
    <h2 class="text-4xl font-medium text-yellow-400">WEICHEN PROUDLY PRESENTS</h2>
    <h1 class="text-[10rem] font-bold my-8">THE LABORATORY</h1>
    <h2 class="text-4xl font-medium text-yellow-400">A PERSONAL PORTFOLIO</h2>
  </section>
  <section class="w-full h-screen flex justify-center items-center flex-col text-white">
    <h2 class="text-4xl font-medium text-yellow-400">WEICHEN PROUDLY PRESENTS</h2>
    <h1 class="text-[10rem] font-bold my-8">THE LABORATORY</h1>
    <h2 class="text-4xl font-medium text-yellow-400">A PERSONAL PORTFOLIO</h2>
  </section>

  <div class="mouse-trailer__interactable w-20 h-20 bg-red-500" data-mouse-interactable-type="link"></div>
  <div class="mouse-trailer__interactable w-20 h-20 bg-blue-500" data-mouse-interactable-type="video"></div>
  <!-- <div class="absolute left-1/2 top-1/2 bg-white">
    <button on:click={()=>{drawOpen = !drawOpen}}> TOGGLE DRAWER</button>
    <button on:click={()=>{modalOpen = !modalOpen}}> TOGGLE MODAL</button>
  </div> -->
  <ScrambleText><h1 class="text-3xl font-bold font-mono">HELLO WORLD</h1></ScrambleText>

  <Drawer bind:open={drawOpen} anchor="left">
    <DrawerNavbar></DrawerNavbar>
  </Drawer>
  <Modal bind:open={modalOpen}>
    fdsafaf
  </Modal>
</main>

<style lang="postcss">
  main {
    @apply min-h-screen w-full;
  }

</style>