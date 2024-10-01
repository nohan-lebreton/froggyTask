<script setup>
import { useTaskListStore } from '../stores/taskList'
import { usePopupStore } from '@/stores/popup'
import { storeToRefs } from 'pinia'

const popupStore = usePopupStore()
const taskListStore = useTaskListStore()

const { list } = storeToRefs(taskListStore)

function handleRemove(taskID) {
  const msg = taskListStore.remove(taskID)
  popupStore.showPopup(msg)
}

function handleDone(task) {
  task.markAsDone()
  console.log(task.label)
}

function handleRename(task) {
  task.rename('ouiiiiiiiiii')
}
</script>

<template>
  <div class="taskList">
    <div v-for="task in list" :key="task.id" class="list">
      <div class="task">
        <img
          v-if="!task.done"
          src="../assets/img/notDone.svg"
          alt="Not Done"
          class="task-icon"
          @click="handleDone(task)"
        />
        <img
          v-if="task.done"
          src="../assets/img/done.svg"
          alt="Done"
          class="task-icon"
          @click="handleDone(task)"
        />
        <span :class="{ done: task.done }" @click="handleRename(task)">{{ task.label }}</span>
        <img
          src="../assets/img/trash.svg"
          alt="Trash"
          class="trash-icon"
          @click="handleRemove(task.id)"
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
