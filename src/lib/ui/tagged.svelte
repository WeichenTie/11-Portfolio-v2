<script lang="ts">
  export let tagName = 'header';
  export let className = '';
  let _ = '';
</script>

<div class={'outer-wrapper ' + className}>
  <div class={'inner-wrapper' + _} data-tagname={tagName}>
    <slot />
  </div>
</div>

<style lang="postcss">
  @tailwind components;
  @layer components {
    .outer-wrapper {
      @apply relative;
    }

    .outer-wrapper::before {
      @apply absolute top-1/2 w-px -translate-y-1/2 bg-neutral-700 transition-colors duration-200 ease-in-out;
      content: '';
      height: calc(100% - 20px);
    }

    .inner-wrapper {
      @apply pt-4 pb-4;
      position: relative;
      min-height: 100%;
      padding-left: 40px;
    }
    .inner-wrapper::before,
    .inner-wrapper::after {
      @apply font-cursive text-xl text-neutral-500 transition-colors duration-200 ease-in-out;
      left: 0px;
    }
    .inner-wrapper::before {
      content: '<' attr(data-tagname) '>';
      position: absolute;
      top: -8px;
    }

    .inner-wrapper::after {
      content: '</' attr(data-tagname) '>';
      position: absolute;
      bottom: -8px;
    }

    .outer-wrapper .outer-wrapper {
      @apply ml-10;
    }

    .outer-wrapper:hover::before {
      @apply bg-yellow-400;
    }
    .outer-wrapper:hover .inner-wrapper::before,
    .outer-wrapper:hover .inner-wrapper::after {
      @apply text-yellow-400;
    }
  }
</style>
