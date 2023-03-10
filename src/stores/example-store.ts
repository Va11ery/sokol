import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    drawer: false,
  }),
  actions: {
    setDrawer() {
      this.drawer = !this.drawer;
    },
  },
});
