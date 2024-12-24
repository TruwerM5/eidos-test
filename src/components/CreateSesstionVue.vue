<script setup lang="ts">
import { reactive,ref } from 'vue';
import { useSessionsStore } from '@/stores/sessions';

const sessionStore = useSessionsStore();
const newItem = reactive({
    id: sessionStore.nextId,
    date: '',
    status: <'done'|'pending'|'planning'>'done',
    lesson: '',
    type: '',
    room: '',
    group: '',
});

function addNewItem() {
    if(validateData()) {
        sessionStore.addSession(newItem);
        alert('Сессия добавлена!');
        sessionStore.toggleForm();
        // cleanForm();
    }
    return false;
    
};

function validateData() {
    for(let value of Object.values(newItem)) {
        if(!value) {
            alert('Заполните все поля!');
            return false;
        }
    }
    return true;
}

</script>

<template>
    <div @click.self="sessionStore.toggleForm"
    class="fixed w-full h-full z-50 bg-[#000]/[.6] inset-0 flex items-center justify-center">
        <form @submit.prevent 
            class="flex flex-col gap-[20px] bg-white py-[30px] px-[60px] rounded-[12px] font-[800] text-[18px] max-h-full overflow-y-scroll form">
            <label for="date" class="flex flex-col gap-[10px]">
                <span>Дата и время</span>
                <input type="text" name="date" v-model="newItem.date"  class="p-[5px] border border-solid border-[#E0E0E0] rounded-[12px]" />
            </label>
            <label for="status" class="flex flex-col gap-[10px]">
                <span>Статус</span>
                <select name="status" id="status" v-model="newItem.status" class="rounded-[12px] p-[5px] bg-white border border-solid border-[#E0E0E0]">
                    <option value="done">Зевершено</option>
                    <option value="pending">Идет</option>
                    <option value="planning">Запланировано</option>
                </select>
            </label>
            <label for="lesson" class="flex flex-col gap-[10px]">
                <span>Название учебного модуля</span>
                <input type="text" id="lesson" name="lesson" v-model="newItem.lesson" class="p-[5px] border border-solid border-[#E0E0E0] rounded-[12px]" />
            </label>
            <label for="type" class="flex flex-col gap-[10px]">
                <span>Тип сессии</span>
                <input type="text" name="type" id="type" v-model="newItem.type" class="p-[5px] border border-solid border-[#E0E0E0] rounded-[12px]" />
            </label>
            <label for="room" class="flex flex-col gap-[10px]">
                <span>Комната</span>
                <input type="text" name="room" id="room" v-model="newItem.room" class="p-[5px] border border-solid border-[#E0E0E0] rounded-[12px]" />
            </label>
            <label for="group" class="flex flex-col gap-[10px]">
                <span>Группа</span>
                <input type="text" name="group" id="group" v-model="newItem.group" class="p-[5px] border border-solid border-[#E0E0E0] rounded-[12px]" />
            </label>
            <div class="flex justify-between">
                <button 
                    @click="sessionStore.toggleForm" 
                    class="border border-solid border-[#E0E0E0] py-[10px] px-[24px] rounded-[12px] text-[15px]">Отмена</button>
                <button
                    @click="addNewItem" 
                    class="text-[15px] text-white font-[800] py-[10px] px-[24px] rounded-[12px] bg-[#3761F3]">
                    Создать
                </button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.form::-webkit-scrollbar {
    display: none;
}
</style>