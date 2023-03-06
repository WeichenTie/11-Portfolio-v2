<script lang="ts">
  import SkillIcon from './../lib/skill-icon/skill-icon.svelte';
  import Card from '$lib/cards/card.svelte';
  import Spinner from '$lib/ui/spinner.svelte';
  import MouseTrailer from '$lib/mouse-trailer/mouse-trailer.svelte';
  import Drawer from '$lib/primitives/drawer/drawer.svelte';
  import DrawerNavbar from '$lib/ui/drawer-navbar.svelte';
  import ScrambleText from '$lib/scramble-text/scramble-text.svelte';
  import Modal from '$lib/primitives/modal/modal.svelte';
  import Hero from '$lib/hero-banner/hero.svelte';

  import PersonalImage from '../assets/fishing.jpg';

  import ParticleAttractor from '../assets/ParticleAttractor.png';
  import GoofyGolf from '../assets/goofygolf.png';
  import Grass from '../assets/grass.png';
  import GPU from '../assets/gpu.jpg';
  import SlimeSimulation from '../assets/SlimeSimulation.png';
  import Raymarching from '../assets/Raymarching.png';
  import PathfindingVisualisation from '../assets/PathfindingVisualisation.png';
  import Tetris from '../assets/Tetris.png';

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

  import Sidebar from '$lib/ui/sidebar.svelte';
</script>

