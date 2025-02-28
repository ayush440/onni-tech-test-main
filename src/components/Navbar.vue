<template>
  <nav class="flex justify-between items-center px-6 py-2 bg-[#F3F8F9]">
    <!-- Logo -->
    <div>
      <img src="../assets/svg/Dark.svg" alt="" class="w-36 md:ml-10  ">
    </div>
    
    <!-- Navigation Links -->
    <ul class="hidden md:flex space-x-12 text-[#686868]">
      


      <li><a href="#how" class="hover:text-[#4984c4] font-bold">How it works </a></li>
      <li><a href="#why" class="hover:text-[#4984c4] font-bold">Why algo</a></li>
      <li><a href="#features" class="hover:text-[#4984c4] font-bold">Features</a></li>
      
      <li><a href="#pricing" class="hover:text-[#4984c4] font-bold">Pricing</a></li>
      <li><a href="#pricing" class="hover:text-[#4984c4] font-bold">Payment</a></li>
    </ul>
    
    <!-- Join Button -->
    <a target="_blank" href="https://app.omnitechalgo.com/" class="hidden md:block px-6 py-3 bg-[#4984C4] text-white rounded-md ">
      Sign In
    </a>
    
    <!-- Mobile Menu Button -->
    <button @click="toggleNav" class="md:hidden text-gray-700 focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    
    <!-- Mobile Menu -->
    <div v-show="isNavOpen" class="absolute top-24 left-0 w-full bg-[#14171a] shadow-md md:hidden z-50">
      <ul class="flex flex-col text-white text-center p-4">
        <li><a href="#how" class="block py-2 hover:text--[#4984c4] hover:hover:text-white rounded-lg hover:bg-[#4984c4]">How it works </a></li>
        <li><a href="#why" class="block py-2 hover:text--[#4984c4] hover:text-white rounded-lg hover:bg-[#4984c4]">Why algo</a></li>
        
        <li><a href="#features" class="block py-2 hover:text--[#4984c4] hover:text-white rounded-lg hover:bg-[#4984c4]">Features</a></li>
        
        <li><a href="#pricing" class="block py-2 hover:text--[#4984c4] hover:text-white rounded-lg hover:bg-[#4984c4]">Pricing</a></li>
        <li><a href="#pricing" class="block py-2 hover:text--[#4984c4] hover:text-white rounded-lg hover:bg-[#4984c4]">Payment</a></li>
        
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isNavOpen = ref(false)

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>
