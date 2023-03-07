<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import HiOutlinePlus from 'svelte-icons-pack/hi/HiOutlinePlus';
  import FiArrowUpRight from 'svelte-icons-pack/fi/FiArrowUpRight';
  import { throttle } from 'lodash';
  function animate(
    trailer: HTMLElement,
    e: MouseEvent,
    isInteracting: boolean,
  ) {
    const x = e.clientX - trailer!.clientWidth / 2,
      y = e.clientY - trailer!.clientHeight / 2;
    // trailer.style.transform = ``;

    // trailer.style.top = `${y}px`;
    // trailer.style.left = `${x}px`;
    const transform = {
      transform: `translate(${x}px, ${y}px) scale(${isInteracting ? 6 : 1})`,
    };
    trailer.animate(transform, { duration: 800, fill: 'forwards' });
  }

  onMount(() => {
    const controller = new AbortController();
    window.addEventListener(
      'mousemove',
      (e) => {
        // Animation of movement of cursor
        const interactable = (e.target as HTMLElement).closest(
          '.mouse-trailer__interactable',
        );
        animate(trailer, e, !!interactable);
        const type = (interactable as any)?.dataset?.mouseInteractableType;

        switch (type) {
          case 'link':
            iconType = FiArrowUpRight;
            break;
          case 'plus':
            iconType = HiOutlinePlus;
            break;
        }
        active = !!type;
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  });

  let trailer: HTMLElement;
  let iconType: any = FiArrowUpRight;
  let active: boolean = false;
</script>

{#if browser}
  <div
    bind:this={trailer}
    id="mouse-trailer"
    aria-disabled="true"
    data-active={active}>
    <i class="mouse-trailer__icon" aria-hidden="true">
      <Icon src={iconType} size="8" />
    </i>
  </div>
{/if}

<style lang="postcss">
  @tailwind components;
  @layer components {
    #mouse-trailer {
      @apply pointer-events-none fixed z-[99999999] flex 
          aspect-square w-4 transform-gpu
          items-center
          justify-center rounded-full bg-white;
    }

    .mouse-trailer__icon {
      @apply opacity-0 transition-opacity;
    }

    #mouse-trailer[data-active='true'] .mouse-trailer__icon {
      @apply opacity-100;
    }
  }
</style>
