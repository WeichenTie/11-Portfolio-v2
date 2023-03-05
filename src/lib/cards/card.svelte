<script lang="ts">
  import ParticleAttractor from '../../assets/ParticleAttractor.png'
</script>

<a
  href="/#"
  class="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 mouse-trailer__interactable"
  data-mouse-interactable-type="plus"
>
  <div class="h-52 w-full flex justify-center items-center">
    <slot name="image" />
  </div>
  <div class="h-64 w-full flex flex-col bg-neutral-900 p-5 bg-opacity-80">
    <slot name="title" />

    <slot name="description" />

    <ul class="flex gap-4 mt-auto text-neutral-500 ">
      <li>#Typescript</li>
      <li>#Webgl</li>
    </ul>
  </div>
</a>
