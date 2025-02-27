<template>
    <div class="min-h-screen bg-gray-50 p-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Input Form -->
          <div class="space-y-6 bg-white p-6 border -lg">
            <h2 class="text-xl font-semibold text-gray-900">Invoice Details</h2>
  
            <!-- Company Details -->
            <div class="space-y-4">
              <h3 class="text-lg font-medium">Company Information</h3>
              <div class="grid gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    v-model="formData.companyName"
                    type="text"
                    class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    v-model="formData.companyAddress"
                    type="text"
                    class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700">City</label>
                    <input
                      v-model="formData.companyCity"
                      type="text"
                      class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700">Pincode</label>
                    <input
                      v-model="formData.companyPincode"
                      type="text"
                      class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">GST Number</label>
                  <input
                    v-model="formData.companyGST"
                    type="text"
                    class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                </div>
              </div>
            </div>
  
            <!-- Customer Details -->
            <div class="space-y-4">
              <h3 class="text-lg font-medium">Customer Information</h3>
              <div class="grid gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Customer Name</label>
                  <input
                    v-model="formData.customerName"
                    type="text"
                    class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    v-model="formData.customerAddress"
                    type="text"
                    class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700">City</label>
                    <input
                      v-model="formData.customerCity"
                      type="text"
                      class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700">Pincode</label>
                    <input
                      v-model="formData.customerPincode"
                      type="text"
                      class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">GST Number</label>
                  <input
                    v-model="formData.customerGST"
                    type="text"
                    class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                </div>
              </div>
            </div>
  
            <!-- Plan Details -->
            <div class="space-y-4">
              <h3 class="text-lg font-medium">Plan Details</h3>
              <div class="grid gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Plan Type</label>
                  <select
                    v-model="formData.planType"
                    class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    @change="updateAmount"
                  >
                    <option value="Essential Plan (Matrix Algo)">Essential Plan</option>
                    <option value="Pro Plan (Matrix Algo)">Pro Plan</option>
                    <option value="Elite Plan (Matrix Algo)">Elite Plan</option>
                  </select>
                </div>
                <div class="grid grid-cols-3 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700">Invoice Date</label>
                    <input
                      v-model="formData.invoiceDate"
                      type="date"
                      class="mt-1 block w-full -md bg-white border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                      v-model="formData.startDate"
                      type="date"
                      class="mt-1 block w-full -md bg-white border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700">End Date</label>
                    <input
                      v-model="formData.endDate"
                      type="date"
                      class="mt-1 block w-full -md bg-white border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Contact Details -->
            <div class="space-y-4">
              <h3 class="text-lg font-medium">Contact Information</h3>
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    v-model="formData.phone"
                    type="text"
                    class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    v-model="formData.email"
                    type="email"
                    class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Website</label>
                  <input
                    v-model="formData.website"
                    type="text"
                    class="mt-1 block w-full -md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                </div>
              </div>
            </div>
  
            <!-- Generate Button -->
            <button
              @click="generatePDF"
              class="w-full py-2 px-4 border border-transparent -md shadow-sm text-sm font-medium text-white bg-[#4984c4] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Generate Invoice
            </button>
          </div>
  
          <!-- Invoice Preview -->
          <div class="bg-white border -lg shadow-lg p-6 invoice-preview">
            <!-- Header -->
            <div class="flex justify-between items-start max-w-full mx-auto h-10">
              <div class="flex items-start gap-4">
                <img src="../assets/img/Matrix-Logo.png" alt="Matrix Logo" class="h-8 object-contain" />
              </div>
              <div class="text-right">
                <h1 class="text-md font-semibold">Invoice</h1>
                <p class="text-gray-600 text-[13px] mt-1">Invoice ID: #{{ formData.invoiceId }}</p>
              </div>
            </div>
  
            <!-- Billing Information -->
            <div class="mt-6 max-w-full mx-auto">
              <div class="flex justify-between h-[147px] bg-[#F5F5F5] -lg">
                <div class="w-1/2 p-4 space-y-1">
                  <h2 class="font-semibold text-[10px] uppercase">BILL FROM</h2>
                  <div class="text-[9px]">
                    <p class="text-[13px] text-[#4984c4] font-medium">{{ formData.companyName }}</p>
                    <p class="text-gray-600">{{ formData.companyAddress }}</p>
                    <p class="text-gray-600">{{ formData.companyCity }}</p>
                    <p class="text-gray-600">{{ formData.companyPincode }}</p>
                    <p class="text-gray-600">GST: {{ formData.companyGST }}</p>
                  </div>
                </div>
                <div class="w-1/2 p-4 space-y-1 ml-40">
                  <h2 class="font-semibold text-[10px] uppercase">BILL TO</h2>
                  <div class="text-[9px]">
                    <p class="text-[13px] text-[#4984c4] font-medium">{{ formData.customerName }}</p>
                    <p class="text-gray-600">{{ formData.customerAddress }}</p>
                    <p class="text-gray-600">{{ formData.customerCity }}</p>
                    <p class="text-gray-600">{{ formData.customerPincode }}</p>
                    <p class="text-gray-600">GST: {{ formData.customerGST }}</p>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Membership Details -->
            <div class="mt-4 border ">
              <table class="w-full text-[9px]">
                <thead>
                  <tr class="bg-[#4984c4] text-white">
                    <th class="py-2 px-4 text-left">Invoice Date</th>
                    <th class="py-2 px-4 text-left">Membership Start Date</th>
                    <th class="py-2 px-4 text-left">Membership End Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td class="py-2 px-4">{{ formatDate(formData.invoiceDate) }}</td>
                    <td class="py-2 px-4">{{ formatDate(formData.startDate) }}</td>
                    <td class="py-2 px-4">{{ formatDate(formData.endDate) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <!-- Product Details -->
            <div class="mt-2 border ">
              <table class="w-full text-[9px]">
                <thead>
                  <tr class="bg-[#4984c4] text-white">
                    <th class="py-2 px-4 text-left">Product/Service</th>
                    <th class="py-2 px-4 text-center">Price</th>
                    <th class="py-2 px-4 text-center">QTY</th>
                    <th class="py-2 px-4 text-right">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td class="py-2 px-4">{{ formData.planType }}</td>
                    <td class="py-2 px-4 text-center">₹{{ formData.amount.toFixed(2) }}</td>
                    <td class="py-2 px-4 text-center">1</td>
                    <td class="py-2 px-4 text-right">₹{{ formData.amount.toFixed(2) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <!-- Amount Details -->
            <div class="mt-3 max-w-full mx-auto">
              <div class="flex justify-between h-[64px] items-center border border-gray-200 -lg p-4">
                <div class="text-[9px]">
                  <p class="font-extrabold">Amount Chargeable (in words):</p>
                  <p>{{ getAmountInWords(calculateTotal()) }}</p>
                </div>
                <div class="text-[9px]"> 
                  <div class="flex justify-between gap-8">
                    <span>Subtotal</span>
                    <span class="font-bold">₹{{ formData.amount.toFixed(2) }}</span>
                  </div>
                  <div class="flex justify-between gap-8">
                    <span>GST @18%</span>
                    <span class="font-bold">₹{{ calculateGST().toFixed(2) }}</span>
                  </div>
                  <div class="flex justify-between gap-8">
                    <span>Total</span>
                    <span class="font-bold">₹{{ calculateTotal().toFixed(2) }}</span>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Important Notes -->
            <div class="mt-4 text-[9px] space-y-1  p-4">
              <h3 class="font-semibold">PLEASE READ TERMS AND CONDITIONS TO AVOID ANY FUTURE CONFLICT OF INTEREST:</h3>
              <ul class="list-disc list-inside space-y-1 text-gray-600 text-[8px]">
                <li v-for="(note, index) in importantNotes" :key="index">{{ note }}</li>
              </ul>
            </div>
  
            <!-- Footer -->
            <div class="mt-8 bg-[#4984c4] text-white p-3 px-14 flex justify-between items-center">
              <div class="flex items-center gap-2 text-[9px]">
                <span><img src="../assets/svg/call-2.svg" alt="" class="w-3"></span><span class="pb-3">{{ formData.phone }}</span>
              </div> 
              <div class="flex items-center gap-2 text-[9px]">
                <span><img src="../assets/svg/mail-2.svg" alt="" class="w-3"></span><span class="pb-3" >{{ formData.email }}</span>
              </div>
              <div class="flex items-center gap-2 text-[9px]">
                <span><img src="../assets/svg/vector.svg" alt="" class="w-3"> </span><span class="pb-3" >{{ formData.website }}</span>
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
  
  const formData = ref({
    invoiceId: '723737632823',
    companyName: 'Matrix Trading Tech Pvt. Ltd',
    companyAddress: 'Matrix Trading Technologies, Vidhan',
    companyCity: 'Sabha Road, Dubey Colony, Raipur (C.G)',
    companyPincode: '492001',
    companyGST: 'AJHGDU6B7B9',
    customerName: '',
    customerAddress: '',
    customerCity: '',
    customerPincode: '',
    customerGST: '',
    planType: 'Essential Plan (Matrix Algo)',
    amount: 8000,
    invoiceDate: '',
    startDate: '',
    endDate: '',
    phone: '+91 9099566516',
    email: 'matrix@gmail.com',
    website: 'www.matrix.com'
  })
  
  const importantNotes = [
    "Registration granted by SEBI and certification from NISM in no way guarantees the performance of the intermediary or provides any assurance of returns to investors.",
    "Market Risks refer to either partial or permanent loss on your investments or portfolio in certain or adverse market conditions or company events.",
    "Past performance is not indicative of future results.",
    "We are SEBI Registered 'Research Analyst' not 'Investment Advisers'.",
    "We do not offer any return assurance or guarantee on investment or trading. If someone is doing this on our behalf, please contact our Compliance Officer by visiting our website and contact details. We are not responsible if you get lured into such activities. Since investing in securities market involves very high risk.",
    "MATRIX TRADING TECH has a compliance officer to handle all trader/investor complaints. Please address all complaints to amitksharma19644@gmail.com. We aim to resolve all complaints within 7 days.",
    "MATRIX TRADING TECH is a SEBI registered Research Analyst with registration number INH000019035. We do not provide Profit sharing/PMS-based services/Demat Account handling services. Our services are solely research-based recommendations on a pre-paid subscription basis.",
    "We will provide Buy/Sell/Hold or other ratings research-based calls based on Technical & Fundamental research analysis during the validity period.",
    "Investors are advised to act according to their risk appetite, we are not providing Investment Advisory Services.",
    "Ensure you follow our stop-loss measures to prevent any open losses on your investments or portfolio.",
    "If you are interested in activating our multiple package services, please contact us to proceed.",
    "Services are valid for the date specified from the payment date.",
    "The fees paid towards our services are non-refundable in any circumstances."
  ]
  
  const formatDate = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  const updateAmount = () => {
    switch (formData.value.planType) {
      case 'Elite Plan (Matrix Algo)':
        formData.value.amount = 18000
        break
      case 'Pro Plan (Matrix Algo)':
        formData.value.amount = 12000
        break
      case 'Essential Plan (Matrix Algo)':
        formData.value.amount = 8000
        break
    }
  }
  
  const calculateGST = () => formData.value.amount * 0.18
  const calculateTotal = () => formData.value.amount + calculateGST()
  
  const getAmountInWords = (amount) => {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    const numToWords = (num) => {
      if (num < 20) return ones[num];
      if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? ' ' + ones[num % 10] : '');
      if (num < 1000) return ones[Math.floor(num / 100)] + ' Hundred' + (num % 100 ? ' and ' + numToWords(num % 100) : '');
      if (num < 100000) return numToWords(Math.floor(num / 1000)) + ' Thousand' + (num % 1000 ? ' ' + numToWords(num % 1000) : '');
      return numToWords(Math.floor(num / 100000)) + ' Lakh' + (num % 100000 ? ' ' + numToWords(num % 100000) : '');
    }
  
    const wholePart = Math.floor(amount);
    const decimalPart = Math.round((amount - wholePart) * 100);
  
    let result = numToWords(wholePart) + ' Rupees';
    if (decimalPart > 0) {
      result += ' and ' + numToWords(decimalPart) + ' Paise';
    }
    return result + ' Only';
  }
  
  const generatePDF = async () => {
    try {
      const element = document.querySelector('.invoice-preview')
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false
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
  
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('invoice.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  body {
    font-family: 'Inter', sans-serif;
  }
  
  .invoice-preview {
    position: relative;
    max-height: 1123px; /* A4 height in pixels at 96 DPI */
    overflow: hidden;
  }
  
  .invoice-preview::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 365px;
    height: 336px;
    background-image: url('../assets/img/watermark.png') !important;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 1;
    pointer-events: none;
  }
  
  @media print {
    .invoice-preview {
      max-height: none;
      overflow: visible;
    }
  }
  </style>