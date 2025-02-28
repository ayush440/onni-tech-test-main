<template>
  <section class=" md:py-20 mt-10 md:mt-24 relative overflow-hidden mx-auto px-8">
    <!-- Gradient Circle -->
    <img src="../assets/img/Gradient.png" alt="Gradient Background" class="absolute hidden xl:block opacity-20" />

    <div class="container mx-auto px-4 ">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Left Column -->
        <div class="max-w-xs mr-10  w-full xl:ml-10 relative mx-auto ">
          <div class="sticky top-0 ">
            <div ref="leftColumnContent" class="relative z-10">
              <h2 class="text-2xl md:text-4xl font-extrabold text-white mb-6 text-center xl:text-left ">
                The Ultimate Trading Features for Market Mastery
              </h2>
              <p class="text-[#E8E0E0] mb-8 text-center xl:text-left">
                Explore the power of intelligent trading with features designed for precision, speed, and seamless
                automation.
              </p>
            </div>

            <button ref="joinButton" @click="redirectToLogin"
              class="bg-[#4984C4] text-white px-8 py-4 rounded-md font-medium transition-colors flex justify-center items-center mx-auto xl:mx-0">
              Join Now
            </button>
          </div>

          <!-- Background Radial Gradient -->
          <div class="absolute inset-0 flex md:hidden items-center justify-center">
            <div
              class="w-[350px] h-[350px] xl:w-[1000px] bg-radial-gradient opacity-50 md:opacity-50 blur-3xl transform -translate-y-20">
            </div>
          </div>
        </div>

        <!-- Right Column - Features Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          <!-- Smart Strategy Builder -->
          <div ref="featureCard1" class="card-glow bg-[#4984C4] border border-white border-opacity-10 rounded-xl p-6 shadow-sm flex flex-col">
            <div class="mb-4 flex items-center justify-start h-16">
              <div ref="marketAnalysisAnimation" class="w-16 h-16"></div>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">
              Real-Time Market Analysis
            </h3>
            <p class="text-[#E8E0E0] flex-grow text-[14px]">
              Leverage AI-driven insights that continuously scan the markets, identifying profitable opportunities and
              executing trades at the perfect moment.
            </p>
          </div>

          <!-- Instant Alerts -->
          <div ref="featureCard2"
            class="card-glow bg-[#4984C4] border border-white border-opacity-10 rounded-xl p-6 row-span-2 pt-16 shadow-sm flex flex-col">
            <div class="mb-4 flex items-center justify-start h-16">
              <div ref="riskManagementAnimation" class="w-16 "></div>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 flex items-center">
              Risk Management Controls
            </h3>
            <p class="text-[#E8E0E0] flex-grow text-[14px]">
              Minimize potential losses with automated stop-loss, take-profit, and position-sizing strategies, ensuring
              disciplined and secure trading.
            </p>
          </div>

          <!-- AI-Powered Market Insights -->
          <div ref="featureCard3"
            class="card-glow bg-[#4984C4] border border-white border-opacity-10 rounded-xl p-6 row-span-2 pt-16 shadow-sm flex flex-col">
            <div class="mb-4 flex items-center justify-start h-16">
              <div ref="multiAssetsAnimation" class="w-16 h-16"></div>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">
              Multi-Asset Trading
            </h3>
            <p class="text-[#E8E0E0] flex-grow text-[14px]">
              Trade across various markets, including stocks, options, forex, and crypto, all from a single platform,
              optimizing diversification and efficiency.
            </p>
          </div>

          <!-- Auto-Execution -->
          <div ref="featureCard4" class="card-glow bg-[#4984C4] border border-white border-opacity-10 rounded-xl p-6 shadow-sm flex flex-col">
            <div class="mb-4 flex items-center justify-start h-16">
              <div ref="backtestingAnimation" class="w-16 h-16"></div>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">
              Backtesting & Optimization
            </h3>
            <p class="text-[#E8E0E0] flex-grow text-[14px]">
              Test and refine your trading strategies using historical data, allowing you to optimize performance before
              deploying them in live markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'TradingFeaturesSection',
  setup() {
    // Animation refs
    const marketAnalysisAnimation = ref(null);
    const riskManagementAnimation = ref(null);
    const multiAssetsAnimation = ref(null);
    const backtestingAnimation = ref(null);

    // Content refs for GSAP animations
    const leftColumnContent = ref(null);
    const joinButton = ref(null);
    const featureCard1 = ref(null);
    const featureCard2 = ref(null);
    const featureCard3 = ref(null);
    const featureCard4 = ref(null);

    const redirectToLogin = () => {
      window.open('https://app.omnitechalgo.com/', "_blank")
    }

    const loadAnimation = (container, path) => {
      try {
        lottie.loadAnimation({
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
      loadAnimation(marketAnalysisAnimation, '/src/assets/json/test-4.json');
      loadAnimation(riskManagementAnimation, '/src/assets/json/Risk.json');
      loadAnimation(multiAssetsAnimation, '/src/assets/json/multi.json');
      loadAnimation(backtestingAnimation, '/src/assets/json/Setting.json');
      
      // Initialize GSAP animations
      
      // Set initial states
      gsap.set([leftColumnContent.value, joinButton.value], {
        y: 50,
        opacity: 0
      });
      
      gsap.set([featureCard1.value, featureCard2.value, featureCard3.value, featureCard4.value], {
        y: 50,
        opacity: 0
      });
      
      // Left column animation
      gsap.to([leftColumnContent.value, joinButton.value], {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftColumnContent.value,
          start: "top 80%",
          once: true
        }
      });
      
      // Feature cards animation with stagger
      gsap.to([featureCard1.value, featureCard2.value, featureCard3.value, featureCard4.value], {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featureCard1.value,
          start: "top 80%",
          once: true
        }
      });
    });

    return {
      marketAnalysisAnimation,
      riskManagementAnimation,
      multiAssetsAnimation,
      backtestingAnimation,
      leftColumnContent,
      joinButton,
      featureCard1,
      featureCard2,
      featureCard3,
      featureCard4,
      redirectToLogin
    };
  }
};
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