import { defineStore } from 'pinia'
import { useTaskStore } from '@/stores/task'
import { v4 as uuidv4 } from 'uuid'

export const useTaskListStore = defineStore('taskList', {
  //state
  //getters
  //actions
  state: () => ({
    list: []
  }),
  actions: {
    add(label) {
      if (label == '') {
        return 'Write a task'
      } else if (label.length > 20) {
        return 'Task should be shorter'
      } else {
        const taskStore = useTaskStore()
        taskStore.id = uuidv4()
        taskStore.label = label
        this.list.push({ ...taskStore.$state })
        return 'Task added successfully!'
      }
    },
    remove(taskId) {
      this.list = this.list.filter((task) => task.id !== taskId)
      return 'Task deleted'
    },
    rerank(task, newPos) {
      const taskIndex = this.list.indexOf(task)
      this.list.splice(taskIndex, 1)
      this.list.splice(newPos, 0, task)
    },
    copy() {
      const taskListCopy = this.list.slice()
      return taskListCopy
    },
    search(input) {
      const searchList = []
      this.list.forEach((task) => {
        if (task.label.includes(input) == true) {
          searchList.push(task)
        }
      })
      return searchList
    }
  }
})
