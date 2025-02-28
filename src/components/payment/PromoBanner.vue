<template>
  <div class="flex justify-center items-center bg-[#14171a] py-16">
    <div class="w-full max-w-4xl mx-auto px-4">
      <div ref="bankDetailsCard" class="rounded-2xl border border-blue-500 bg-[#0E1A30] p-10 card-glow">
        <div class="flex flex-col md:flex-row items-start md:items-center">
          <!-- Left Side - QR Code -->
          <div ref="qrSection" class="mb-8 md:mb-0 flex-shrink-0">
            <div class="bg-blue-500 rounded-lg p-4 w-52 h-52 md:w-64 md:h-64 flex items-center justify-center mx-auto ml-8 md:ml-0">
              <img src="/src/assets/img/QR1.jpeg" alt="QR Code" class="w-full h-full" />
            </div>
            <div ref="upiDetails" class="text-white mt-4">
              <p class="text-sm text-gray-400">UPI ID:</p>
              <p class="text-sm md:text-base font-medium break-all">yogesh.kshirsagar20002@okhdfcbank</p>
            </div>
          </div>
          
          <!-- Vertical Dashed Separator -->
          <div class="hidden md:block h-64 border-l border-dashed border-gray-500 mx-20"></div>
          
          <!-- Mobile Horizontal Separator -->
          <div class="block md:hidden w-full border-t border-dashed border-gray-500 my-6"></div>
          
          <!-- Right Side - Bank Details -->
          <div ref="detailsSection" class="text-white space-y-6 flex-grow">
            <div>
              <p class="text-sm text-gray-400">Bank name</p>
              <p class="text-base md:text-lg font-medium">Union Bank of India</p>
            </div>
            
            <div>
              <p class="text-sm text-gray-400">Account name</p>
              <p class="text-base md:text-lg font-medium">YOGESH RAMESH KSHIRSAGAR</p>
            </div>
            
            <div>
              <p class="text-sm text-gray-400">Account Number</p>
              <p class="text-base md:text-lg font-medium">696902010000818</p>
            </div>
            
            <div>
              <p class="text-sm text-gray-400">IFSC Code</p>
              <p class="text-base md:text-lg font-medium">UBINO569691</p>
            </div>
          </div>
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
  name: "BankDetailsCard",
  setup() {
    // Create refs for animation targets
    const bankDetailsCard = ref(null);
    const qrSection = ref(null);
    const upiDetails = ref(null);
    const detailsSection = ref(null);
    
    // Setup animations after component mounts
    onMounted(() => {
      // Set initial state
      gsap.set(bankDetailsCard.value, {
        y: 30,
        opacity: 0
      });
      
      gsap.set([qrSection.value, detailsSection.value], {
        y: 20,
        opacity: 0
      });
      
      // Animate the card container
      gsap.to(bankDetailsCard.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bankDetailsCard.value,
          start: "top 80%",
          once: true
        }
      });
      
      // Animate QR section
      gsap.to(qrSection.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bankDetailsCard.value,
          start: "top 75%",
          once: true
        }
      });
      
      // Animate details section
      gsap.to(detailsSection.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bankDetailsCard.value,
          start: "top 75%",
          once: true
        }
      });
    });
    
    return {
      bankDetailsCard,
      qrSection,
      upiDetails,
      detailsSection
    };
  }
};
</script>

<style scoped>
.card-glow {
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
}

.card-glow::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #3b82f6, transparent, #3b82f6);
  z-index: -1;
  border-radius: inherit;
  opacity: 0.4;
}

.break-all {
  word-break: break-all;
}
</style>