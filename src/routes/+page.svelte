<script lang="ts">
  import Tagged from './../lib/ui/tagged.svelte';
  import SkillIcon from './../lib/skill-icon/skill-icon.svelte';
  import Card from '$lib/cards/card.svelte';
  import MouseTrailer from '$lib/mouse-trailer/mouse-trailer.svelte';
  import Hero from '$lib/hero-banner/hero.svelte';

  import Navbar from '$lib/ui/navbar.svelte';
</script>

<MouseTrailer />
<Hero />
<Navbar />
<main
  class="relative space-y-96 font-primary text-white xl:space-y-80 lg:space-y-60 md:space-y-40">
  <section
    id="hero-section"
    class="flex h-screen w-full flex-col items-center justify-center text-white">
    <p class="font-secondary text-4xl font-medium text-yellow-400 md:text-2xl">
      WEICHEN TIE PROUDLY PRESENTS
    </p>

    <h1
      class="my-8 font-secondary text-[16rem] font-bold 2xl:text-[14rem] xl:text-[12rem] lg:text-[8rem] md:text-[7rem] sm:text-[4.5rem]">
      THE LABORATORY
    </h1>
    <p class="font-secondary text-4xl font-medium text-yellow-400 md:text-2xl">
      A PERSONAL PORTFOLIO
    </p>
  </section>
  <!-- ABOUT ME -->
  <div class="sticky top-0 left-0 -z-40 h-0 w-full" aria-hidden="true">
    <div class="main-bg-blur h-[100lvh] w-full" aria-hidden="true" />
  </div>

  <section id="about" class="main-container mx-auto">
    <h2>SCIENTIST PROFILE 👨‍🔬</h2>
    <Tagged tagName="Profile" className="w-full">
      <div class="my-4 flex gap-8 lg:flex-wrap">
        <div class="text-container text-xl">
          <p class="text-neutral-300">Weichen Tie</p>
          <i class="font-light text-neutral-500">
            BSc Computer Science / BEng Mechatronic Engineering (Hons)</i>
          <article class="mt-8 font-light leading-loose">
            Hi I'm Weichen, a software developer and mechatronic engineer based
            in Sydney. My passion for technology and problem-solving led me to
            pursue these fields, where I have gained hands-on experience with
            programming languages, software development, and robotics. As a
            student, I have taken on various projects and challenges, both
            independently and as part of a team, that have helped me develop my
            technical skills and creative thinking. I am excited about the
            endless possibilities these fields offer, and I look forward to
            contributing my knowledge and expertise to the tech industry.
          </article>
        </div>
        <div
          class="flex h-[600px] w-full min-w-[420px] flex-1 items-start overflow-hidden rounded-lg lg:w-96 md:min-w-0">
          <img
            src="fishing.jpg"
            alt="Weichen Tie"
            class="h-full w-full object-cover object-[0px_30%]" />
        </div>
      </div>
    </Tagged>
  </section>
  <!-- PROJECTS -->
  <section id="experiments" class="main-container mx-auto">
    <h2>FEATURED EXPERIMENTS 🔬</h2>
    <Tagged tagName="Experiments" className="w-full">
      <div class="card-grid my-8">
        <Card>
          <img
            src="projects/SlimeSimulation.webp"
            alt="Slime Simulation Project"
            class="h-full w-full object-cover"
            slot="image" />
          <h3 slot="title" class="my-4 font-secondary text-3xl font-medium">
            Slime Simulation
          </h3>
          <p slot="description" class="text-neutral-300">
            Simulation of the basic behaviours of slime mold movement via
            pheromones.
          </p>
        </Card>

        <Card>
          <img
            src="projects/goofygolf.webp"
            alt="Goofy Golf Project"
            class="h-full w-full object-cover"
            slot="image" />
          <h3 slot="title" class="my-4 font-secondary text-3xl font-medium">
            Goofy Golf
          </h3>
          <p slot="description" class="text-neutral-300">
            3D/VR golf game made using Unreal Engine for a group project where
            we won top 10 game awards in the UNSW COMP3421 course.
          </p>
        </Card>
        <Card>
          <img
            src="projects/gpu.webp"
            alt="GPU Project"
            class="h-full w-full object-cover"
            slot="image" />
          <h3 slot="title" class="my-4 font-secondary text-3xl font-medium">
            Homemade GPU
          </h3>
          <p slot="description" class="text-neutral-300">
            Homemade GPU build on a breadboard based on Ben Eater's graphics
            card.
          </p>
        </Card>
        <Card>
          <img
            src="projects/grass.webp"
            alt="Grass Project"
            class="h-full w-full object-cover"
            slot="image" />
          <h3 slot="title" class="my-4 font-secondary text-3xl font-medium">
            Grass Simulation
          </h3>
          <p slot="description" class="text-neutral-300">
            Grass shader implemented using by incorporating OpenGL's
            tessellation and geometry shaders.
          </p>
        </Card>

        <Card>
          <img
            src="projects/Raymarching.webp"
            alt="Ray Marching Project"
            class=" h-full w-full object-cover"
            slot="image" />
          <h3 slot="title" class="my-4 font-secondary text-3xl font-medium">
            Ray Marching
          </h3>
          <p slot="description" class="text-neutral-300">
            Ray Marching with ThreeJS and leveraging the fragment shader.
          </p>
        </Card>
        <Card>
          <img
            src="projects/ParticleAttractor.webp"
            alt="Particle Attractor Project"
            class="h-full w-full object-cover"
            slot="image" />
          <h3 slot="title" class="my-4 font-secondary text-3xl font-medium">
            Particle Attractor
          </h3>
          <p slot="description" class="text-neutral-300">
            Particle simulation using WebGL via transform feedback buffers.
          </p>
        </Card>
        <Card>
          <img
            src="projects/PathfindingVisualisation.webp"
            alt="Pathfinding Visualisation Project"
            class="h-full w-full object-cover"
            slot="image" />
          <h3 slot="title" class="my-4 font-secondary text-3xl font-medium">
            Pathfinding Visualisation
          </h3>
          <p slot="description" class="text-neutral-300">
            Visualisation for various pathfinding algorithms.
          </p>
        </Card>
        <Card>
          <img
            src="projects/Tetris.webp"
            alt="Particle Attractor Project"
            class="h-full w-full object-cover"
            slot="image" />
          <h3 slot="title" class="my-4 font-secondary text-3xl font-medium">
            Multiplayer Tetris
          </h3>
          <p slot="description" class="text-neutral-300">
            Multiplayer Tetris built with Pygame and websockets.
          </p>
        </Card>
      </div>
    </Tagged>
  </section>
  <!-- TECH STACK -->
  <section id="skills" class="main-container mx-auto">
    <h2>TECHNICAL SKILLS 🛠️</h2>
    <div class="grid grid-cols-3 gap-8 lg:flex lg:flex-col">
      <Tagged tagName="Frontend">
        <ul
          class="mt-4 mb-8 grid grid-cols-[repeat(auto-fit,minmax(96px,1fr))] gap-16">
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/react.svg"
              alt="ReactSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/Vue.svg"
              alt="VueSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/Svelte.svg"
              alt="SvelteSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full bg-white object-contain p-2"
              src="skills/Nextjs.svg"
              alt="NextJS Skill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/html.svg"
              alt="HTMLSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/css-3.svg"
              alt="CssSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/sass.svg"
              alt="SassSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/tailwind.svg"
              alt="TailwindSkill icon" />
          </SkillIcon>

          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/typescript.svg"
              alt="TsSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/js.svg"
              alt="JsSkill icon" />
          </SkillIcon>
        </ul>
      </Tagged>
      <Tagged tagName="Backend">
        <ul
          class="mt-4 mb-8 grid grid-cols-[repeat(auto-fit,minmax(96px,1fr))] gap-16">
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/postgres.svg"
              alt="PostgresSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full bg-[#092e20] object-contain p-2"
              src="skills/django.svg"
              alt="DjangoSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain invert"
              src="skills/Flask.svg"
              alt="FlaskSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/dotNet.svg"
              alt="DotNetSkill icon" />
          </SkillIcon>
        </ul>
      </Tagged>
      <Tagged tagName="Others">
        <ul
          class="mt-4 mb-8 grid grid-cols-[repeat(auto-fit,minmax(96px,1fr))] gap-16">
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/unreal.png"
              alt="UnrealSkill icon" />
          </SkillIcon>

          <SkillIcon>
            <img
              class="aspect-square w-full object-contain brightness-[100]"
              src="skills/Unity.svg"
              alt="UnitySkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full bg-white object-contain p-2"
              src="skills/Opengl.svg"
              alt="OpenGl icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/C-Sharp.svg"
              alt="CSharpSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/cpp.svg"
              alt="CppSkill Skill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/C.svg"
              alt="CSkill Skill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/java.svg"
              alt="JavaSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src="skills/python.svg"
              alt="PythonSkill icon" />
          </SkillIcon>
        </ul>
      </Tagged>
    </div>
  </section>
  <section id="contact" class="main-container mx-auto">
    <!-- CONTACT ME -->
    <h2>DON'T BE A STRANGER 👋</h2>
    <Tagged tagName="ContactMe">
      <div class="flex items-center">
        <form class="text-container my-8 space-y-8" action="">
          <div class="flex w-full  flex-col gap-2">
            <label class="text-neutral-300" for="email">Email</label>
            <input
              class="h-12 bg-neutral-900"
              id="email"
              type="email"
              name="email" />
          </div>
          <div class="flex w-full flex-col gap-2">
            <label class="text-neutral-300" for="message">Message</label>
            <textarea class="h-64 bg-neutral-900" id="message" name="message" />
          </div>

          <button
            class="ml-auto block border border-yellow-400 px-4 py-2 text-xl text-yellow-400"
            type="submit"
            >Submit
          </button>
        </form>
        <div class="mx-8 max-h-[478px] min-h-[478px] w-px bg-neutral-700" />
        <div />
      </div>
    </Tagged>
  </section>
  <footer />
</main>

<style lang="postcss">
  .main-bg-blur {
    @apply bg-black bg-opacity-95 backdrop-blur-2xl;
    transform: translate3d(0, 0, 0);
  }

  .card-grid {
    @apply grid grid-cols-4 gap-y-24 gap-x-8 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1;
  }

  h2 {
    @apply my-8 font-secondary text-6xl font-medium text-yellow-400;
  }
</style>
