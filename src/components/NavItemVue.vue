<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useNavbarStore } from '@/stores/navbar';
import { Icon } from '@iconify/vue';

defineProps<{
    item: {
        id: number;
        title: string;
        link: string;
        icon: string;
    },
    path: string;
}>();

const navbar = useNavbarStore();
</script>

<template>
    <li>
        <RouterLink 
            :to="{path: item.link}" 
            :class="['flex gap-[12px] items-center p-[12px] rounded-[12px]',
            item.link == path ? 'bg-[#3761F3] text-white hover:bg-[#3761F3]' : 'hover:bg-[#f4f4f4]'
            ]">
            <Icon 
                :icon="item.icon" 
                height="24" width="24" 
                :color="item.link == path ? '#fff' : '#999'"
            />
            <Transition name="hide" mode="out-in">
                <span v-if="navbar.isOpened" class="block relative text-[15px] font-[800] break-normal">{{ item.title }}</span>
            </Transition>
            
        </RouterLink>
    </li>
</template>