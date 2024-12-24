<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useNavbarStore } from '@/stores/navbar';
type Lang = {
    id: number;
    img: string;
    title: string;
};

const langs = [
    {
        id: 1,
        img: '/images/rus.png',
        title: 'Русский'
    },{
        id: 2,
        img: '/images/eng.png',
        title: 'Английский'
    },
];
const navbar = useNavbarStore();
const isOpened = ref(false);
const selected = ref(langs[0]);

function select(lang: Lang) {
    selected.value = lang;
    isOpened.value = false;
}

</script>

<template>
    <div class="relative flex border border-solid border-[#E0E0E0] p-[12px] rounded-[12px]">

        <button 
        @click="isOpened = !isOpened"
        class="w-full flex items-center justify-center gap-[12px] text-[15px] font-[800]">
            <img :src="selected.img" :alt="selected.title">
            <Transition name="hide">
                <div v-if="navbar.isOpened" class="flex w-full">
                    <span>{{ selected.title }}</span>
                    <Icon 
                        icon="ci:chevron-down" 
                        color="#999"
                        height="24" width="24"
                        class="ml-auto"
                    />
                </div>
                
            </Transition>
            
            
        </button>
        <div v-if="isOpened" class="bg-white absolute z-20 bottom-full left-0 w-full flex flex-col gap-[10px]">
            <button v-for="lang in langs" :key="lang.id" @click="select(lang)"
            class="bg-white w-full flex items-center gap-[12px] text-[15px] font-[800] p-[6px]">
                <img :src="lang.img" :alt="lang.title">
                <Transition name="hide">
                    <span v-if="navbar.isOpened">{{ lang.title }}</span>
                </Transition>
                
            </button>
        </div>
        
    </div>
</template>