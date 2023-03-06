<script lang="ts">
</script>

<a
  href="/#"
  class="mouse-trailer__interactable overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
  data-mouse-interactable-type="plus">
  <article>
    <div class="flex h-52 w-full items-center justify-center">
      <slot name="image" />
    </div>
    <div class="flex h-64 w-full flex-col bg-neutral-900 bg-opacity-80 p-5">
      <slot name="title" />

      <slot name="description" />

      <ul class="mt-auto flex gap-4 text-neutral-500 ">
        <li>#Typescript</li>
        <li>#Webgl</li>
      </ul>
    </div>
  </article>
</a>
