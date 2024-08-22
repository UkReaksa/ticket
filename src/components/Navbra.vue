<template>
  <nav class="bg-slate-800 shadow-lg md:h-[80px]">
    <div class="flex justify-between items-center ">
      <!-- Logo or Brand Name -->
      <div class="md:mx-10 my-[-50px]">
        <img
          class="w-40 my-4"
          src="../assets/Untitled-1.png"
          alt="Logo"
        />
      </div>

      <!-- Menu Icon for small screens -->
      <button
        @click="toggleMenu"
        class="sm:hidden text-white focus:outline-none mr-5 "
        aria-label="Toggle menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Navigation Links -->
    <ul
      :class="[
        'flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0 md:justify-end md:my-[-70px]',
        menuOpen ? 'block' : 'hidden sm:flex'
      ]"
    >
      <router-link to="/">
        <li
          @click="setActive('Home')"
          :class="[
            'cursor-pointer text-white px-3 py-2 text-lg font-medium transition duration-300 transform',
            activeItem === 'Home' ? 'border-b-2 border-white' : '',
            activeItem === 'Home' ? 'scale-105' : 'hover:bg-slate-700'
          ]"
        >
          Home
        </li>
      </router-link>

      <!-- <router-link to="Ticket">
        <li
          @click="setActive('Ticket')"
          :class="[
            'cursor-pointer text-white px-3 py-2 text-lg font-medium transition duration-300 transform',
            activeItem === 'About' ? 'border-b-2 border-white' : '',
            activeItem === 'About' ? 'scale-105' : 'hover:bg-slate-700'
          ]"
        >
          Buy Ticket
        </li>
      </router-link> -->

      <router-link to="Moviename">
        <li
          @click="setActive('Moviename')"
          :class="[
            'cursor-pointer text-white px-3 py-2 text-lg font-medium transition duration-300 transform',
            activeItem === 'Services' ? 'border-b-2 border-white' : '',
            activeItem === 'Services' ? 'scale-105' : 'hover:bg-slate-700'
          ]"
        >
          Movie
        </li>
      </router-link>

      <router-link to="Contach">
        <li
          @click="setActive('Contach')"
          :class="[
            'cursor-pointer text-white px-3 py-2 text-lg font-medium transition duration-300 transform',
            activeItem === 'Contact' ? 'border-b-2 border-white' : '',
            activeItem === 'Contact' ? 'scale-105' : 'hover:bg-slate-700'
          ]"
        >
          Contact
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const activeItem = ref('Home');
    const menuOpen = ref(false);

    const setActive = (item) => {
      activeItem.value = item;
    };

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    return {
      setActive,
      toggleMenu,
      activeItem,
      menuOpen,
    };
  },
};
</script>

<style scoped>
nav {
  background-color: #1e293b; /* bg-slate-800 */
}

ul {
  transition: all 0.3s ease; /* Smooth transition for showing/hiding */
}

li {
  transition: all 0.3s ease; /* Transition for hover and active states */
}

li:hover {
  background-color: #2d3748; /* hover:bg-slate-700 */
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); /* Focus outline for accessibility */
}

img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: 0; /* Adjust alignment as needed */
}
</style>
