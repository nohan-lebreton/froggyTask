<script setup>
import DashBoard from '../DashBoard/DashBoard.vue'
import TaskCreator from '../TaskCreator/TaskCreator.vue'
import TaskList from '@/views/TaskList/TaskList.vue'
</script>

<template>
  <div class="layout">
    <TaskCreator />
    <TaskList />
    <DashBoard />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  justify-content: space-evenly;
}

.layout > * {
  flex: 1;
  max-width: 400px;
  /*background-color: #73ec8b;*/
  height: 100vh;
  border-radius: 20px 20px 20px 20px;
}
</style>
