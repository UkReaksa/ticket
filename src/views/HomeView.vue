<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-900">
    <div class="w-[600px] bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <!-- Ticket Header -->
      <div class="mb-6 text-center">
        <h1 class="text-2xl font-bold mb-2">Movie Night</h1>
        <p class="text-lg font-semibold">Title: <span class="text-gray-300">The Great Adventure</span></p>
        <p class="text-lg font-semibold">Date: <span class="text-gray-300">August 30, 2024</span></p>
        <p class="text-lg font-semibold">Time: <span class="text-gray-300">7:00 PM</span></p>
      </div>
      
      <!-- Seating Chart -->
      <div class="flex flex-col items-center mb-6">
        <div class="mb-4 text-lg font-semibold">Select Your Seats</div>
        <div class="grid grid-cols-8 gap-2">
          <div v-for="(seat, index) in seats" :key="index" @click="toggleSeat(index)" :class="getSeatClass(seat)" class="w-10 h-10 border border-gray-600 rounded-md flex items-center justify-center cursor-pointer">
            {{ index + 1 }}
          </div>
        </div>
      </div>

      <!-- Purchase Button -->
      <button @click="purchaseTickets" class="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition duration-200">
        Purchase Tickets
      </button>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-[400px]">
        <h2 class="text-xl font-bold mb-4">Ticket Confirmation</h2>
        <p class="mb-4">You have selected the following seats:</p>
        <ul class="list-disc list-inside mb-4">
          <li v-for="seat in selectedSeats" :key="seat">{{ seat }}</li>
        </ul>
        <p class="mb-4 text-lg font-semibold">Total Tickets: {{ totalTickets }}</p>
        <p class="mb-4 text-lg font-semibold">Total Cost: ${{ totalCost.toFixed(2) }}</p>
        <div class="flex space-x-4">
          <button @click="printTicket" class="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded transition duration-200">
            Print Ticket
          </button>
          <button @click="downloadTicket" class="w-full bg-blue-500 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded transition duration-200">
            Download Ticket
          </button>
          <button @click="showModal = false" class="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition duration-200">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import jsPDF from 'jspdf'; // Import jsPDF

export default {
  setup() {
    const seats = ref(Array(40).fill(false)); // 40 seats, initially unselected
    const showModal = ref(false);
    const pricePerTicket = 12.00; // Example price per ticket

    const toggleSeat = (index) => {
      seats.value[index] = !seats.value[index];
    };

    const getSeatClass = (isSelected) => {
      return isSelected ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white';
    };

    const selectedSeats = computed(() => {
      return seats.value
        .map((selected, index) => selected ? index + 1 : null)
        .filter(seat => seat !== null);
    });

    const totalTickets = computed(() => selectedSeats.value.length);
    const totalCost = computed(() => totalTickets.value * pricePerTicket);

    const purchaseTickets = () => {
      if (totalTickets.value === 0) {
        alert('No seats selected. Please select at least one seat.');
        return;
      }
      showModal.value = true;
    };

    const printTicket = () => {
      const printWindow = window.open('', '', 'height=600,width=800');
      printWindow.document.write('<html><head><title>Print Ticket</title><style>');
      printWindow.document.write(`
        body { font-family: Arial, sans-serif; }
        .ticket { 
          background: #1e293b; 
          color: #f1f5f9; 
          margin: 20px; 
          padding: 20px; 
          border-radius: 8px; 
          border: 1px solid #334155; 
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
          max-width: 600px; 
          margin-left: auto; 
          margin-right: auto; 
        }
        .ticket h1 { 
          font-size: 28px; 
          margin-bottom: 10px; 
          color: #fef3c7;
        }
        .ticket p { 
          margin: 10px 0; 
          font-size: 16px; 
        }
        .ticket .details { 
          margin-bottom: 20px; 
        }
        .ticket .footer { 
          margin-top: 20px; 
          font-size: 14px; 
          color: #9ca3af; 
        }
        @media print {
          .ticket { 
            border: none; 
            box-shadow: none; 
          }
          .footer { 
            display: none; 
          }
        }
      `);
      printWindow.document.write('</style></head><body>');
      printWindow.document.write('<div class="ticket">');
      printWindow.document.write('<h1>Movie Ticket</h1>');
      printWindow.document.write('<p><strong>Title:</strong> The Great Adventure</p>');
      printWindow.document.write('<p><strong>Date:</strong> August 30, 2024</p>');
      printWindow.document.write('<p><strong>Time:</strong> 7:00 PM</p>');
      printWindow.document.write('<p><strong>Selected Seats:</strong> ' + selectedSeats.value.join(', ') + '</p>');
      printWindow.document.write('<p><strong>Total Tickets:</strong> ' + totalTickets.value + '</p>');
      printWindow.document.write('<p><strong>Total Cost:</strong> $' + totalCost.value.toFixed(2) + '</p>');
      printWindow.document.write('</div>');
      printWindow.document.write('<div class="footer">Thank you for your purchase!</div>');
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    };

    const downloadTicket = () => {
      const doc = new jsPDF();
      doc.setFont('Arial');
      doc.setFontSize(16);
      doc.text('Movie Ticket', 20, 20);
      doc.setFontSize(12);
      doc.text(`Title: The Great Adventure`, 20, 30);
      doc.text(`Date: August 30, 2024`, 20, 40);
      doc.text(`Time: 7:00 PM`, 20, 50);
      doc.text(`Selected Seats: ${selectedSeats.value.join(', ')}`, 20, 60);
      doc.text(`Total Tickets: ${totalTickets.value}`, 20, 70);
      doc.text(`Total Cost: $${totalCost.value.toFixed(2)}`, 20, 80);
      doc.text('Thank you for your purchase!', 20, 100);
      doc.save('ticket.pdf');
    };

    return {
      seats,
      showModal,
      selectedSeats,
      totalTickets,
      totalCost,
      toggleSeat,
      getSeatClass,
      purchaseTickets,
      printTicket,
      downloadTicket
    };
  }
}
</script>

<style>
/* Additional custom styles can go here */
</style>
