<template>
  <section class=" py-8 md:py-32 pt-28 md:pt-48 -mt-28 bg-[#14171A]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl">
      <!-- Header Section -->
      <div ref="headerRef" class="text-center mb-8 sm:mb-10 md:mb-12 pt-10">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">
          Why Algo Trading?
        </h2>
        <p class="text-sm sm:text-base text-white font-[400] max-w-4xl mx-auto px-4 sm:px-6 mt-5">
          The market waits for no one. So, algo trading ensures you never miss an opportunity. Automate your trades, minimize risk, and trade smarter with strategies designed for success. 
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white sm:gap-6 md:gap-8 max-w-7xl mx-auto">
        <!-- Lightning-fast execution -->
        <div ref="card1" class="card-glow border-4 border-white border-opacity-10 hover:border-4 hover:border-[#4984c4] rounded-lg p-4 sm:p-6 md:p-8 shadow-sm transform transition-transform duration-300 md:hover:scale-105">
          <div class="rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
            <div ref="test1" class=""></div>
          </div>
          <h3 class="text-[16px] font-semibold mb-2 sm:mb-3 text-left">
            Speed
          </h3>
          <p class="text-sm  text-[#E8E0E0] text-[14px] text-left">
            Execute trades in milliseconds and never miss a market move.
          </p>
        </div>

        <!-- No coding required -->
        <div ref="card2" class="card-glow border-4 border-white border-opacity-10 hover:border-4 hover:border-[#4984c4] rounded-lg p-4 sm:p-6 md:p-8 shadow-sm transform transition-transform duration-300 md:hover:scale-105">
          <div class="rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
            <div ref="test2" ></div>
          </div>
          <h3 class="text-[16px] font-semibold mb-2 sm:mb-3 text-left">
            Precision 
          </h3>
          <p class="text-sm  text-[#E8E0E0] text-[14px] text-left">
            Trade with data-driven accuracy, eliminating emotions and errors.
          </p>
        </div>

        <!-- 24/7 market tracking -->
        <div ref="card3" class="card-glow border-4 border-white border-opacity-10 hover:border-4 hover:border-[#4984c4] rounded-lg p-4 sm:p-6 md:p-8 shadow-sm transform transition-transform duration-300 md:hover:scale-105">
          <div class="rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
            <div ref="test3" ></div>
          </div>
          <h3 class="text-[16px] font-semibold mb-2 sm:mb-3 text-left">
            Automation 
          </h3>
          <p class="text-sm  text-[#E8E0E0] text-[14px] text-left">
            Let your trades run 24/7 while you focus on what matters.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Lottie from 'lottie-web';
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ani1 from '/src/assets/json/speed.json'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Refs
const headerRef = ref(null);
const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const test1 = ref(null);
const test2 = ref(null);
const test3 = ref(null);

const loadAnimation = (container, path) => {
  try {
    Lottie.loadAnimation({
      container: container.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: path,
      onError: (error) => {
        console.error(`Error loading animation from ${path}:`, error);
      },
    });
  } catch (error) {
    console.error('Error initializing animation:', error);
  }
};
    
onMounted(() => {
  // Load Lottie animations
  loadAnimation(test1, '/public/json/speed.json');
  loadAnimation(test2, '/public/json/test2.json');
  loadAnimation(test3, '/public/json/test3.json');
  
  // Set initial states for smooth animations
  gsap.set(headerRef.value, {
    y: 60,
    opacity: 0
  });
  
  // Set initial states for cards with staggered starting positions
  gsap.set([card1.value, card2.value, card3.value], {
    y: 80,
    opacity: 0,
    autoAlpha: 0
  });
  
  // Animate header
  gsap.to(headerRef.value, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: headerRef.value,
      start: "top bottom-=100", 
      toggleActions: "play none none none",
      once: true
    }
  });
  
  // Animate cards with staggered timing for a smooth sequence
  gsap.to([card1.value, card2.value, card3.value], {
    y: 0,
    opacity: 1,
    autoAlpha: 1,
    duration: 0.8,
    stagger: 0.15, // Staggered timing between each card
    ease: "power2.out",
    scrollTrigger: {
      trigger: card1.value,
      start: "top bottom-=50",
      toggleActions: "play none none none",
      once: true
    }
  });
})
</script>

<style scoped>
.card-glow {
  position: relative;
  transition: all 0.3s ease;
}

.card-glow:hover {
  box-shadow: 0 0 15px 2px rgba(255, 255, 255, 0.1);
}


/* Top left and bottom right corners */
.card-glow::before {
  top: -2px;
  left: -2px;
  border-top: 2px solid rgba(255, 255, 255, 0.4);
  border-left: 2px solid rgba(255, 255, 255, 0.4);
  border-top-left-radius: 8px;
}

/* Bottom right and top right corners */
.card-glow::after {
  bottom: -2px;
  right: -2px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  border-right: 2px solid rgba(255, 255, 255, 0.4);
  border-bottom-right-radius: 8px;
}

.card-glow:hover::before,
.card-glow:hover::after {
  opacity: 1;
  box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.2);
}
</style>