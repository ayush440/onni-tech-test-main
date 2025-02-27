<template>
  <button @click="toggleModal" class="bg-green-500 text-white px-4 py-2.5 rounded-md">
    Open Modal
  </button>

  <Teleport to="body">
    <div v-if="isOpen" 
         class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div ref="modalRef" 
           class="bg-[#151719] w-full max-w-xl rounded-2xl p-5 my-auto relative">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h2 class="text-2xl font-bold text-white font-cabinet">Create Strategy</h2>
          <button class="bg-zinc-800 text-white px-4 py-2 rounded-md flex items-center gap-2 font-cabinet text-sm whitespace-nowrap">
            <img src="../assets/svg/video.svg" alt="">
            Learn How To Create
          </button>
        </div>

        <form class="space-y-4">
          <div>
            <label class="block text-gray-300 mb-1.5 text-sm font-proxima">Enter Your Strategy Name*</label>
            <input
              v-model="strategyName"
              type="text"
              placeholder='Write here eg. "The Hero"'
              class="w-full bg-zinc-900 text-white  placeholder-gray-600 rounded-md p-2.5 border border-zinc-700 focus:border-green-500 focus:outline-none font-proxima"
            />
          </div>

          <div>
            <label class="block text-gray-300 mb-1.5 text-sm font-proxima">Exchange*</label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="exchange in exchanges"
                :key="exchange.id"
                type="button"
                @click="toggleExchange(exchange.id)"
                :class="[
                  'px-4 py-1 rounded-md text-sm font-proxima border transition-colors',
                  exchange.active 
                    ? 'bg-green-500 text-white border-transparent' 
                    : 'bg-zinc-900 text-gray-300 border-gray-700 hover:border-gray-600'
                ]"
              >
                {{ exchange.label }}
              </button>
            </div>
          </div>

          <div>
            <label class="block text-gray-300 mb-1.5 text-sm font-proxima">Segment</label>
            <input
              v-model="segment"
              type="text"
              placeholder='Write here eg. "Nifty"'
              class="w-full bg-zinc-900 text-white rounded-md p-2.5 border placeholder-gray-600 border-zinc-700 focus:border-green-500 focus:outline-none font-proxima"
            />
          </div>

          <div>
            <label class="block text-gray-300 mb-1.5 text-sm font-proxima">Strategy Type*</label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="type in strategyTypes"
                :key="type.id"
                type="button"
                @click="toggleStrategyType(type.id)"
                :class="[
                  'px-4 py-1 rounded-md text-sm font-proxima border transition-colors',
                  type.active 
                    ? 'bg-green-500 text-white border-transparent' 
                    : 'bg-zinc-900 text-gray-300 border-gray-700 hover:border-gray-600'
                ]"
              >
                {{ type.label }}
              </button>
            </div>
          </div>

          <div>
            <label class="block text-gray-300 mb-1.5 text-sm font-proxima">Ticker/Script*</label>
            <input
              v-model="ticker"
              type="text"
              placeholder="Search Here eg. Reliance"
              class="w-full bg-zinc-900 text-white placeholder-gray-600 rounded-md p-2.5 border border-zinc-700 focus:border-green-500 focus:outline-none font-proxima"
            />
          </div>

          <div>
            <label class="block text-gray-300 mb-1.5 text-sm font-proxima">Ticker*</label>
            <div class="flex relative">
              <div class="relative">
                <button
                  type="button"
                  @click="showOtmDropdown = !showOtmDropdown"
                  class="bg-green-500 text-white px-4 py-4 rounded-l-lg flex items-center gap-2 text-sm font-proxima min-w-[120px]"
                >
                  {{ selectedOtmOption }}
                  <ChevronDown class="w-4 h-4" :class="{ 'transform rotate-180': showOtmDropdown }" />
                </button>
                
                <!-- OTM Dropdown -->
                <div v-if="showOtmDropdown" 
                     class="absolute top-full left-0 mt-1 w-full bg-zinc-800 rounded-md shadow-lg z-50">
                  <button
                    v-for="option in otmOptions"
                    :key="option"
                    @click="selectOtmOption(option)"
                    class="w-full px-4 py-2 text-left text-sm text-white hover:bg-zinc-700 font-proxima first:rounded-t-lg last:rounded-b-lg"
                  >
                    {{ option }}
                  </button>
                </div>
              </div>
              
              <input
                v-model="tickerValue"
                type="text"
                placeholder="Enter Value here eg. 200"
                class="flex-1 bg-zinc-900 placeholder-gray-600 text-white rounded-r-lg p-2.5 border border-zinc-700 focus:border-green-500 focus:outline-none font-proxima"
              />
            </div>
          </div>

          <div>
            <label class="block text-gray-300 mb-1.5 text-sm font-proxima">Expiry Date</label>
            <div class="relative">
              <input
                v-model="expiryDate"
                type="text"
                placeholder="Select from the calender"
                class="w-full bg-zinc-900 placeholder-gray-600 text-white rounded-md p-2.5 border border-zinc-700 focus:border-green-500 focus:outline-none font-proxima cursor-pointer"
                readonly
                @click="toggleCalendar"
              />
              <Calendar class="absolute right-3 top-2.5 text-gray-400" />
              
              <!-- Calendar Dropdown -->
              <div v-if="showCalendar" 
                   class="absolute top-full left-0 mt-1 w-full bg-zinc-800 rounded-md shadow-lg z-50 p-4">
                <div class="grid grid-cols-7 gap-1">
                  <button
                    v-for="day in calendarDays"
                    :key="day"
                    @click="selectDate(`2024-02-${day}`)"
                    class="p-2 text-center text-sm text-white hover:bg-zinc-700 rounded font-proxima"
                  >
                    {{ day }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-start gap-2 pt-1">
            <input
              v-model="agreedToTerms"
              type="checkbox"
              class="mt-1 w-4 h-4 rounded border-gray-700 bg-zinc-900 text-green-500 focus:ring-green-500"
            />
            <label class="text-gray-300 text-sm font-proxima">
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </div>

          <div class="flex justify-end gap-3 pt-4">
            <button
              type="button"
              @click="toggleModal"
              class="px-5 py-2.5 rounded-md border border-zinc-700 text-gray-300 hover:bg-zinc-800 text-sm font-proxima"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-8 py-2.5 rounded-md bg-green-500 text-white font-medium hover:bg-green-600 text-sm font-proxima"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style>
@font-face {
  font-family: 'Cabinet Grotesk';
  src: url('https://fonts.cdnfonts.com/css/cabinet-grotesk') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('https://fonts.cdnfonts.com/css/proxima-nova-2') format('woff2');
  font-display: swap;
}

.font-cabinet {
  font-family: 'Cabinet Grotesk', sans-serif;
}

.font-proxima {
  font-family: 'Proxima Nova', sans-serif;
}


</style>

<script setup>
import { ref, computed } from 'vue'
import { Calendar, X, ChevronDown } from 'lucide-vue-next'

const isOpen = ref(false)
const modalRef = ref(null)
const strategyName = ref('')
const segment = ref('')
const ticker = ref('')
const tickerValue = ref('')
const expiryDate = ref('')
const agreedToTerms = ref(false)
const showOtmDropdown = ref(false)
const showCalendar = ref(false)

const selectedOtmOption = ref('OTM/ATM')
const otmOptions = ['OTM', 'ATM', 'ITM']

const exchanges = ref([
  { id: 'nse-bse', label: 'NSE/BSE', active: true },
  { id: 'nfo-bfo', label: 'NFO/BFO', active: false },
  { id: 'mcx', label: 'MCX', active: false }
])

const strategyTypes = ref([
  { id: 'single', label: 'Single Leg', active: false },
  { id: 'multi', label: 'Multi Leg', active: true },
  { id: 'equity', label: 'Equity', active: false }
])

const toggleModal = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const handleClickOutside = (event) => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    toggleModal()
  }
  showOtmDropdown.value = false
  showCalendar.value = false
}

const toggleExchange = (selectedId) => {
  exchanges.value = exchanges.value.map(exchange => ({
    ...exchange,
    active: exchange.id === selectedId
  }))
}

const toggleStrategyType = (selectedId) => {
  strategyTypes.value = strategyTypes.value.map(type => ({
    ...type,
    active: type.id === selectedId
  }))
}

const toggleOtmDropdown = () => {
  showOtmDropdown.value = !showOtmDropdown.value
  showCalendar.value = false
}

const selectOtmOption = (option) => {
  selectedOtmOption.value = option
  showOtmDropdown.value = false
}



const selectDate = (date) => {
  expiryDate.value = date
  showCalendar.value = false
}


</script>
