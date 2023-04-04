import { defineStore } from "pinia";

export const useStore = defineStore("storeId", {
    state: () => ({
        counter: 0,
    }),

    getters: {
        doubleCount: (state) => state.counter * 2,
    },

    //action(method)
    actions: {
        decrement() {
            this.counter--;
        },
    },
});
