<template>
  <div>
    <!-- Navigation Bar -->
    <div class="sticky top-0 z-50">
      <Navbra />
    </div>

    <!-- Main Contact Section -->
    <div class="flex justify-center items-center min-h-screen bg-gray-900">
      <div class="w-full max-w-4xl bg-gray-800 text-white rounded-lg shadow-lg p-8 space-y-8">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Form -->
          <div class="flex-1 space-y-4">
            <h2 class="text-2xl font-semibold">Contact Us</h2>
            <div>
              <label for="name" class="block text-lg font-medium">Name:</label>
              <input v-model="name" id="name" type="text" class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white" placeholder="Your Name">
            </div>
            <div>
              <label for="email" class="block text-lg font-medium">Email:</label>
              <input v-model="email" id="email" type="email" class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white" placeholder="Your Email">
            </div>
            <div>
              <label for="message" class="block text-lg font-medium">Message:</label>
              <textarea v-model="message" id="message" rows="4" class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white" placeholder="Your Message"></textarea>
            </div>
            <button @click="handleSubmit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
          </div>

          <!-- Map -->
          <div class="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.8261763306045!2d103.20816413067493!3d13.091444893800809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3105493e50747d7b%3A0x60ce79c1b2f17a31!2sBattambang%20Teacher%20Education%20College%20%2F%20Regional%20Teacher%20Training%20Center!5e0!3m2!1skm!2skh!4v1724313181071!5m2!1skm!2skh"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
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
   const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = () => { 
  // Check if any of the fields are empty
  if (name.value && email.value && message.value) {
    // Combine values into a single string
    const infoString = `Name: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`;
    
    // Show the concatenated string in an alert
    alert(infoString);
    
    // Clear the fields after submission
    name.value = '';
    email.value = '';
    message.value = '';
  } else {
    alert('Please fill out all fields');
  }
}


    return {
      name,
      email,
      message,
      handleSubmit


    };
  }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
