<script lang="ts">
</script>

<li
  class="flex aspect-square w-24 flex-none items-center justify-center overflow-hidden rounded-lg transition-transform duration-300 hover:scale-125">
  <slot />
</li>

<style lang="postcss">
  li > * {
    @apply aspect-square w-full object-contain;
  }
</style>