<MouseTrailer />
<!-- <Hero /> -->
<Sidebar />
<main class="relative space-y-96 font-primary text-white">
  <section
    class="flex h-screen w-full flex-col items-center justify-center text-white"
  >
    <p class="font-secondary text-4xl font-medium text-yellow-400">
      WEICHEN TIE PROUDLY PRESENTS
    </p>

    <h1 class="my-8 font-secondary text-[11rem] font-bold">THE LABORATORY</h1>
    <p class="font-secondary text-4xl font-medium text-yellow-400">
      A PERSONAL PORTFOLIO
    </p>
  </section>
  <!-- ABOUT ME -->
  <div class="sticky top-0 left-0 -z-40 h-0 w-full" aria-hidden>
    <div class="main-bg-blur h-screen w-full" aria-hidden />
  </div>

  <section class="main-container mx-auto">
    <h2 class="my-4 font-secondary text-6xl font-medium text-yellow-400">
      SCIENTIST PROFILE 👨‍🔬
    </h2>
    <div class="flex  gap-8">
      <div class="text-xl">
        <p class="text-neutral-300">Weichen Tie</p>
        <i class="font-light text-neutral-500">
          BSc Computer Science / BEng Mechatronic Engineering (78 WAM)</i
        >
        <p class="mt-8 max-w-[75ch] font-light leading-loose">
          Hi I'm Weichen, a software developer and mechatronic engineer based in
          Sydney. My passion for technology and problem-solving led me to pursue
          these fields, where I have gained hands-on experience with programming
          languages, software development, and robotics. As a student, I have
          taken on various projects and challenges, both independently and as
          part of a team, that have helped me develop my technical skills and
          creative thinking. I am excited about the endless possibilities these
          fields offer, and I look forward to contributing my knowledge and
          expertise to the tech industry.
        </p>
      </div>
      <div
        class="flex h-[600px] w-full flex-1 items-start overflow-hidden rounded-lg"
      >
        <img
          src={PersonalImage}
          alt="Weichen Tie"
          class="object-left-center h-full w-full object-cover"
        />
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="main-container mx-auto">
    <h2 class="my-4 font-secondary text-6xl font-medium text-yellow-400">
      FEATURED EXPERIMENTS 🔬
    </h2>
    <div class="cardgrid">
      <Card>
        <img
          src={SlimeSimulation}
          alt="Slime Simulation Project"
          class="h-full w-full object-cover"
          slot="image"
        />
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
          slot="image"
        />
        <h3 slot="title" class="my-4 font-secondary text-3xl font-medium">
          Goofy Golf
        </h3>
        <p slot="description" class="text-neutral-300">
          3D/VR golf game made using Unreal Engine for a group project where we
          won top 10 game awards in the UNSW COMP3421 course.
        </p>
      </Card>
      <Card>
        <img
          src={GPU}
          alt="GPU Project"
          class="h-full w-full object-cover"
          slot="image"
        />
        <h3 slot="title" class="my-4 font-secondary text-3xl font-medium">
          Homemade GPU
        </h3>
        <p slot="description" class="text-neutral-300">
          Homemade GPU build on a breadboard based on Ben Eater's graphics card.
        </p>
      </Card>
      <Card>
        <img
          src={Grass}
          alt="Grass Project"
          class="h-full w-full object-cover"
          slot="image"
        />
        <h3 slot="title" class="my-4 font-secondary text-3xl font-medium">
          Grass Simulation
        </h3>
        <p slot="description" class="text-neutral-300">
          Grass shader implemented using by incorporating OpenGL's tessellation
          and geometry shaders.
        </p>
      </Card>

      <Card>
        <img
          src={Raymarching}
          alt="Ray Marching Project"
          class=" h-full w-full object-cover"
          slot="image"
        />
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
          slot="image"
        />
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
          slot="image"
        />
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
          slot="image"
        />
        <h3 slot="title" class="my-4 font-secondary text-3xl font-medium">
          Multiplayer Tetris
        </h3>
        <p slot="description" class="text-neutral-300">
          Multiplayer Tetris built with Pygame and websockets.
        </p>
      </Card>
    </div>
  </section>
  <!-- TECH STACK -->
  <section class="main-container mx-auto ">
    <h2 class="my-4 font-secondary text-6xl font-medium text-yellow-400">
      TECHNICAL SKILLS 🛠️
    </h2>

    <h3>Frontend</h3>

    <h3>Backend</h3>

    <h3>Database</h3>

    <h3>Others</h3>
    <ul class="flex flex-none flex-wrap gap-16">
      <SkillIcon
        ><img
          class="object-fit"
          src={ReactSkill}
          alt="ReactSkill icon"
        /></SkillIcon
      >
      <SkillIcon
        ><img
          class="object-fit"
          src={VueSkill}
          alt="VueSkill icon"
        /></SkillIcon
      >
      <SkillIcon
        ><img class="object-fit" src={SvelteSkill} alt="SvelteSkill icon" />
      </SkillIcon>
      <SkillIcon
        ><img class="object-fit" src={HTMLSkill} alt="HTMLSkill icon" />
      </SkillIcon>
      <SkillIcon
        ><img
          class="object-fit aspect-square w-full bg-white p-2"
          src={NextjsSkill}
          alt="NextJS Skill icon"
        />
      </SkillIcon>
      <SkillIcon
        ><img
          class="object-fit"
          src={CssSkill}
          alt="CssSkill icon"
        /></SkillIcon
      >
      <SkillIcon
        ><img
          class="object-fit"
          src={SassSkill}
          alt="SassSkill icon"
        /></SkillIcon
      >
      <SkillIcon
        ><img class="object-fit" src={TailwindSkill} alt="TailwindSkill icon" />
      </SkillIcon>

      <SkillIcon
        ><img class="object-fit" src={TsSkill} alt="TsSkill icon" />
      </SkillIcon>
      <SkillIcon
        ><img class="object-fit" src={JsSkill} alt="JsSkill icon" />
      </SkillIcon>

      <SkillIcon
        ><img
          class="object-fit"
          src={CSharpSkill}
          alt="CSharpSkill icon"
        /></SkillIcon
      >
      <SkillIcon
        ><img
          class="object-fit"
          src={JavaSkill}
          alt="JavaSkill icon"
        /></SkillIcon
      >

      <SkillIcon
        ><img
          class="object-fit"
          src={PythonSkill}
          alt="PythonSkill icon"
        /></SkillIcon
      >
    </ul>
  </section>
  <section class="main-container mx-auto min-h-[50vh]">
    <!-- CONTACT ME -->
    <h2 class="my-4 font-secondary text-6xl font-medium text-yellow-400">
      DON'T BE A STRANGER 👋
    </h2>

    <form class="w-full space-y-8" action="">
      <div class="flex w-full  flex-col gap-2">
        <label class="text-neutral-300" for="email">Email</label>
        <input
          class="h-12 bg-neutral-800"
          id="email"
          type="email"
          name="email"
        />
      </div>
      <div class="flex w-full flex-col gap-2">
        <label class="text-neutral-300" for="message">Message</label>
        <textarea class="h-64 bg-neutral-800" id="message" name="message" />
      </div>

      <button
        class="ml-auto block border border-yellow-400 px-4 py-2 text-xl text-yellow-400"
        type="submit"
        >Submit
      </button>
    </form>
  </section>
</main>

<style lang="postcss">
  .main-bg-blur {
    @apply bg-black bg-opacity-95 backdrop-blur-2xl;
    transform: translate3d(0, 0, 0);
  }

  .cardgrid {
    @apply grid gap-y-24 gap-x-8;
    grid-template-columns: repeat(4, 1fr);
  }

  .main-container {
    @apply w-[1500px] px-2;
  }
</style>
