<template>
  <div>
    <!-- Navigation Bar -->
    <div class="sticky top-0 z-50 bg-gray-900">
      <Navbra />
    </div>

    <!-- Main Movie Section -->
    <div class="flex justify-center items-center min-h-screen bg-gray-900">
      <div class="w-full max-w-4xl bg-gray-800 text-white rounded-lg shadow-lg p-8 space-y-8">
        <!-- Movie Box -->
        <div v-for="movie in 5" :key="movie.id" class="flex flex-col md:flex-row gap-8 my-3">
          <!-- Movie Poster -->
          <div class="flex-shrink-0 transition-transform transform hover:scale-105">
            <img
              src="../assets/download.jpg"
              alt="Movie Poster"
              class="w-72 h-auto rounded-lg shadow-lg"
            />
          </div>

          <!-- Movie Information -->
          <div class="flex-1 space-y-4">
            <h1 class="text-3xl font-bold text-gray-200 hover:text-gray-100 transition-colors">Movie Title</h1>
            <p class="text-lg text-gray-400">Genre: Action, Adventure</p>
            <p class="text-lg text-gray-400">Duration: 2h 30m</p>
            <p class="text-lg text-gray-400">Rating: PG-13</p>

            <!-- Showtimes -->
            <div>
              <h2 class="text-2xl font-semibold text-gray-300">Showtimes</h2>
              <ul class="list-disc list-inside pl-4 space-y-1">
                <li class="text-lg text-gray-300">12:00 PM</li>
                <li class="text-lg text-gray-300">3:00 PM</li>
                <li class="text-lg text-gray-300">6:00 PM</li>
                <li class="text-lg text-gray-300">9:00 PM</li>
              </ul>
            </div>

            <!-- Buy Ticket Button -->
             <router-link to="Ticket">
               <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105">
              Buy Ticket
            </button>
             </router-link>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbra from '../components/Navbra.vue';

export default {
  components: {
    Navbra
  },
  setup() {
    return {};
  }
}
</script>

<style scoped>
/* Add your custom styles here */

/* Custom styles */
.bg-gray-800 {
  background-color: #2d2d2d;
}

.bg-gray-900 {
  background-color: #1a1a1a;
}

.text-gray-100 {
  color: #e5e5e5;
}

.text-gray-200 {
  color: #d1d1d1;
}

.text-gray-300 {
  color: #b0b0b0;
}

.text-gray-400 {
  color: #9e9e9e;
}

.transition-transform {
  transition: transform 0.3s ease-in-out;
}

.transition-colors {
  transition: color 0.3s ease-in-out;
}
</style>
