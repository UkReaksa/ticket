<template>
  <div class="sticky top-0">
    <Navbra/>
  </div>

  <div class="flex flex-col justify-center items-center min-h-screen bg-gray-900">
    <div class="w-[600px] bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <img class="w-full" src="https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg" alt="Thor: Love and Thunder">

      <!-- Paragraph added here -->
      <p class="mt-4">
        Thor: Love and Thunder is a Marvel Cinematic Universe film directed by Taika Waititi. It features the God of Thunder, Thor, as he embarks on a new adventure to discover who he truly is. The film is known for its vibrant visuals, humorous dialogue, and epic storyline.
      </p>
    </div>

    <!-- Footer added here -->
     <div class=" bg-slate-700 h-[70px] flex w-screen justify-center items-center">
       <footer class="mt-6 text-gray-300">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
     </div>
   
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import Navbra from '@/components/Navbra.vue';

export default {
  components: {
    Navbra
  },
  setup() {
    return {};
  }
}
</script>
