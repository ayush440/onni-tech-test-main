<template>
  <div class="bg-[#14171A] py-14 md:py-24 px-4 md:px-6 lg:px-16 font-satoshi min-h-screen">
    <div ref="headingSection" class="text-center mb-12 max-w-3xl mx-auto">
      <h2 ref="mainHeading" class="text-2xl text-white md:text-4xl font-extrabold mb-4 max-w-md mx-auto">Pick a plan that suits you!</h2>
      <p ref="headingDescription" class="text-[#E8E0E0] max-w-2xl mx-auto">Get the right tools, automation, and strategies to maximize your
        trading success.</p>
    </div>

    <div ref="tabsContainer"
      class="flex flex-wrap items-center justify-center sm:gap-3 border border-[#4984C4] rounded-full w-max mx-auto p-1">

      <button v-for="item in tabs" :key="item" :class="[
        'py-2 px-4 sm:px-6 rounded-full font-medium transition-colors text-sm md:text-base',
        item === activeTab ? 'bg-[#4984C4] text-white' : 'text-[#A0ABBB]'
      ]" @click="activeTab = item">
        {{ item }}
      </button>

    </div>

    <div ref="desktopSaveSection" class="mx-auto hidden max-w-xl mb-10 flex-col items-end justify-center md:flex">
        <div ref="desktopLottieContainer" class="w-24 h-16 pr-6 rotate-45"></div>
        <span class="text-[#21A5F0] ">Save 25%</span>
    </div>


    <div ref="mobileSaveSection" class="flex flex-col items-center justify-center text-center transform translate-x-16 mb-8 md:hidden ">
      <div ref="mobileLottieContainer" class="w-16 h-16 rotate-45"></div>
      <span class="text-[#21A5F0] text-md">Save 25%</span>
    </div>

    <div ref="plansContainer" class="flex flex-col text-white lg:flex-row justify-center gap-6 max-w-7xl mx-auto">
      <div v-for="(plan, index) in plans" :key="index" ref="planCards" 
        :class="['plan-card flex-1 p-6 rounded-xl max-w-md mx-auto w-full transition-all duration-500',
          (selectedPlan === index && hoveredPlan === null) || hoveredPlan === index 
            ? 'bg-[#4984c4] text-white shadow-glow' 
            : 'border border-white border-opacity-10']"
        @mouseenter="hoveredPlan = index"
        @mouseleave="hoveredPlan = null"
        @click="selectedPlan = index">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-semibold mb-2">{{ plan.name }}</h3>
            <p class="text-sm max-w-2xl leading-tight text-[#E8E0E0]">
              {{ plan.subpoint }}
            </p>
          </div>
          <span v-if="plan.discount"
  :class="[
    'text-center py-1 w-full md:w-28 rounded-full text-xs transition-all duration-300',
    (selectedPlan === index && hoveredPlan === null) || hoveredPlan === index
      ? 'bg-white text-[#4984c4]'
      : 'bg-[#21A5F01A] text-[#4984c4]'
  ]">
  {{ plan.discount }}
