<template>
    <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="floating-whatsapp">
      <div class="whatsapp-icon">
        <img src="../assets/img/whatsapp.png" alt="" class="w-14" />
      </div>
    </a>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  


  const whatsappLink = ref(`https://wa.me/qr/IEZI7KT7244RD1`);
  </script>
  
  <style scoped>
  .floating-whatsapp {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .whatsapp-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background-color: #25D366;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    color: white;
    transition: transform 0.3s ease;
  }
  
  .whatsapp-icon:hover {
    transform: scale(1.1);
  }
  
  .whatsapp-icon svg {
    width: 30px;
    height: 30px;
  }
  </style>