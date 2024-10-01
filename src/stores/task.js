import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  //state
  //getters
  //actions
  state: () => ({
    id: null,
    done: false,
    label: ''
  }),
  actions: {
    markAsDone() {
      this.done = true
    },
    markAsNotDone() {
      this.done = false
    },
    rename(newLabel) {
      this.label = newLabel
    },
    toggle() {
      this.done = !this.done
    }
  }
})
