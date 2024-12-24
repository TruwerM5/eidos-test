<script setup lang="ts">

import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';
import { useNavbarStore } from '@/stores/navbar';
import NavListVue from '@/components/NavListVue.vue';
import ProfleLinkVue from '@/components/ProfleLinkVue.vue';
import SelectVue from '@/components/SelectVue.vue';

const navbar = useNavbarStore();
const profile = {
    firstName: 'Барнаби',
    lastName: 'Мармадюк',
    profession: 'Преподаватель'
}

</script>

<template>
    <header class="relative bg-white ">
        <button 
            @click="navbar.toggleNav"
            class="absolute w-6 h-6 z-20 flex items-center justify-center right-0 translate-x-1/2 top-[30px] rounded-full bg-primary">
            <Icon 
                icon="material-symbols:chevron-left-rounded" 
                color="#fff" 
                :class="['transition-transform',{'rotate-180': !navbar.isOpened}]" 
            />
        </button>
        <nav :class="['nav overflow-y-scroll overflow-visible h-full px-[12px] py-[19px] transition-all duration-500 flex flex-col bg-white', navbar.isOpened ? 'w-[274px]': 'w-[70px]']">
            <RouterLink to="/" class="flex gap-[14px] items-center justify-center mb-[43px]">
                <img src="/images/logo.png" alt="Logo">
                <Transition name="hide">
                    <h1 v-if="navbar.isOpened" class="font-[800] text-[24px] text-p">Сим Центр</h1>
                </Transition>
                
            </RouterLink>
            
            <NavListVue class="mb-auto" />
            <ProfleLinkVue :profile="profile" />
            <button class="h-fit flex mb-2 items-center justify-start w-full gap-[12px] p-[12px] hover:bg-[#f4f4f4] rounded-[12px]">
                <Icon icon="lucide:log-out" width="24" height="24" color="#999" />
                <Transition name="hide">
                    <span v-if="navbar.isOpened" class="font-[800] text-[15px]">Выйти</span>
                </Transition>
            </button>
            <SelectVue />
            <span class="text-[#2F3144]/[.65] mt-[18px] text-[13px]">Версия 1.02</span>
        </nav>
    </header>
</template>

<style>

.nav::-webkit-scrollbar {
    display: none;
}
</style>