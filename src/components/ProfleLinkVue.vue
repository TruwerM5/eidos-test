<script setup lang="ts">
import { computed } from 'vue';
import { useNavbarStore } from '@/stores/navbar';
import { RouterLink } from 'vue-router';
const props = defineProps<{
    profile: {
        firstName: string;
        lastName: string;
        profession: string;
    }
    
}>();
const initials = computed(() => {
    return props.profile.firstName.slice(0,1) + props.profile.lastName.slice(0,1);
});

const navbar = useNavbarStore();

</script>

<template>
    <RouterLink
    to="/" 
    :class="['bg-white mb-[18px] flex items-center justify-center shadow-[0_4px_24px_0_rgba(0,0,0,0.12)] rounded-2xl',
        navbar.isOpened ? 'p-[12px]' : 'p-[6px]'
    ]">
        <Transition name="hide">
            <p v-if="navbar.isOpened" class="font-[800] text-[15px] flex-1">
            {{ profile.firstName +' '+ profile.lastName }}
                <span class="font-[500] text-[13px] text-[#2F3144]/[.65]">{{ profile.profession }}</span>
            </p>
        </Transition>
        
        <div 
            :class="['flex-0 flex items-center justify-center rounded-full bg-[#2B4EC5] transition-all',
                navbar.isOpened ? 'min-w-[48px] min-h-[48px]' : 'min-w-[32px] min-h-[32px]'
            ]">
            <span class="text-[15px] text-white font-[800]">{{ initials }}</span>
        </div>
    </RouterLink>
</template>