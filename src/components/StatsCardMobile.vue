<template>
    <div class="bg-[#14171a] backdrop-blur-sm rounded-3xl mt-10 p-6 max-w-5xl w-full mx-5  border border-[#ffffff] border-opacity-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Left Content -->
        <div class="lg:col-span-5">
          <p class="text-sm text-white font-medium text-center">Let AI Do the Work!</p>
          <h2 class="text-2xl md:text-3xl font-bold text-[#E8E0E0] mt-2 leading-tight text-center">
            “The future of trading isn’t human - AI is transforming markets and trading the future today.”

          </h2>
        </div>
  
        
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
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
    animateValue(30, 2000, count1)
    animateValue(5000, 2000, count2)
    animateValue(90.99, 2000, count3)
  })
  </script>
  