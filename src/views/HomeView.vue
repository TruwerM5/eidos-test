<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, onMounted, computed, watch } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';
import StatusVue from '@/components/StatusVue.vue';
type Status = 'done'|'pending'|'planning';

const tableButtons = [
  {
    id: 1,
    title: 'Дата и время'
  },{
    id: 2,
    title: 'Статус'
  },{
    id: 3,
    title: 'Название учебного модуля'
  },{
    id: 4,
    title: 'Тип сессии'
  },{
    id: 5,
    title: 'Комната'
  },{
    id: 6,
    title: 'Группа'
  }
];

const placeholderData = [
  {
    id: 1,
    date: '15.07.2023, 12:00 - 13:00',
    status: <Status>('planning'),
    lesson: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    type: 'Урок',
    room: 'Комната 5, Комната 6, Комната 7',
    group: 'ТП-31'
  }, {
    id: 2,
    date: '15.07.2023, 13:00- 14:00',
    status: <Status>('planning'),
    lesson: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    type: 'Аккредитация',
    room: 'Комната 6',
    group: '420-11КС'
  }, {
    id: 3,
    date: '14.07.2023, 12:00-13:00',
    status: <Status>('planning'),
    lesson: 'Реанимация новорожденных',
    type: 'Урок',
    room: 'Комната 1, Комната 2',
    group: '240011С'
  }, {
    id: 4,
    date: '05.06.2023, 13:00-14:00',
    status: <Status>('pending'),
    lesson: 'Акушерство и гинекология',
    type: 'Экзамен',
    room: 'Комната 6',
    group: 'ТП-31'
  }, {
    id: 5,
    date: '05.06.2023, 12:00-13:00',
    status: <Status>('done'),
    lesson: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    type: 'Аккредитация',
    room: 'Комната 6',
    group: 'КЛ-98'
  }, {
    id: 6,
    date: '05.06.2023, 11:00-12:00',
    status: <Status>('done'),
    lesson: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    type: 'Аккредитация',
    room: 'Комната 6',
    group: '410011С'
  }, {
    id: 7,
    date: '04.06.2023, 12:00-13:00',
    status: <Status>('done'),
    lesson: 'Базовые навыки в ультразвуковом иследовании',
    type: 'Урок',
    room: 'Комната 6',
    group: 'КЛ-98'
  },{
    id: 8,
    date: '03.06.2023, 13:00-14:00',
    status: <Status>('done'),
    lesson: 'Реанимация новорожденных',
    type: 'Экзамен',
    room: 'Комната 1, Комната 2, Комната 3, Комната 4',
    group: '240-11КС'
  },{
    id: 9,
    date: '02.06.2023, 13:00-14:00',
    status: <Status>('done'),
    lesson: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    type: 'Аккредитация',
    room: 'Комната 6',
    group: '410011С'
  },{
    id: 10,
    date: '02.06.2023, 13:00-14:00',
    status: <Status>('done'),
    lesson: 'Акушерство и гинекология',
    type: 'Урок',
    room: 'Комната 6',
    group: '120-11КС'
  },{
    id: 11,
    date: '02.06.2023, 13:00-14:00',
    status: <Status>('done'),
    lesson: 'Базовые навыки в ультразвуковом иследовании',
    type: 'Урок',
    room: 'Комната 6',
    group: 'КЛ-98'
  },
];

const search = ref('');
const route = useRoute();
const router = useRouter();
const isSorted = ref(false);
const currentPage = computed(() => Number(route.query.page) || 1);
onMounted(() => {
  router.push({ query: { page: currentPage.value }});
});
const selectedData = computed(() => {
  return placeholderData.slice((currentPage.value-1) * 10, (currentPage.value - 1) * 10 + 10);
});

const filteredData = computed(() => {
  if(!search.value) return selectedData.value;
  
  
  return selectedData.value
    .filter(item => item.lesson.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))  
});


const sortedByDate = computed(() => {
  if(!isSorted.value) {
    return filteredData.value;
  } else {
    let newData = filteredData.value.slice();
    return newData.sort((a,b) => a.date.localeCompare(b.date));
  }
});


const buttons = computed(() => Math.ceil(selectedData.value.length/10)+1); //Количество кнопок для пагинации

function updatePage(page: number) {
  router.push({query: { page }});
}

