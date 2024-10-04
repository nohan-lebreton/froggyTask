<script setup>
import { ref, watch } from 'vue'
import { useTaskListStore } from '@/views/TaskList/taskList'
import { usePopupStore } from '@/stores/popup'

const taskList = useTaskListStore()
const addInputLabel = ref('')
const popupStore = usePopupStore()

function createTaskInList() {
  if (addInputLabel.value == '') {
    popupStore.showPopup('Write as task')
    return
  }
  if (addInputLabel.value.length > 20) {
    popupStore.showPopup('Task too long')
    return
  }
  taskList.createTask(addInputLabel.value)
  popupStore.showPopup('Task added')
  addInputLabel.value = ''
}
</script>
<template>
  <div class="todo-app">
    <form @submit.prevent="createTaskInList()">
      <input
        v-model="addInputLabel"
        type="text"
        placeholder="Write a task ..."
        data-testid="task-input"
      />
      <button class="btn-add" type="submit" data-testid="submit-task">Add</button>
    </form>

    <transition name="fade">
      <div v-if="popupStore.showPopupVisible" class="popup">
        {{ popupStore.showPopupMessage }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.todo-app {
  width: 400px;
  border-radius: 20px 20px 0px 0px;
  text-align: center;
}
input {
  height: 30px;
  border-style: hidden;
  outline: none;
  padding-left: 10px;
  width: 60%;
  border-radius: 20px 20px 20px 20px;
  margin-top: 10px;
}

.btn-add {
  background-color: #f9ea4b;
  width: 10%;
  height: 32px;
  margin-left: -30px;
  border-radius: 20px 20px 20px 20px;
  border-style: hidden;
}

.btn-add:hover {
  background-color: #f9d94b;
}

/* POPUP */
.popup {
  position: absolute;
  top: 120px;
  left: 58%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  padding: 10px;
  border-radius: 0px 200px 200px 200px;
  -webkit-border-radius: 0px 200px 200px 200px;
  -moz-border-radius: 0px 200px 200px 200px;
  z-index: 10;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-size: 1em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
