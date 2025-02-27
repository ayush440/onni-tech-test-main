<template>
  <div ref="sectionRef" class="bg-[#14171A] mt-24 backdrop-blur-sm rounded-3xl w-[80%] mx-auto relative z-10 hidden lg:block border border-white border-opacity-10">
    <div class="grid grid-cols-3">
      <!-- Left Content -->
      <div class=" p-10 py-16 col-span-2">
        <p class="text-sm text-[white] font-medium">Let AI Do the Work!</p>
        <h2 class="text-2xl md:text-[32px] font-bold text-[#ffffff] mt-2 leading-tight ">
          The future of trading isn't human - <span class="text-[#4984c4]"> AI is transforming markets </span> and trading the future today
        </h2>
      </div>
      <!-- Image -->
       <div class=" mt-10 bg-[#06090F] border border-[#ffffff] border-opacity-10 border-b-0 rounded-t-lg flex justify-end relative mr-10">
        <img 
          src="/src/assets/img/professional.webp" 
          alt="Professional trader" 
          class="absolute w-64 bottom-0 left-16"
        />
      </div> 
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const count1 = ref(0)
const count2 = ref(0)
const count3 = ref(0)

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num)
}

const animateValue = (target, duration, element) => {
  const start = 0
  const increment = (target / duration) * 10
  let current = 0
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.value = target
      clearInterval(timer)
    } else {
      element.value = Math.round(current * 100) / 100
    }
  }, 10)
}

onMounted(() => {
  // Original counter animations
  animateValue(30, 2000, count1)
  animateValue(5000, 2000, count2)
  animateValue(90.99, 2000, count3)
  
  // Set initial state for the scroll animation
  gsap.set(sectionRef.value, {
    y: 80, // Start slightly below final position
    opacity: 0
  });
  
  // Create scroll-triggered animation
  gsap.to(sectionRef.value, {
    y: 0,
    opacity: 1,
    duration: 1.3, // Slightly slow animation for professional effect
    ease: "power3.out", // Smooth easing
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top bottom-=100", // Start animation when top of element is 100px from bottom of viewport
      end: "bottom center",
      toggleActions: "play none none none", // Play once when entering
      once: true, // Only trigger once
    }
  });
});
</script>