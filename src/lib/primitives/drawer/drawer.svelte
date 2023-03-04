<script lang="ts">
  import { onMount } from "svelte";
  import Portal from "svelte-portal/src/Portal.svelte";

  export let open: boolean = false;
  export let anchor: "top" | "bottom" | "left" | "right" = "left";
  export let persist = true;
  let ref: HTMLElement;
  onMount(() => {
    if (persist) return; 
    const controller = new AbortController();
    window.addEventListener(
      "mousedown",
      (e) => {
        // Animation of movement of cursor
        const interactable = (e.target as HTMLElement).closest(
          ".drawer-wrapper"
        );
        if (interactable !== ref) {
          open = false;
        }
      },
      { signal: controller.signal }
    );

    return () => {
      controller.abort();
    };
  });
</script>

<Portal>
  <div bind:this={ref} data-open={open} class="drawer-wrapper" data-anchor={anchor}>
    <slot />
  </div>
</Portal>

<style lang="postcss">
  @tailwind components;
  @layer components {
    .drawer-wrapper {
      @apply absolute transition-transform ease-out;
    }

    .drawer-wrapper[data-anchor="left"],
    .drawer-wrapper[data-anchor="right"] {
      @apply h-screen top-0;
    }

    .drawer-wrapper[data-anchor="top"],
    .drawer-wrapper[data-anchor="bottom"] {
      @apply w-full left-0;
    }

    .drawer-wrapper[data-anchor="left"] {
      @apply left-0 -translate-x-full;
    }
    .drawer-wrapper[data-anchor="right"] {
      @apply right-0;
    }
    .drawer-wrapper[data-anchor="top"] {
      @apply top-0;
    }
    .drawer-wrapper[data-anchor="bottom"] {
      @apply bottom-0;
    }

    .drawer-wrapper[data-open="true"] {
      @apply translate-x-0 translate-y-0;
    }
  }
</style>
