<script lang="ts">
  import Tagged from './../lib/ui/tagged.svelte';
  import SkillIcon from './../lib/skill-icon/skill-icon.svelte';
  import Card from '$lib/cards/card.svelte';
  import MouseTrailer from '$lib/mouse-trailer/mouse-trailer.svelte';
  import Hero from '$lib/hero-banner/hero.svelte';

  import PersonalImage from '../assets/fishing.webp';

  import ParticleAttractor from '../assets/ParticleAttractor.webp';
  import GoofyGolf from '../assets/goofygolf.webp';
  import Grass from '../assets/grass.webp';
  import GPU from '../assets/gpu.webp';
  import SlimeSimulation from '../assets/SlimeSimulation.webp';
  import Raymarching from '../assets/Raymarching.webp';
  import PathfindingVisualisation from '../assets/PathfindingVisualisation.webp';
  import Tetris from '../assets/Tetris.webp';

  import CSharpSkill from '../assets/skills/C-Sharp.svg';
  import CssSkill from '../assets/skills/css-3.svg';
  import HTMLSkill from '../assets/skills/html.svg';
  import JavaSkill from '../assets/skills/java.svg';
  import JsSkill from '../assets/skills/js.svg';
  import PythonSkill from '../assets/skills/python.svg';
  import ReactSkill from '../assets/skills/react.svg';
  import SassSkill from '../assets/skills/sass.svg';
  import VueSkill from '../assets/skills/Vue.svg';
  import TsSkill from '../assets/skills/typescript.svg';
  import SvelteSkill from '../assets/skills/Svelte.svg';
  import TailwindSkill from '../assets/skills/Tailwind.svg';
  import NextjsSkill from '../assets/skills/Nextjs.svg';
  import CSkill from '../assets/skills/C.svg';
  import CppSkill from '../assets/skills/cpp.svg';
  import DjangoSkill from '../assets/skills/django.svg';
  import UnrealSkill from '../assets/skills/unreal.png';
  import UnitySkill from '../assets/skills/unity.svg';
  import PostgresSkill from '../assets/skills/postgres.svg';
  import OpenGlSkill from '../assets/skills/Opengl.svg';
  import FlaskSkill from '../assets/skills/Flask.svg';
  import DotNetSkill from '../assets/skills/dotNet.svg';

  import Navbar from '$lib/ui/navbar.svelte';

  // import Sidebar from '$lib/ui/sidebar.svelte';
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
    <div class="main-bg-blur h-screen w-full" aria-hidden="true" />
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
            src={PersonalImage}
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
            src={SlimeSimulation}
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
            src={GoofyGolf}
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
            src={GPU}
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
            src={Grass}
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
            src={Raymarching}
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
            src={ParticleAttractor}
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
            src={PathfindingVisualisation}
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
            src={Tetris}
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
              src={ReactSkill}
              alt="ReactSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={VueSkill}
              alt="VueSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={SvelteSkill}
              alt="SvelteSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full bg-white object-contain p-2"
              src={NextjsSkill}
              alt="NextJS Skill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={HTMLSkill}
              alt="HTMLSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={CssSkill}
              alt="CssSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={SassSkill}
              alt="SassSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={TailwindSkill}
              alt="TailwindSkill icon" />
          </SkillIcon>

          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={TsSkill}
              alt="TsSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={JsSkill}
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
              src={PostgresSkill}
              alt="PostgresSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full bg-[#092e20] object-contain p-2"
              src={DjangoSkill}
              alt="DjangoSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain invert"
              src={FlaskSkill}
              alt="FlaskSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={DotNetSkill}
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
              src={UnrealSkill}
              alt="UnrealSkill icon" />
          </SkillIcon>

          <SkillIcon>
            <img
              class="aspect-square w-full object-contain brightness-[100]"
              src={UnitySkill}
              alt="UnitySkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full bg-white object-contain p-2"
              src={OpenGlSkill}
              alt="OpenGl icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={CSharpSkill}
              alt="CSharpSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={CppSkill}
              alt="CppSkill Skill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={CSkill}
              alt="CSkill Skill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={JavaSkill}
              alt="JavaSkill icon" />
          </SkillIcon>
          <SkillIcon>
            <img
              class="aspect-square w-full object-contain"
              src={PythonSkill}
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
