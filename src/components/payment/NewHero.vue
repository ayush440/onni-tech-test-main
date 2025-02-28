<template>
  <section class="payment-section py-8 md:py-14 relative overflow-hidden ">
    <div class="container px-16  ">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <!-- Left Content Column -->
        <div ref="contentColumn" class="max-w-3xl w-full relative z-10">
          <h2 class="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight text-center md:text-left">
            Secure & Seamless Payments for Your Algo Trading Journey
          </h2>

        </div>
        
        <!-- Right Animation Column -->
        <div class="w-full lg:w-1/2 flex justify-center items-center">
          <div ref="walletAnimationContainer" class="w-64 h-64 md:w-96 md:h-96  mx-auto"></div>
        </div>
      </div>
    </div>
    
    <!-- Background Gradient Effect -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import lottie from 'lottie-web';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'PaymentSection',
  setup() {
    const walletAnimationContainer = ref(null);
    const contentColumn = ref(null);
    const ctaButton = ref(null);
    
    const redirectToPayment = () => {
      window.open('https://app.omnitechalgo.com/payment', '_blank');
    };
    
    onMounted(() => {
      // Load wallet animation
      try {
        lottie.loadAnimation({
          container: walletAnimationContainer.value,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/src/assets/json/rupee-wallet.json', // Update with your actual path
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        });
      } catch (error) {
        console.error('Error loading wallet animation:', error);
      }
      
      // Set initial animation states
      gsap.set([contentColumn.value, ctaButton.value], {
        y: 50,
        opacity: 0
      });
      
      gsap.set(walletAnimationContainer.value, {
        scale: 0.8,
        opacity: 0
      });
      
      // Animate content on scroll
      gsap.to(contentColumn.value, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentColumn.value,
          start: "top 80%",
          once: true
        }
      });
      
      // Animate button with slight delay
      gsap.to(ctaButton.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaButton.value,
          start: "top 90%",
          once: true
        }
      });
      
      // Animate wallet
      gsap.to(walletAnimationContainer.value, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: walletAnimationContainer.value,
          start: "top 80%",
          once: true
        }
      });
    });
    
    return {
      walletAnimationContainer,
      contentColumn,
      ctaButton,
      redirectToPayment
    };
  }
};
</script>

<style scoped>
.payment-section {
  background-color: #4984C4;
  position: relative;
  overflow: hidden;
}

/* Optional hover effect for the button */
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>