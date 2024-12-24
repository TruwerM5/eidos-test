<script setup lang="ts">
import NavItemVue from '@/components/NavItemVue.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const navList = [
    {
        id: 1,
        icon: 'mingcute:calendar-line',
        title: 'Расписание',
        link: '/schedule',
    }, {
        id: 2,
        icon: 'mynaui:academic-hat',
        title: 'Учебные сессии',
        link: '/',
    },{
        id: 3,
        icon: 'ph:door',
        title: 'Список комнат',
        link: '/rooms',
    }, {
        id: 4,
        icon: 'ph:student',
        title: 'Пользователи',
        link: '/users',
    }, {
        id: 5,
        icon: 'ph:user-list-light',
        title: 'Учебные группы',
        link: '/groups',
    }, {
        id: 6,
        icon: 'bi:camera-video',
        title: 'Список устройств',
        link: '/tools',
    }, {
        id: 7,
        icon: 'carbon:settings',
        title: 'Настройки системы',
        link: '/settings',
    }, {
        id: 8,
        icon: 'material-symbols-light:archive-outline',
        title: 'Архив',
        link: '/archive',
    }, 
];
const route = useRoute();
const path = computed(() => route.path);
</script>

<template>
    <ul class="flex flex-col gap-[4px]">
        <NavItemVue v-for="item in navList" :key="item.id" :item="item" :path="path" />
    </ul>
</template>