<template>
  <nav class="flex justify-between items-center px-6 py-2 bg-[#F3F8F9]">
    <!-- Logo with link to home page -->
    <div>
      <router-link to="/">
        <img src="../assets/svg/Dark.svg" alt="Logo" class="w-36 md:ml-10 cursor-pointer">
      </router-link>
    </div>
    
    <!-- Navigation Links -->
    <ul class="hidden md:flex space-x-12 text-[#686868]">
      <li><router-link :to="{ name: 'home', hash: '#how' }" class="hover:text-[#4984c4] font-bold">How it works</router-link></li>
      <li><router-link :to="{ name: 'home', hash: '#why' }" class="hover:text-[#4984c4] font-bold">Why algo</router-link></li>
      <li><router-link :to="{ name: 'home', hash: '#features' }" class="hover:text-[#4984c4] font-bold">Features</router-link></li>
      <li><router-link :to="{ name: 'home', hash: '#pricing' }" class="hover:text-[#4984c4] font-bold">Pricing</router-link></li>
      <li><router-link to="/payment" class="hover:text-[#4984c4] font-bold">Payment</router-link></li>
    </ul>
    
    <!-- Join Button -->
    <a target="_blank" href="https://app.omnitechalgo.com/" class="hidden md:block px-6 py-3 mx-14 bg-[#4984C4] text-white rounded-md">
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
        <li><router-link :to="{ name: 'home', hash: '#how' }" class="block py-2 hover:text-white rounded-lg hover:bg-[#4984c4]">How it works</router-link></li>
        <li><router-link :to="{ name: 'home', hash: '#why' }" class="block py-2 hover:text-white rounded-lg hover:bg-[#4984c4]">Why algo</router-link></li>
        <li><router-link :to="{ name: 'home', hash: '#features' }" class="block py-2 hover:text-white rounded-lg hover:bg-[#4984c4]">Features</router-link></li>
        <li><router-link :to="{ name: 'home', hash: '#pricing' }" class="block py-2 hover:text-white rounded-lg hover:bg-[#4984c4]">Pricing</router-link></li>
        <li><router-link to="/payment" class="block py-2 hover:text-white rounded-lg hover:bg-[#4984c4]">Payment</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const isNavOpen = ref(false)
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>