</span>

        </div>
        <div class="text-5xl font-bold my-8 flex items-baseline">
          ₹{{ activeTab === 'Monthly' ? plan.monthPrice : activeTab === 'Quarterly' ? plan.quaterlyPrice : activeTab ===
            'Half Yearly' ? plan.halfyearlyPrice : plan.yearlyPrice }}
          <span class="text-sm ml-1 font-normal text-[#E8E0E0]">/
            Month</span>
        </div>
        <button :class="['w-full py-3 rounded-lg font-medium border transition-colors duration-300',
          (selectedPlan === index && hoveredPlan === null) || hoveredPlan === index
            ? 'bg-white text-[#21A5F0] border-white hover:bg-gray-100'
            : 'border-[#21A5F0] text-[#21A5F0] hover:bg-[#21A5F022] hover:text-white']">
          Get Started Now
        </button>
        <div class="mt-6 space-y-3">
          <div v-for="(feature, fIndex) in plan.features" :key="fIndex" class="flex items-center">
            <img v-if="feature.included && ((selectedPlan === index && hoveredPlan === null) || hoveredPlan === index)" 
              src="../assets/svg/check1.svg" alt="" class="mr-2 flex-shrink-0">
            <img v-else-if="feature.included" 
              src="../assets/svg/check6.svg" alt="" class="mr-2 flex-shrink-0">
            <img v-else src="../assets/svg/check2.svg" alt="" class="mr-2 flex-shrink-0">
            <span :class="!feature.included && ((selectedPlan === index && hoveredPlan === null) || hoveredPlan === index) ? 'text-gray-200' : ''">
              {{ feature.text }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import lottie from 'lottie-web';
import pricingArrowAnimation from '/src/assets/json/pricing-arow.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const activeTab = ref('Monthly');
const hoveredPlan = ref(null);
const selectedPlan = ref(1); // Default to Standard Plan (index 1)

const tabs = ['Monthly', 'Quarterly', 'Half Yearly'];

const plans = ref([
  {
    name: 'Basic',
    subpoint: 'Essential features for a smooth trading experience',
    monthPrice: 9999,
    quaterlyPrice: 24000,
    halfyearlyPrice: 45000,
    yearlyPrice: 35000,
    discount: 'Get 20% off',
    featured: false,
    features: [
      { text: 'Basic Algorithm Features', included: true },
      { text: '1 Algorithm', included: true },
      { text: '2-3 Daily Trades', included: true },
      { text: 'Paper Trading', included: true },
      { text: 'Email Support', included: true },
      { text: 'WhatsApp Support', included: true },
    ]
  },
  {
    name: 'Standard',
    subpoint: 'Unlock powerful tools & enhanced features for a smarter, more efficient trading experience.',
    monthPrice: 15000,
    quaterlyPrice: 36000,
    halfyearlyPrice: 72000,
    yearlyPrice: 45000,
    discount: null,
    featured: true,
    features: [
      { text: 'Standard Algorithm Features', included: true },
      { text: '3 Algorithms', included: true },
      { text: '4-5 Daily Trades', included: true },
      { text: 'Paper Trading', included: true },
      { text: 'Priority Email Support', included: true },
      { text: 'WhatsApp Support', included: true },
      { text: 'Basic Reporting', included: true },
    ]
  },
  {
    name: 'Premium',
    subpoint: 'Complete access with premium features for pro traders',
    monthPrice: 25000,
    quaterlyPrice: 60000,
    halfyearlyPrice: 120000,
    yearlyPrice: 55000,
    discount: 'Get 20% off',
    featured: false,
    features: [
      { text: 'Advanced Algorithm Features', included: true },
      { text: '5+ Algorithms', included: true },
      { text: '5-8 Daily Trades', included: true },
      { text: 'Paper Trading', included: true },
      { text: '24/7 Support', included: true },
      { text: 'WhatsApp Support', included: true },
      { text: 'Detailed Analytics & Reporting', included: true },
      { text: 'Customizable Options', included: true },
    ]
  }
]);

// Refs for animation targets
const headingSection = ref(null);
const mainHeading = ref(null);
const headingDescription = ref(null);
const tabsContainer = ref(null);
const desktopSaveSection = ref(null);
const mobileSaveSection = ref(null);
const plansContainer = ref(null);
const planCards = ref([]);

const desktopLottieContainer = ref(null);
const mobileLottieContainer = ref(null);


const initLottieAnimations = () => {
  if (desktopLottieContainer.value) {
    lottie.loadAnimation({
      container: desktopLottieContainer.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: pricingArrowAnimation
    });
  }

  if (mobileLottieContainer.value) {
    lottie.loadAnimation({
      container: mobileLottieContainer.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: pricingArrowAnimation
    });
  }
};

onMounted(() => {
  initLottieAnimations();
  
  // Initialize GSAP animations
  
  // Set initial states (elements slightly below their normal position)
  gsap.set([mainHeading.value, headingDescription.value], {
    y: 50,
    opacity: 0
  });
  
  gsap.set(tabsContainer.value, {
    y: 50,
    opacity: 0
  });
  
  gsap.set([desktopSaveSection.value, mobileSaveSection.value], {
    y: 50,
    opacity: 0
  });
  
  gsap.set(planCards.value, {
    y: 50,
    opacity: 0
  });
  
  // Create staggered animation for heading section
  gsap.to([mainHeading.value, headingDescription.value], {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: headingSection.value,
      start: "top 80%",
      once: true
    }
  });
  
  // Animate tabs container
  gsap.to(tabsContainer.value, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: tabsContainer.value,
      start: "top 80%",
      once: true
    }
  });
  
  // Animate save sections
  gsap.to([desktopSaveSection.value, mobileSaveSection.value], {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.4,
    scrollTrigger: {
      trigger: desktopSaveSection.value,
      start: "top 80%",
      once: true
    }
  });
  
  // Animate plan cards with stagger
  gsap.to(planCards.value, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: plansContainer.value,
      start: "top 80%",
      once: true
    }
  });
});
</script>


<style>
@font-face {
  font-family: 'Satoshi';
  src: url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700&display=swap');
}

.font-satoshi {
  font-family: 'Satoshi', sans-serif;
}

.plan-card {
  position: relative;
  transition: all 0.5s ease;
  outline: none;
  border: 1px solid transparent;
}

.plan-card:hover {
  box-shadow: 0 0 15px 2px rgba(73, 132, 196, 0.3);
}

.shadow-glow {
  box-shadow: 0 0 15px 2px rgba(73, 132, 196, 0.3);
  border-color: transparent !important;
}

/* Remove the pseudo-elements that were causing the white border issue */
.plan-card::before,
.plan-card::after {
  display: none;
}
</style>