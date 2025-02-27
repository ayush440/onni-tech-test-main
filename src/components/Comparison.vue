<template>
  <section class="max-w-7xl my-24 mx-auto text-center px-4 md:px-8 relative ">
    <div class="absolute inset-0 w-full flex justify-between">
      <div class="bg-[#172F49]  h-[200px] w-[200px] blur-3xl bg-opacity-50">

      </div>
      <div class="bg-[#172F49]  h-[200px] w-[200px] blur-3xl bg-opacity-50">

      </div>
    </div>

    <!-- Adjusted padding for better tablet view -->
    <div ref="headingSection" class="max-w-2xl mx-auto">
      <h2 class="text-2xl md:text-4xl font-extrabold text-white">
        Say goodbye to stress and hello to smart trading
      </h2>
      <p class="text-[#E8E0E0] mt-5 max-w-2xl mx-auto">
        Unlike traditional manual trading, we offer automation powered by smart strategies to enhance your trading
        experience.
      </p>
    </div>


    <!-- Steps Section - Optimized for tablet -->
    <div
      class="mt-24 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center gap-6 md:gap-4 lg:gap-12">
      <!-- Step 1 -->
      <div ref="step1" class="flex flex-col items-center md:w-[45%] lg:w-auto">
        <div class="w-14 h-14 bg-opacity-40 bg-[#21A5F0] rounded-lg flex items-center justify-center">
          <!-- <img src="/src/assets/svg/sign-up.svg" alt=""> -->
          <div ref="signupAnimation" class="w-16 h-16"></div>
        </div>
        <p class="text-[#E8E0E0] font-medium mt-4 max-w-[160px]">Sign up in minutes and get started.</p>
      </div>

      <!-- Connector 1 -->
      <div ref="connector1" class="md:hidden lg:block">
        <img src="../assets/img/Ellipse.png" alt="" class="rotate-90 md:rotate-0 py-8 md:py-0 w-24 md:w-full">
      </div>

      <!-- Step 2 -->
      <div ref="step2" class="flex flex-col items-center md:w-[45%] lg:w-auto">
        <div class="w-14 h-14 bg-opacity-40 bg-[#21A5F0] rounded-lg flex items-center justify-center">
          <!-- <img src="/src/assets/svg/connect.svg" alt=""> -->
          <div ref="connectAnimation" class="w-16 p-1 h-16"></div>
        </div>
        <p class="text-[#E8E0E0] font-medium mt-4 max-w-[160px]">Connect your broker for seamless integration. </p>
      </div>

      <!-- Connector 2 -->
      <div ref="connector2" class="md:hidden lg:block">
        <img src="../assets/img/Ellipse2.png" alt="" class="rotate-90 md:rotate-0 py-8 md:py-0 w-24 md:w-full">
      </div>

      <!-- Step 3 -->
      <div ref="step3" class="flex flex-col items-center md:w-[45%] lg:w-auto">
        <div class="w-14 h-14 bg-opacity-40 bg-[#21A5F0] rounded-lg flex items-center justify-center">
          <!-- <img src="/src/assets/svg/graph.svg" alt=""> -->
          <div ref="strategyAnimation" class="w-16 p-2 h-16"></div>
        </div>
        <p class="text-[#E8E0E0] font-medium mt-4 max-w-[160px]">Choose a strategy that fits your trading style.</p>
      </div>

      <!-- Connector 3 -->
      <div ref="connector3" class="md:hidden lg:block">
        <img src="../assets/img/Ellipse.png" alt="" class="rotate-90 md:rotate-0 py-8 md:py-0 w-24 md:w-full">
      </div>

      <!-- Step 4 -->
      <div ref="step4" class="flex flex-col items-center md:w-[45%] lg:w-auto">
        <div class="w-14 h-14 bg-opacity-40 bg-[#21A5F0] rounded-lg flex items-center justify-center">
          <!-- <img src="/src/assets/svg/ai.svg" alt=""> -->
          <div ref="aiAnimation" class="w-16 h-16 p-2"></div>
        </div>
        <p class="text-[#E8E0E0] font-medium mt-4 max-w-[160px]">Deploy trades automatically and let AI work for you.
        </p>
      </div>
    </div>


    <div ref="statsSection" class=" w-full py-10 relative mt-32">
      <!-- Stats -->
      <div class="bg-[#172F49] absolute h-[200px] w-full z-[-1] blur-3xl bg-opacity-60">

      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <div ref="statCard1" class="bg-[#4984C4] py-8 rounded-lg ">
          <h3 class="text-3xl font-extrabold text-white">
            {{ count1 }}+
          </h3>
          <p class="text-white mt-1">Customizable Strategies</p>
        </div>
        <div ref="statCard2" class="bg-[#4984C4] py-8 rounded-lg">
          <h3 class="text-3xl font-extrabold text-white">
            {{ formatNumber(count2) }}+
          </h3>
          <p class="text-white mt-1">Active Users</p>
        </div>
        <div ref="statCard3" class="bg-[#4984C4] py-8 rounded-lg">
          <h3 class="text-3xl font-extrabold text-white">
            {{ count3 }}%
          </h3>
          <p class="text-white mt-1">Trade Execution Accuracy</p>
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

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Animation refs
const signupAnimation = ref(null);
const connectAnimation = ref(null);
const strategyAnimation = ref(null);
const aiAnimation = ref(null);

