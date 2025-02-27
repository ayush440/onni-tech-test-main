<template>
  <div class="w-[90%] mx-auto my-24">
    <div ref="ctaContainer" class="w-full mx-auto px-4 py-20 bg-[#4984c4] rounded-xl text-center relative overflow-hidden">
      <div class="absolute w-full inset-0 flex justify-between z-[0] pointer-events-none">
        <img src="/src/assets/img/loop.png" alt="">
        <img src="/src/assets/img/loop2.png" alt="" class="w-[40%]">
      </div>
      <div class="max-w-2xl mx-auto relative z-[1]">
        <h1 ref="ctaHeading" class="text-2xl md:text-4xl xl:text-4xl font-extrabold text-white mb-6 max-w-xl mx-auto">
          Step into the future of trading with intelligent automation!
        </h1>
        <p ref="ctaText" class="text-white text-lg mb-8 max-w-lg mx-auto">
          Experience seamless, emotion-free trading powered by smart algorithms.
        </p>
        <button ref="ctaButton" @click="redirectToLogin" class="bg-white text-[#21a5f0] py-4 px-8 rounded-md hover:bg-opacity-90 transition-all z-[1] relative">
          Sign up Now
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Refs for animation elements
const ctaContainer = ref(null);
const ctaHeading = ref(null);
const ctaText = ref(null);
const ctaButton = ref(null);

const redirectToLogin = () => {
  window.open('https://app.omnitechalgo.com/', "_blank");
};

onMounted(() => {
  // Container animation - subtle scale effect
  gsap.fromTo(
    ctaContainer.value,
    { scale: 0.95, opacity: 0.9 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ctaContainer.value,
        start: "top 80%",
        once: true
      }
    }
  );

  // Content animations with staggered timing
  gsap.fromTo(
    [ctaHeading.value, ctaText.value, ctaButton.value],
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.25,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ctaContainer.value,
        start: "top 75%",
        once: true
      }
    }
  );
});
</script>