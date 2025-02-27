<template>
    <div ref="header" :class="['sticky top-0 z-50 flex justify-between md:px-24 px-3 py-1 transition-all', isSticky ? 'bg-[#304B82]' : 'bg-[#06090F]']">
        <div class="flex items-center gap-1 text-white ">
            <img src="/src/assets/svg/call-2.svg" alt="" class="w-4">&nbsp;
            <p class="text-md font-[400]">
                +91-9028033569
            </p>
            |
            <img src="/src/assets/svg/mail-2.svg" alt="" class="w-4">
            <a class="text-md font-[400]" href="mailto:info@omnitechalgo.com">info@omnitechalgo.com</a>
        </div>

        <div class="lg:flex gap-2 items-center hidden ">
            <a v-for="item in social" :href="item.link" target="_blank" rel="noopener noreferrer">
                <img :src="item.icon" alt="" class="w-[32px]">
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import ig from '/src/assets/svg/social/ig.svg'
import wp from '/src/assets/svg/social/wp.svg'
import tg from '/src/assets/svg/social/tg.svg'
import yt from '/src/assets/svg/social/yt.svg'

const social = [
    { icon: ig, link: 'https://www.instagram.com/yogesh.kshirsagar2002?igshid=ZDdkNTZiNTM=' },
    { icon: wp, link: 'https://wa.me/qr/IEZI7KT7244RD1' },
    { icon: tg, link: 'https://t.me/+7MdqOfI9754zNjVl' },
    { icon: yt, link: 'https://www.youtube.com/@Diomondstocks' }
];

const isSticky = ref(false);

const handleScroll = () => {
    isSticky.value = window.scrollY > 10; // Change color after scrolling 10px
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