// Content refs for GSAP animations
const headingSection = ref(null);
const step1 = ref(null);
const step2 = ref(null);
const step3 = ref(null);
const step4 = ref(null);
const connector1 = ref(null);
const connector2 = ref(null);
const connector3 = ref(null);
const statsSection = ref(null);
const statCard1 = ref(null);
const statCard2 = ref(null);
const statCard3 = ref(null);

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
  loadAnimation(signupAnimation, '/src/assets/json/tap.json');
  loadAnimation(connectAnimation, '/src/assets/json/link.json');
  loadAnimation(strategyAnimation, '/src/assets/json/graph.json');
  loadAnimation(aiAnimation, '/src/assets/json/ai.json');
  
  // Initialize GSAP animations
  
  // Set initial states
  gsap.set(headingSection.value, {
    y: 50,
    opacity: 0
  });
  
  gsap.set([step1.value, step2.value, step3.value, step4.value], {
    y: 50,
    opacity: 0
  });
  
  gsap.set([connector1.value, connector2.value, connector3.value], {
    opacity: 0
  });
  
  gsap.set([statCard1.value, statCard2.value, statCard3.value], {
    y: 50,
    opacity: 0
  });
  
  // Heading section animation
  gsap.to(headingSection.value, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: headingSection.value,
      start: "top 80%",
      once: true
    }
  });
  
  // Steps animation with stagger
  gsap.to([step1.value, step2.value, step3.value, step4.value], {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: step1.value,
      start: "top 80%",
      once: true
    }
  });
  
  // Connectors animation 
  gsap.to([connector1.value, connector2.value, connector3.value], {
    opacity: 1,
    duration: 1.5,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: step1.value,
      start: "top 80%",
      once: true
    }
  });
  
  // Stats cards animation
  gsap.to([statCard1.value, statCard2.value, statCard3.value], {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: statsSection.value,
      start: "top 80%",
      once: true
    }
  });
})

const count1 = ref(0)
const count2 = ref(0)
const count3 = ref(0)


const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num)
}

const animateValue = (target, duration, element, isInteger = false) => {
  const start = 0;
  const increment = (target / duration) * 30;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.value = isInteger ? Math.round(target) : Math.round(target * 100) / 100;
      clearInterval(timer);
    } else {
      element.value = isInteger ? Math.round(current) : Math.round(current * 100) / 100;
    }
  }, 10);
};


onMounted(() => {
  animateValue(10, 2000, count1, true); // Ensures count1 is always a whole number
  animateValue(1000, 2000, count2);
  animateValue(90.99, 2000, count3);
});


</script>