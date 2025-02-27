<template>
  <div class="flex justify-center items-center py-14 bg-black">
    <div class="w-full max-w-6xl mx-auto px-4">
      <div ref="promoBanner" class="rounded-3xl border-2 border-blue-500 bg-[#0E1A30] flex flex-col md:flex-row items-start md:items-center justify-between p-10 md:p-12">
        <div ref="promoText" class="text-white mb-6 md:mb-0">
          <h2 ref="promoHeading" class="text-3xl md:text-4xl font-bold leading-tight">Get 20% Off on Your First<br class="hidden sm:block" /> Algo Trading!</h2>
          <p ref="promoDescription" class="text-gray-300 mt-3 text-base md:text-lg">Boost your trading with AI-powered strategies.</p>
        </div>
        <div ref="promoAction" class="text-right w-full md:w-auto">
          <p ref="promoOffer" class="text-gray-400 mb-3">Limited-time offer!</p>
          <button class="w-full md:w-auto bg-[#4D96DA] hover:bg-blue-600 text-white text-lg font-medium py-3 px-8 rounded-lg transition">
            Join Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "PromoBanner",
  setup() {
    // Create refs for animation targets
    const promoBanner = ref(null);
    const promoText = ref(null);
    const promoHeading = ref(null);
    const promoDescription = ref(null);
    const promoAction = ref(null);
    const promoOffer = ref(null);

    // Setup animations after component mounts
    onMounted(() => {
      // Set initial state (slightly below normal position)
      gsap.set([promoHeading.value, promoDescription.value], {
        y: 50,
        opacity: 0
      });
      
      gsap.set([promoAction.value, promoOffer.value], {
        y: 50,
        opacity: 0
      });

      // Create staggered animation for text elements
      gsap.to([promoHeading.value, promoDescription.value], {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: promoText.value,
          start: "top 80%",
          once: true
        }
      });

      // Animate action section
      gsap.to([promoOffer.value, promoAction.value], {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: promoAction.value,
          start: "top 75%",
          once: true
        }
      });
    });

    return {
      promoBanner,
      promoText,
      promoHeading,
      promoDescription,
      promoAction,
      promoOffer
    };
  }
};
</script>

<style scoped>
</style>