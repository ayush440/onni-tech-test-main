<template>
    <div ref="header" :class="['sticky top-0 z-50 flex justify-between items-center transition-all py-1', isSticky ? 'bg-[#06090F]' : 'bg-[#06090F]']">
        <!-- Contact Icons Section -->
        <div class="flex items-center gap-3 text-white md:px-20 px-3">
            <!-- Phone Icon with Click Action -->
            <div class="relative">
                <button @click="togglePhoneInfo" class="focus:outline-none">
                    <img src="/src/assets/svg/call-2.svg" alt="Phone" class="w-5 h-5">
                </button>
                
                <div v-if="showPhoneInfo" class="absolute top-full left-0 mt-1 bg-[#06090F] p-3 rounded shadow-lg z-50">
                    <p class="text-md font-[400] whitespace-nowrap">
                        +91-9028033569
                    </p>
                </div>
            </div>
            
            <!-- Email Icon with Click Action -->
            <div class="relative">
                <button @click="toggleEmailInfo" class="focus:outline-none">
                    <img src="/src/assets/svg/mail-2.svg" alt="Email" class="w-5 h-5">
                </button>
                
                <div v-if="showEmailInfo" class="absolute top-full left-0 mt-1 bg-[#06090F] p-3 rounded shadow-lg z-50">
                    <a class="text-md font-[400] whitespace-nowrap" href="mailto:info@omnitechalgo.com">
                        info@omnitechalgo.com
                    </a>
                </div>
            </div>
        </div>

        <!-- Social Icons - Always Visible -->
        <div class="flex gap-2 items-center md:px-20 px-3">
            <a v-for="item in social" :key="item.link" :href="item.link" target="_blank" rel="noopener noreferrer">
                <img :src="item.icon" alt="" class="w-[28px] md:w-[32px]">
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import ig from '/src/assets/svg/social/ig.svg';
import wp from '/src/assets/svg/social/wp.svg';
import tg from '/src/assets/svg/social/tg-1.svg';
import yt from '/src/assets/svg/social/yt.svg';

const social = [
    { icon: ig, link: 'https://www.instagram.com/yogesh.kshirsagar2002?igshid=ZDdkNTZiNTM=' },
    { icon: wp, link: 'https://wa.me/qr/IEZI7KT7244RD1' },
    { icon: tg, link: 'https://t.me/+7MdqOfI9754zNjVl' },
    { icon: yt, link: 'https://www.youtube.com/@Diomondstocks' }
];

const isSticky = ref(false);
const showPhoneInfo = ref(false);
const showEmailInfo = ref(false);

const togglePhoneInfo = () => {
    showPhoneInfo.value = !showPhoneInfo.value;
    if (showPhoneInfo.value) {
        showEmailInfo.value = false;
    }
};

const toggleEmailInfo = () => {
    showEmailInfo.value = !showEmailInfo.value;
    if (showEmailInfo.value) {
        showPhoneInfo.value = false;
    }
};

const handleScroll = () => {
    isSticky.value = window.scrollY > 10; // Change color after scrolling 10px
};

const handleClickOutside = (event) => {
    // Close dropdowns when clicking outside
    if (!event.target.closest('button')) {
        showPhoneInfo.value = false;
        showEmailInfo.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside, true);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('click', handleClickOutside, true);
});
</script>