function decreasePage() {
  if(currentPage.value === 1) {
    return;
  }
  router.push({ query: { page: currentPage.value - 1}});
}

function increasePage() {
  if(currentPage.value === Math.ceil(selectedData.value.length/10)+1) {
    return;
  };
  router.push({ query: { page: currentPage.value + 1}});
}

function sortData(id: number) {
  isSorted.value = !isSorted.value;
}


</script>

<template>
  <div class="index-page relative flex flex-col h-full overflow-hidden">
    <!-- TOP -->
    <div class="flex justify-between items-center mb-[16px]">
      <h5 class="text-[24px] font-[800]">Учебные сессии</h5>
      <div class="flex gap-[14px] items-center">
        <div class="relative"> <!--SEARCH INPUT-->
          <Icon 
            icon="mynaui:search" 
            width="24" 
            height="24" 
            class="absolute top-1/2 -translate-y-1/2 left-[8px]" 
            color="#999" 
          />
          <input 
            type="text" 
            placeholder="Поиск" 
            class="pl-[40px] py-[12px] pr-[8px] border border-solid border-[#E0E0E0] rounded-[12px]"
            v-model="search"
          />
        </div>
        <button class="p-[12px] rounded-[12px] bg-[#F4F4F4]">
          <Icon 
            icon="circum:filter" 
            width="24" 
            height="24" 
            class="text-[#2F3144A6]"

          />
        </button>
        <button class="p-[12px] rounded-[12px] bg-[#F4F4F4]">
          <Icon 
            icon="mynaui:filter-solid" 
            width="24" 
            height="24" 
            class="text-[#2F3144A6]" 
          />
        </button>
        <button class="text-[15px] text-white font-[800] py-[10px] px-[24px] rounded-[12px] bg-[#3761F3]">
          Создать
        </button>
      </div>
    </div>
    <!-- END TOP -->
    <!-- BODY -->
     <div class="table-body overflow-y-scroll">
      <div class="border border-solid border-[#E8EAEC] rounded-t-[12px]">
      
      <div 
        class="grid grid-cols-7 gap-[16px] justify-items-start font-bold text-[17px] bg-[#F5F7F9] border-b border-b-solid border-b-[#E8EAEC] px-[16px] py-[10px] rounded-t-[12px]">
        <button v-for="button in tableButtons" :key="button.id"
        :class="['relative',{'col-span-2': button.id == 3}]"
        @click="sortData(button.id)"
        >
          {{ button.title }}
          <Icon 
            v-if="button.id == 1"
            icon="ci:chevron-down" 
            color="#999"
            height="24" width="24"
            :class="['absolute -right-[30px] top-1/2 -translate-y-1/2', isSorted ? 'rotate-180' : '']"
          />
        </button>
      </div>
      
       <div
        v-for="item,i in sortedByDate" :key="item.id"
        :class="['grid grid-cols-7 gap-[16px] justify-items-start text-[15px] py-[12px] px-[16px] min-h-[64px] items-center',
          i % 2 != 0 ? 'bg-[#F4F4F4]': '']">
          <span>{{ item.date }}</span>
          <StatusVue :status="item.status" />
          <span class="col-span-2">{{ item.lesson }}</span>
          <span>{{ item.type }}</span>
          <span>{{ item.room }}</span>
          <span>{{ item.group }}</span>
       </div>
   </div>
     </div>
     
    <!-- END BODY -->
    <!-- BUTTONS -->
    <div class="flex gap-[8px] bg-[#F5F7F9] py-[11px] px-[16px] rounded-b-[12px] border-b border-l border-r border-solid border-[#E8EAEC]">
      <button class="page-button" @click="decreasePage">
        <Icon 
          color="#999"
          icon="material-symbols:chevron-left-rounded" 
        />
      </button>
      <button v-for="button,i in buttons" 
      :key="button" 
      @click="updatePage(button)"
      :class="['page-button', {'active': button == currentPage}]">
        {{ button }}
      </button>
      <button class="page-button" @click="increasePage">
        <Icon 
          color="#999"
          icon="material-symbols:chevron-right-rounded" 
        />
      </button>
    </div>
  </div>
  
</template>

<style scoped>
.table-body::-webkit-scrollbar {
  display: none;
}
</style>