import { defineStore } from "pinia";

export const useNavbarStore = defineStore('navbar', {
    state: () => {
        return {
            isOpened: true,
        }
    },
    actions: {
        toggleNav() {
            this.isOpened = !this.isOpened;
        }
    }
})