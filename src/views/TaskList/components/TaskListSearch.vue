<script setup>
import { ref, watch } from 'vue'
import { useTaskListStore } from '@/views/TaskList/taskList'
import { usePopupStore } from '@/stores/popup'

const taskList = useTaskListStore()
const searchInputLabel = ref('')
const popupStore = usePopupStore()

function searchTaskInList() {
  if (searchInputLabel.value === '') {
    taskList.loadTasks()
  }
  const searchList = taskList.searchTask(searchInputLabel.value)
  taskList.list = searchList
  popupStore.showPopup('You search a task')
}

watch(searchInputLabel, () => {
  searchTaskInList()
})
</script>
<template>
  <form>
    <input v-model="searchInputLabel" type="text" placeholder="Search a task ..." />
  </form>
</template>

<style scoped>
form {
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
</style>
