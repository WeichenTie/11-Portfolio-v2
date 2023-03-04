<script lang="ts">
    import { onMount } from "svelte";
    import Portal from "svelte-portal/src/Portal.svelte";
  
    export let open: boolean;

    let backdrop : HTMLElement;

    onMount(()=>{
        const controller = new AbortController();
        backdrop.addEventListener("click", () => {
            open = false;
            console.log("afdafda");
            
        }, {signal: controller.signal})
        return () => {controller.abort()}
    })

</script>
  
  <Portal>
    <div bind:this={backdrop} data-open={open} class="modal-backdrop">
      <slot></slot>
    </div>
  </Portal>
  
  <style lang="postcss">
    @tailwind components;
    @layer components {
      .modal-backdrop {
        @apply absolute top-0 left-0 w-full h-screen pointer-events-none bg-opacity-0 opacity-0 transition-all ease-in-out;
      }
  
      .modal-backdrop[data-open="true"] {
        @apply z-[999999] pointer-events-auto bg-black bg-opacity-60 opacity-100;
      }
    }
  </style>
  