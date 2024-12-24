import { defineStore } from "pinia";
type Status = 'done'|'pending'|'planning';
export const useSessionsStore = defineStore('sessions', {
    state: () => {
        return {
            isFormOpened: false,
            sessions: [
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
              ]
        }
    },
    getters: {
        nextId: (state) => {
            return state.sessions[state.sessions.length - 1].id + 1;
        }
    },
    actions: {
        toggleForm() {
            this.isFormOpened = !this.isFormOpened;
        },
        addSession(session: any) {
            this.sessions.push(session);
        }
    }
})