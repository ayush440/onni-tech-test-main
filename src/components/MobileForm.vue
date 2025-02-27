<template>
    <div class="bg-[#14171a] rounded-lg p-6 shadow-xl lg:h-[70%] lg:hidden w-[95%] mx-auto">
        <h2 class="text-[32px] text-center font-bold mb-2 text-[#ffffff]">Get in touch</h2>
        <p class=" text-[14px] mb-6 text-white">We're committed to providing the best support for our traders!</p>

        <form @submit.prevent="handleSubmit" class="">
          <div>
            <label class="block text-sm font-medium text-[#ffffff]">Full Name</label>
            <input type="text" v-model="formData.name"
              class="mt-1 block w-full px-3 py-2 border border-white border-opacity-10 bg-[#ffffff11] text-white rounded-md shadow-sm "
              required>
          </div>

          <div class="mt-4">
            <label class="block text-sm font-medium text-[#ffffff]">Email</label>
            <input type="email" v-model="formData.email"
              class="mt-1 block w-full px-3 py-2 border border-white border-opacity-10 bg-[#ffffff11] text-white rounded-md shadow-sm "
              required>
          </div>

          <div class="mt-4">
            <label class="block text-sm font-medium text-[#ffffff]">Number</label>
            <input type="tel" v-model="formData.number"
              class="mt-1 block w-full px-3 py-2 border border-white border-opacity-10 bg-[#ffffff11] text-white rounded-md shadow-sm "
              required>
          </div>

          <button type="submit"
            class="w-full bg-[#4984c4] mt-4 text-white py-2 px-4 rounded-md  transition-colors">
            Submit
          </button>
        </form>
      </div>
</template>

<script setup>
import { ref } from 'vue';



const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
}

const formData = ref({
  name: '',
  email: '',
  number: ''
})
</script>