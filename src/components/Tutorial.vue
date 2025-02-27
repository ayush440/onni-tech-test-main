<template>
  <section class="relative overflow-hidden lg:h-[120vh] mb-24 lg:mb-0" >
    <!-- Slider Container -->
     <div class="h-[32rem] lg:h-[70%]">
    <div class="relative w-full h-full overflow-hidden">
      <div class="flex w-full h-full transition-transform duration-500 ease-in-out" :style="{
        transform: `translateX(-${currentPosition}%)`,
        transition: isResetting ? 'none' : 'transform 500ms ease-in-out'
      }">
        
        <!-- Slide 1 -->
        <div class="min-w-full h-full bg1 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center">
          <div class="container mx-auto px-5 lg:px-20">
            <p class="text-[#14171A] text-lg mb-4">Trade without the stress<span class="text-[#ffffff]"> let the algo decide!</span></p>
            <h1 class="text-white text-[44px] lg:text-[64px] font-[900] leading-tight mb-6 max-w-2xl">Why trade manually when the algo can do it flawlessly?</h1>
            <p class="text-white/90 max-w-xl">
              Battling emotions, missing opportunities, and constantly watching the market manually. Let automation handle the complexity while you focus on what truly matters. Stay ahead, trade smarter, and let the algorithm work for you!
            </p>
          </div>
        </div>

        <!-- Slide 2 -->
        <!-- <div class="min-w-full h-full bg flex items-center">
          <div class="container mx-auto px-5 lg:px-10 h-full flex items-center">
            <div class="border min-w-[60%] backdrop-blur-lg p-6 rounded-lg border-[#ffffff]/50 h-[80%]">
              <p class="text-white text-lg mb-4">Let AI Do the Work!</p>
              <h1 class="text-white text-[36px] lg:text-[64px] font-[900] leading-tight mb-6 max-w-xl">Trade Smarter with AI-Powered Algorithms!</h1>
              <p class="text-white/90 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut
                labore
                et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
              </p>
            </div>
          </div>
        </div> -->
        <div class="min-w-full bg2 h-full bg-[#e5d9f2] flex items-center">
          <div class="container mx-auto px-5 lg:px-20">
            <p class="text-black text-lg mb-4">Let AI Do the Work!</p>
            <h1 class="text-black text-[44px] lg:text-[64px] font-[900] leading-tight mb-6 max-w-2xl">Trade smarter, not harder—let automation take over!</h1>
            <p class="text-black/90 max-w-xl">
              Stop worrying about market fluctuations, emotional decisions, and constant monitoring. Our algorithm handles the complexity while you focus on your strategy. Stay ahead, maximize profits, and let AI work for you
            </p>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="min-w-full bg3 h-full bg-[#e5d9f2] flex items-center">
          <div class="container mx-auto px-5 lg:px-20">
            <p class="text-black text-lg mb-4">Let AI Do the Work!</p>
            <h1 class="text-black text-[44px] lg:text-[64px] font-[900] leading-tight mb-6 max-w-2xl">No more guesswork—trade with precision and confidence!</h1>
            <p class="text-black/90 max-w-xl">
              Manual trading comes with stress and uncertainty. Let smart automation analyze trends, execute trades, and optimize your strategy while you sit back and watch the results. Trade efficiently, trade effortlessly!
            </p>
          </div>
        </div>

        <!-- Duplicate of Slide 1 for continuous effect -->
        <div class="min-w-full h-full bg1 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center">
          <div class="container mx-auto px-5 lg:px-20">
            <p class="text-[#14171A] text-lg mb-4">Trade without the stress<span class="text-[#ffffff]"> let the algo decide!</span></p>
            <h1 class="text-white text-[44px] lg:text-[64px] font-[900] leading-tight mb-6 max-w-2xl">Why trade manually when the algo can do it flawlessly?</h1>
            <p class="text-white/90 max-w-xl">
              Battling emotions, missing opportunities, and constantly watching the market manually. Let automation handle the complexity while you focus on what truly matters. Stay ahead, trade smarter, and let the algorithm work for you!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- Fixed Form -->
    <div class="absolute hidden  top-2/3 lg:bottom-auto lg:top-1/2 lg:right-6 lg:-translate-y-1/2 w-full lg:h-[80%] h-[32rem] lg:flex items-start max-w-lg">
      <div class="bg-[#14171a] rounded-lg p-6 shadow-xl lg:h-[70%] ">
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
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const isResetting = ref(false)
const currentPosition = ref(0)
const formData = ref({
  name: '',
  email: '',
  number: ''
})

let intervalId

const nextSlide = () => {
  isResetting.value = false
  currentSlide.value++
  currentPosition.value = currentSlide.value * 100

  if (currentSlide.value >= 3) {
    setTimeout(() => {
      isResetting.value = true
      currentSlide.value = 0
      currentPosition.value = 0
    }, 500)
  }
}

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 2000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style>
.bg1 {
  background-image: url('/src/assets/img/bg1.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.bg2 {
  background-image: url('/src/assets/img/bg2.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.bg3 {
  background-image: url('/src/assets/img/bg3.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>