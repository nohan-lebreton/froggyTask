<script setup>
import { ref } from 'vue'
import { useTaskListStore } from '@/stores/taskList'
import { usePopupStore } from '@/stores/popup'

const store = useTaskListStore()
const input = ref('')
const popupStore = usePopupStore()

function handleSubmit() {
  const msg = store.add(input.value)
  popupStore.showPopup(msg)
  input.value = ''
  console.log(store.list)
}
</script>
<template>
  <div class="todo-app">
    <h1>Kata Task List</h1>
    <form @submit.prevent="handleSubmit()">
      <input v-model="input" type="text" placeholder="Write a task ..." /><button class="btn-add">
        Add
      </button>
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
  background-color: #54c392;
  width: 400px;
  height: 150px;
  border-radius: 20px 20px 0px 0px;
  text-align: center;
}
input {
  height: 30px;
  border-style: hidden;
  outline: none;
  padding-left: 10px;
  width: 60%;
  border-radius: 20px 0px 0px 20px;
}

.btn-add {
  background-color: #f9ea4b;
  width: 10%;
  height: 32px;
  margin-left: -20px;
  border-radius: 20px 20px 20px 20px;
  border-style: hidden;
}

.btn-add:hover {
  background-color: #f9d94b;
}

/* POPUP */
.popup {
  position: absolute;
  top: 200px;
  left: 60%;
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
