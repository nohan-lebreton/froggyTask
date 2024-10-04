<script setup>
import { onMounted } from 'vue'

import { useTaskListStore } from '@/views/TaskList/taskList'
import { usePopupStore } from '@/stores/popup'
import TaskListTask from './components/TaskListTask.vue'
import TheFrog from './components/TheFrog.vue'
import TaskListSearch from './components/TaskListSearch.vue'

const popupStore = usePopupStore()
const taskList = useTaskListStore()

onMounted(() => {
  taskList.loadTasks()
})

function removeTaskInList(task) {
  taskList.remove(task)
  popupStore.showPopup('Task removed')
}

function toggleTaskInList(task) {
  taskList.toggleTask(task)
  popupStore.showPopup('Task toggled')
}
</script>

<template>
  <div class="taskList">
    <TheFrog />
    <TaskListSearch />
    <div v-for="task in taskList.list" :key="task.id" class="list">
      <TaskListTask :task="task" @delete="removeTaskInList" @toggle="toggleTaskInList" />
    </div>
  </div>
</template>

<style scoped></style>
