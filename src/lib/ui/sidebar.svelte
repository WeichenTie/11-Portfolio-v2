<script>
  import GitHub from '../../assets/company-icons/GitHub.webp';
  import LinkedIn from '../../assets/company-icons/LinkedIn.png';
  import HiOutlineNewspaper from 'svelte-icons-pack/hi/HiOutlineNewspaper';
  import BsSend from 'svelte-icons-pack/bs/BsSend';
  import Icon from 'svelte-icons-pack/Icon.svelte';
</script>

<aside class="nav-wrapper">
  <ul class="nav-item-list">
    <li
      class="nav-item mouse-trailer__interactable bg-[#0d2636]"
      data-mouse-interactable-type="link">
      <a href="/#">
        <img
          src={GitHub}
          alt="github logo"
          class="h-full w-full object-cover brightness-[100] " />
      </a>
    </li>
    <li
      class="nav-item mouse-trailer__interactable bg-[#007ab9]"
      data-mouse-interactable-type="link">
      <a href="/#">
        <img
          src={LinkedIn}
          alt="LinkedIn logo"
          class="h-full w-full object-cover " />
      </a>
    </li>
    <li
      class="nav-item mouse-trailer__interactable"
      data-mouse-interactable-type="link">
      <a href="/#">
        <Icon src={HiOutlineNewspaper} size="56" />
      </a>
    </li>
    <li
      class="nav-item mouse-trailer__interactable bg-yellow-300"
      data-mouse-interactable-type="link">
      <a href="/#" class="">
        <Icon src={BsSend} size="56" />
      </a>
    </li>
  </ul>
</aside>

<style lang="postcss">
  @tailwind components;
  @layer components {
    .nav-wrapper {
      @apply fixed top-1/2 z-50 -translate-y-1/2;
    }
    .nav-item-list {
      @apply flex flex-col bg-white;
    }
    .nav-item {
      @apply aspect-square w-24;
    }

    .nav-item > a {
      @apply flex aspect-square w-full  items-center justify-center p-2;
    }
    .nav-item:hover {
      @apply text-yellow-400;
    }
  }
</style>
