<script setup>
import { onMounted } from 'vue'

import { useTaskListStore } from '../stores/taskList'
import { usePopupStore } from '@/stores/popup'
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
    <div v-for="task in taskList.list" :key="task.id" class="list">
      <div class="task">
        <img
          v-if="!task.done"
          src="../assets/img/notDone.svg"
          alt="Not Done"
          class="task-icon"
          @click="toggleTaskInList(task)"
        />
        <img
          v-if="task.done"
          src="../assets/img/done.svg"
          alt="Done"
          class="task-icon"
          @click="toggleTaskInList(task)"
        />
        <span :class="{ done: task.done }">{{ task.label }}</span>
        <img
          src="../assets/img/trash.svg"
          alt="Trash"
          class="trash-icon"
          @click="removeTaskInList(task)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.taskList {
  background-color: #73ec8b;
  width: 400px;
  height: 500px;
  border-radius: 20px 20px 20px 20px;
  margin-top: -20px;
  overflow: auto;
}

.task {
  background-color: #f9ea4b;
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 20px;
  width: 350px;
  border-radius: 20px 20px 20px 20px;
  height: 60px;
}

.task:hover {
  background-color: #f9d94b;
  width: 354px;
}

.task-icon {
  width: 20px;
  height: 20px;
  margin: 15px;
}

.trash-icon {
  width: 20px;
  height: 20px;
  margin-right: 15px;
  margin-left: auto;
}

.done {
  text-decoration: line-through;
  color: gray;
}
</style>
