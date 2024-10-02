import { defineStore } from 'pinia'
import Task from '@/stores/task'
import LocalStoragePersistance from './localStoragePersistance'
export const useTaskListStore = defineStore('taskList', {
  //state
  //getters
  //actions
  state: () => ({
    persistance: new LocalStoragePersistance(),
    list: []
  }),
  actions: {
    saveTasks() {
      this.persistance.save('taskList', this.list)
    },
    loadTasks() {
      const savedTasks = this.persistance.load('taskList')
      if (savedTasks) {
        this.list = savedTasks.map(
          (taskData) => new Task(taskData.label, taskData.done, taskData.id)
        )
      }
    },
    createTask(taskLabel) {
      const task = new Task(taskLabel)
      this.add(task)
      this.saveTasks()
    },
    add(task) {
      this.list.push(task)
      this.saveTasks()
      console.log(this.list)
    },
    remove(task) {
      const taskIndex = this.indexOf(task)
      this.list.splice(taskIndex, 1)
      this.saveTasks()
      console.log(this.list)
      console.log(this.persistance)
    },
    indexOf(task) {
      return this.list.indexOf(task)
    },
    searchTask(input) {
      const searchList = []
      this.list.forEach((task) => {
        if (task.label.includes(input) == true) {
          searchList.push(task)
        }
      })
      return searchList
    },
    toggleTask(task) {
      task.toggle()
      this.saveTasks()
    }
  }
})
