<template>
  <div class="relative h-[70vh] md:h-[80vh] verflow-hidden">
    <!-- Video Background with Overlay -->
    <div class="absolute inset-0 z-0">
      <video autoplay muted loop class="absolute w-full h-full object-cover">
        <source src="/src/assets/video/trade.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>
    <!-- Content Container -->
    <div class="relative z-10 flex items-center justify-between mx-auto px-6 h-full md:ml-10 text-center md:text-left ">
      <!-- Hero Text Section -->
      <div ref="heroTextRef" class="text-white max-w-3xl lg:pr-12 md:mb-0  md:h-[80%]">
        <p ref="taglineRef" class="text-[16px] font-[500] mb-2">Trade without the stress let the algo decide!</p>
        <h1 ref="headingRef" class="text-4xl md:text-[64px]  leading-[49px] md:leading-[69px] font-bold mb-6">
          Why trade manually when the algo can do it flawlessly?
        </h1>
        <p ref="descriptionRef" class="text-base md:text-lg opacity-90 leading-[32px]">
          Battling emotions, missing opportunities, and constantly watching the
          market manually. Let automation handle the complexity while you focus on
          what truly matters. Stay ahead, trade smarter, and let the algorithm work for you!
        </p>
      </div>
      <!-- Form Section - Hidden on mobile -->
      <div ref="formContainerRef" class="bg-white rounded-lg p-6 mr-12 shadow-lg w-full max-w-md hidden md:block">
        <h2 class="text-[32px] text-center font-semibold text-[#363737] mb-6">Get in touch</h2>
        <form @submit.prevent="submitForm">
          <!-- Full Name -->
          <div class="mb-4 relative">
            <label for="name" class="text-xs text-gray-600 bg-white px-1 absolute -top-2 left-3">Full Name</label>
            <input type="text" id="name" placeholder="Enter here" v-model="formData.name"
              class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <!-- Number -->
          <div class="mb-4 relative">
            <label for="number" class="text-xs text-gray-600 bg-white px-1 absolute -top-2 left-3">Number</label>
            <input type="tel" id="number" placeholder="Enter here" v-model="formData.number"
              class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <!-- Email -->
          <div class="mb-4 relative">
            <label for="email" class="text-xs text-gray-600 bg-white px-1 absolute -top-2 left-3">E-mail</label>
            <input type="email" id="email" placeholder="Enter here" v-model="formData.email"
              class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <!-- Message -->
          <div class="mb-6 relative">
            <label for="message" class="text-xs text-gray-600 bg-white px-1 absolute -top-2 left-3">Message</label>
            <textarea id="message" placeholder="Enter here" v-model="formData.message" rows="4"
              class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"></textarea>
          </div>
          <!-- Submit Button -->
          <button type="submit"
            class="w-full bg-[#4984C4] hover:bg-blue-700 text-white py-3 px-4 rounded transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Form data setup
const formData = reactive({
  name: '',
  number: '',
  email: '',
  message: ''
});

// Refs for animation targets
const taglineRef = ref(null);
const headingRef = ref(null);
const descriptionRef = ref(null);
const formContainerRef = ref(null);

// Form submission handler
const submitForm = () => {
  // Handle form submission here
  console.log('Form submitted:', formData);
  // Reset form or show success message
};

// Setup animations on component mount
onMounted(() => {
  // Set initial states (slightly below their natural position)
  gsap.set([taglineRef.value, headingRef.value, descriptionRef.value, formContainerRef.value], { 
    y: 50, 
    opacity: 0 
  });
  
  // Create a timeline for the text elements
  const textTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: taglineRef.value,
      start: "top bottom-=100", // Start animation when element is 100px from bottom of viewport
      once: true, // Only trigger once
    }
  });
  
  // Add animations with staggered timing for smoother effect
  textTimeline
    .to(taglineRef.value, { 
      y: 0, 
      opacity: 1, 
      duration: 0.9, 
      ease: "power2.out" 
    })
    .to(headingRef.value, { 
      y: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power2.out" 
    }, "-=0.7") // Start slightly before previous animation finishes
    .to(descriptionRef.value, { 
      y: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power2.out" 
    }, "-=0.7");
  
  // Separate animation for the form to avoid performance issues
  if (formContainerRef.value) {
    gsap.to(formContainerRef.value, {
      scrollTrigger: {
        trigger: formContainerRef.value,
        start: "top bottom-=50",
        once: true,
      },
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.3 // Small delay for a nice sequential feel
    });
  }
});
</script>