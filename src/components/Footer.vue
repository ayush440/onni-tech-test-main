<template>
  <footer class="bg-[#0A0D10] pt-8 px-4 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        <!-- Logo and Description Column -->
        <div ref="logoColumn" class="col-span-3 lg:col-span-1 text-center lg:text-left">
          <div class="flex items-center justify-center lg:justify-start">
            <img src="../assets/img/omnitech-lg.png" alt="OMNITECH ALGO" class="w-40">
          </div>
          <p class="text-[#E8E0E0] mt-10 md:mt-2 text-md max-w-sm md:max-w-44 mx-auto md:mx-0">
            Innovative trading solutions designed for efficiency, accuracy, and success
          </p>
          <div class="flex justify-center lg:justify-start space-x-4 mt-4">
            <a href="#" class="text-white hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4984c4]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" class="text-white hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4984c4]"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" class="text-white hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4984c4]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" class="text-white hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#4984c4]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links Section -->
        <div ref="quickLinksDesktop" class="text-center lg:text-left hidden lg:block">
          <h3 class="font-semibold text-white mb-6 text-xl">Quick links</h3>
          <ul class="space-y-4">
            <li>
              <a href="#" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Why Algo
              </a>
            </li>
            <li>
              <a href="#" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Features
              </a>
            </li>
            <li>
              <a href="#" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                How its works
              </a>
            </li>
            <li>
              <a href="#" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Videos
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal Section -->
        <div ref="legalSection" class="text-center lg:text-left">
          <h3 class="font-semibold text-white mb-6 text-xl lg:block hidden">Legal</h3>
          <ul class="space-y-4 hidden lg:block">
            <li>
              <router-link to="/terms/t&c" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Terms & Conditions
              </router-link>
            </li>
            <li>
              <router-link to="/terms/disclaimer" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Disclaimer
              </router-link>
            </li>
            <li>
              <router-link to="/terms/privacy-policy" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Privacy Policy
              </router-link>
            </li>
            <li>
              <router-link to="/terms/refund-policy" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Refund Policy
              </router-link>
            </li>
            <li>
              <router-link to="/terms/disclosure" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Disclosure
              </router-link>
            </li>
            <li>
              <!-- <router-link to="/contact" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Contact Us
              </router-link> -->
            </li>
          </ul>

          <!-- Mobile view content preserved -->
          <h3 class="font-semibold text-white mb-4 lg:hidden">Legal</h3>
          <ul class="space-y-3 lg:hidden">
            <li>
              <router-link to="/terms/t&c" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Terms & Conditions
              </router-link>
            </li>
            <li>
              <router-link to="/terms/privacy-policy" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Privacy Policy
              </router-link>
            </li>
            <li>
              <router-link to="/terms/refund-policy" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Refund Policy
              </router-link>
            </li>
            <li>
              <router-link to="/terms/disclosure" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Disclosure
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Quick Links Mobile (preserved) -->
        <div ref="quickLinksMobile" class="text-center lg:text-left lg:hidden">
          <h3 class="font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <a href="#how" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                How it works
              </a>
            </li>
            <li>
              <a href="#why" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Why algo
              </a>
            </li>
            <li>
              <a href="#features" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" class="text-[#E8E0E0] hover:text-[#4984C4] transition-colors text-md">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <!-- Address and Contact Section -->
        <div ref="contactColumn" class="col-span-3 lg:col-span-1 text-center lg:text-left">
          <h3 class="font-semibold text-white mb-6 text-xl hidden lg:block">Address</h3>
          <p class="text-[#E8E0E0] text-md mb-6 hidden lg:block">
            556 ,MH.B Colony ,Satpur colony, Nashik
          </p>
          
          <h3 class="font-semibold text-white mb-6 text-xl hidden lg:block">Contact</h3>
          <div class="space-y-2 hidden lg:block">
            <p class="text-[#E8E0E0] text-md">+91-9028033569</p>
            <p class="text-[#E8E0E0] text-md">+91-9284280668</p>
          </div>
          
          <h3 class="font-semibold text-white mb-2 text-xl hidden lg:block mt-5">Email</h3>
          <a href="mailto:info@omnitechalgo.com" class="text-[#E8E0E0] text-md underline hidden lg:block">
            info@omnitechalgo.com
          </a>

          <!-- Mobile view content preserved -->
          <h3 class="font-semibold text-white mb-4 lg:hidden">Address</h3>
          <ul class="space-y-4 lg:hidden">
            <li class="flex items-center md:justify-center xl:justify-start">
              <img src="../assets/svg/location.svg" alt="" class="w-5 h-5 mr-3 mt-1">
              <a class="text-[#E8E0E0] text-md">556 ,MH.B COLONY ,SATPUR COLONY, NASHIK</a>
            </li>
          </ul>
          <h3 class="font-semibold text-white my-4 lg:hidden">Contact Us</h3>
          <ul class="space-y-4 lg:hidden">
            <li class="flex items-center md:justify-center xl:justify-start">
              <img src="../assets/svg/call.svg" alt="" class="w-5 h-5 mr-3">
              <a href="tel:+919028033569" class="text-[#E8E0E0] text-md">+91-9028033569</a> &nbsp;&nbsp;
              <a href="tel:+919284280668" class="text-[#E8E0E0] text-md">+91-9284280668</a>
            </li>
            <li class="flex items-center md:justify-center xl:justify-start">
              <img src="../assets/svg/mail.svg" alt="" class="w-4 h-4 mr-3">
              <a href="mailto:info@omnitechalgo.com" class="text-white text-md">
                info@omnitechalgo.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section with Backed By and Copyright -->
      <div ref="footerBottom" class="border-t border-gray-800 py-6 flex flex-col lg:flex-row justify-between items-center">
        <div class="flex items-center mb-4 lg:mb-0">
          <span class="text-[#E8E0E0] text-sm mr-2">Backed By</span>
          <img src="../assets/img/xtention-lg.png" alt="Xtention" class=" w-28" />
        </div>
        <div class="text-[#E8E0E0] text-sm">
          All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const router = useRouter();

// Refs for animation elements
const logoColumn = ref(null);
const quickLinksDesktop = ref(null);
const legalSection = ref(null);
const quickLinksMobile = ref(null);
const contactColumn = ref(null);
const footerBottom = ref(null);

onMounted(() => {
  // Animation for the main columns in desktop view
  const footerColumns = [
    logoColumn.value, 
    quickLinksDesktop.value, 
    legalSection.value, 
    contactColumn.value
  ];
  
  // Animate the four main columns with stagger
  gsap.fromTo(
    footerColumns,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: logoColumn.value,
        start: "top 85%",
        once: true
      }
    }
  );
  
  // Mobile quick links column animation
  gsap.fromTo(
    quickLinksMobile.value,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: quickLinksMobile.value,
        start: "top 85%",
        once: true
      }
    }
  );
  
  // Bottom section animation
  gsap.fromTo(
    footerBottom.value,
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footerBottom.value,
        start: "top 90%",
        once: true
      }
    }
  );
});
</script>