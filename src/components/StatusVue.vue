<script setup lang="ts">

const props = defineProps<{
    status: 'done'|'pending'|'planning';
}>();



</script>

<template>
    <span 
    :class="['block rounded-[43px] py-[4px] px-[12px]',{
        'bg-[#AFBFF5]': status == 'planning', 
        'bg-[#FFDAA1]': status == 'pending',
        'bg-[#91C893]': status == 'done'}]"
    >
        <span v-if="status == 'planning'">
            Запланировано
        </span>    
        <span v-else-if="status == 'pending'">
            Идет
        </span>
        <span v-else>
            Завершено
        </span>
    </span>
</template>