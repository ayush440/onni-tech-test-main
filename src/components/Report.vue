<template>
    <div class="min-h-screen bg-[#151719] text-white p-6 font-['Cabinet_Grotesk']">
      <!-- Error Alert -->
      <div v-if="error" class="mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg-lg">
        {{ error }}
      </div>
  
      <div class="max-w-7xl mx-auto mt-10">
       
  
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Form Section -->
           
          <div class="space-y-6 mt-4">
            <div class="flex justify-between items-center mb-6 pb-8 border-b-2 border-[#787878]">
          <h1 class="text-2xl font-bold font-cabinet">Make Your own report</h1>
          <div class="space-x-3">
            <button class="px-4 py-2 rounded-lg bg-transparent border border-[#787878] hover:bg-gray-700 transition-colors">
              Back
            </button>
            <button class="px-4 py-2 rounded-lg bg-[#4984c4] hover:bg-[#00b853be] transition-colors">
              Next
            </button>
          </div>
        </div>
            <!-- Form Grid with consistent spacing -->
            <div class="grid grid-cols-[200px,1fr] gap-x-4 gap-y-6">
              <label class="self-center">Background Img</label>
              <div 
                class="relative border border-[#787878] rounded-lg p-3 text-center cursor-pointer hover:border-gray-400 transition-colors"
                @click="triggerFileInput('background')"
              >
                <input
                  ref="backgroundInputRef"
                  type="file"
                  class="hidden"
                  accept="image/*"
                  @change="handleBackgroundUpload"
                >
                <span class="flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  {{ formData.backgroundImage ? 'Change Image' : 'Choose (max size less than 1 mb)' }}
                </span>
              </div>
  
              <label class="self-center">Company Name</label>
              <input
                v-model="formData.companyName"
                type="text"
                class="w-full bg-[#151719] border border-[#787878] rounded-lg p-3 focus:outline-none focus:border-gray-400"
                placeholder="Enter Here"
              >
  
              <label class="self-center">Company Logo</label>
              <div>
                <div 
                  class="relative border border-[#787878] rounded-lg p-3 text-center cursor-pointer hover:border-gray-400 transition-colors"
                  @click="triggerFileInput('logo')"
                >
                  <input
                    ref="logoInputRef"
                    type="file"
                    class="hidden"
                    accept="image/*"
                    @change="handleLogoUpload"
                  >
                  <span class="flex items-center justify-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    {{ formData.logo ? 'Change Logo' : 'Choose (max size less than 1 mb)' }}
                  </span>
                </div>
                <div v-if="formData.logo" class="mt-2 text-sm text-green-500">
                  Logo uploaded successfully
                </div>
              </div>
  
              <label class="self-center">Issue Date</label>
              <input
                v-model="formData.issueDate"
                type="date"
                class="w-full bg-[#151719] border border-[#787878] rounded-lg p-3 focus:outline-none focus:border-gray-400"
              >
  
              <label class="self-center">Place</label>
              <input
                v-model="formData.place"
                type="text"
                class="w-full bg-[#151719] border border-[#787878] rounded-lg p-3 focus:outline-none focus:border-gray-400"
                placeholder="Enter Here"
              >
  
              <label class="self-center">Report By</label>
              <input
                v-model="formData.reportBy"
                type="text"
                class="w-full bg-[#151719] border border-[#787878] rounded-lg p-3 focus:outline-none focus:border-gray-400"
                placeholder="Enter Here"
              >
            </div>
  
            <button 
              @click="generatePDF"
              :disabled="isGeneratingPDF"
              class="w-full mt-6 px-6 py-3 bg-[#4984c4] hover:bg-[#00b853be] disabled:bg-[#4984c4]/50 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors"
            >
              {{ isGeneratingPDF ? 'Generating PDF...' : 'Download PDF' }}
            </button>
          </div>
  
          <!-- Preview Section -->
          <div class="bg-[#151719] rounded-lg-lg p-4">
            <div 
              id="report-preview"
              class="relative bg-gradient-to-b from-gray-800 to-gray-900 w-full shadow-xl mx-auto"
              style="aspect-ratio: 643/929;"
            >
              <!-- Background Image -->
              <div 
                v-if="formData.backgroundImage"
                class="absolute inset-0 w-full h-full"
                :style="{
                  backgroundImage: `url(${formData.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.7
                }"
              ></div>
  
              <!-- Content Overlay -->
              <div class="relative z-10 h-full flex flex-col">
                <!-- Logo section with padding -->
                <div class="p-8">
                  <div class="mb-8">
                    <img 
                      :src="formData.logo || '../assets/img/matrix-1.png'"
                      alt="Company Logo" 
                      class="w-[64px] object-contain"
                      @error="handleLogoError"
                    />
                  </div>
                </div>
  
                <!-- Report Title - Centered with flex -->
                <div class="w-full bg-black/30 flex items-center justify-center py-4 mb-auto">
                  <h1 class="text-5xl font-bold text-white">Signal Report</h1>
                </div>
  
                <!-- Rest of the content with padding -->
                <div class="p-8 flex-1 flex flex-col">
                  <!-- Company Details -->
                  <div class="space-y-4 text-[13px] mt-auto">
                    <div v-if="formData.companyName" class="flex flex-col gap-1">
                      <div class="text-gray-400">Company Name:</div>
                      <div class="font-medium text-white">{{ formData.companyName }}</div>
                    </div>
  
                    <div v-if="formData.issueDate" class="flex flex-col gap-1">
                      <div class="text-gray-400">Issued Date</div>
                      <div class="font-medium text-white">{{ formatDate(formData.issueDate) }}</div>
                    </div>
  
                    <div v-if="formData.place" class="flex flex-col gap-1">
                      <div class="text-gray-400">Place</div>
                      <div class="font-medium text-white">{{ formData.place }}</div>
                    </div>
  
                    <div v-if="formData.reportBy" class="flex flex-col gap-1">
                      <div class="text-gray-400">Report By</div>
                      <div class="font-medium text-white">{{ formData.reportBy }}</div>
                    </div>
                  </div>
  
                  <!-- SEBI Watermark -->
                  <div class="mt-8 flex justify-end">
                    <img 
                      src="../assets/img/sebi.png" 
                      alt="SEBI Watermark" 
                      class="w-24 opacity-80"
                      @error="handleWatermarkError" 
                    />
                  </div>
  
                  <!-- Fixed Paragraph -->
                  <div class="mt-8 text-[8px] text-gray-400 text-justify">
                    <p>Matrix Trading Tech is a sophisticated algotrading platform, uniquely integrated with TradingView and custom strategies, offering a seamless API connection to your broker. Tailored for retail traders and investors, our platform is dedicated to elevating wealth management practices. While we strive to ensure flawless operation, we recommend consulting a financial advisor before trading or investing through our platform. Please be aware that Matrix Trading Tech cannot be held accountable for any losses resulting from market volatility or any platform-related issues.</p>
                  </div>
  
                  <!-- Website URL -->
                  <div class="mt-4 text-[8px] text-gray-400 text-center">
                    www.matrixtradingtech.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import html2canvas from 'html2canvas'
  import { jsPDF } from 'jspdf'
  
  // Refs for file inputs
  const backgroundInputRef = ref(null)
  const logoInputRef = ref(null)
  
  // State management
  const error = ref('')
  const isGeneratingPDF = ref(false)
  
  const formData = ref({
    backgroundImage: '',
    companyName: '',
    logo: '',
    issueDate: '',
    place: '',
    reportBy: ''
  })
  
  // Trigger file input click
  const triggerFileInput = (type) => {
    if (type === 'background') {
      backgroundInputRef.value?.click()
    } else if (type === 'logo') {
      logoInputRef.value?.click()
    }
  }
  
  // Enhanced file upload handling with image validation
  const handleFileUpload = (file, maxSize = 1024 * 1024) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error('No file selected'))
        return
      }
  
      if (file.size > maxSize) {
        reject(new Error('File size must be less than 1MB'))
        return
      }
  
      if (!file.type.startsWith('image/')) {
        reject(new Error('File must be an image'))
        return
      }
  
      const reader = new FileReader()
      
      reader.onload = (e) => {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        
        img.onload = () => {
          // Additional image validation if needed
          if (img.width === 0 || img.height === 0) {
            reject(new Error('Invalid image file'))
            return
          }
          resolve(e.target.result)
        }
        
        img.onerror = () => reject(new Error('Failed to load image'))
        img.src = e.target.result
      }
      
      reader.onerror = () => reject(new Error('Failed to read file'))
      reader.readAsDataURL(file)
    })
  }
  
  const handleBackgroundUpload = async (event) => {
    try {
      error.value = ''
      const file = event.target.files[0]
      formData.value.backgroundImage = await handleFileUpload(file)
    } catch (err) {
      error.value = err.message
      formData.value.backgroundImage = ''
    }
  }
  
  const handleLogoUpload = async (event) => {
    try {
      error.value = ''
      const file = event.target.files[0]
      formData.value.logo = await handleFileUpload(file)
    } catch (err) {
      error.value = err.message
      formData.value.logo = ''
    }
  }
  
  // Handle image loading errors

  
  const handleWatermarkError = () => {
    error.value = 'Failed to load SEBI watermark'
  }
  
  const formatDate = (dateString) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
  
  // Enhanced PDF generation with better error handling and image loading
  const generatePDF = async () => {
    try {
      error.value = ''
      isGeneratingPDF.value = true
      
      const element = document.getElementById('report-preview')
      if (!element) throw new Error('Preview element not found')
  
      // Wait for all images to load
      const images = element.getElementsByTagName('img')
      await Promise.all(
        Array.from(images).map(
          img => new Promise((resolve) => {
            if (img.complete) resolve()
            else {
              img.onload = resolve
              img.onerror = () => {
                error.value = `Failed to load image: ${img.alt}`
                resolve()
              }
            }
          })
        )
      )
  
      // Clone the element and modify logo size for PDF
      const canvas = await html2canvas(element, {
        scale: 10,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById('report-preview')
          if (clonedElement) {
            // Set exact dimensions
            clonedElement.style.width = `${element.offsetWidth}px`
            clonedElement.style.height = `${element.offsetHeight}px`
            
            // Adjust logo size for PDF - increased to 64px
            const logo = clonedElement.querySelector('img[alt="Company Logo"]')
            if (logo) {
              logo.style.width = '64px'
              logo.style.height = 'auto'
            }
          }
        }
      })
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })
      
      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST')
      pdf.save('report-cover.pdf')
    } catch (err) {
      error.value = 'Error generating PDF: ' + err.message
    } finally {
      isGeneratingPDF.value = false
    }
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;600;700&display=swap');
  
  input[type="date"] {
    color-scheme: dark;
  }
  
  #report-preview {
    transform-origin: top left;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  </style>