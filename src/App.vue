<script setup>
import AppFrog from './components/AppFrog.vue'
import AppHeader from './components/AppHeader.vue'
import AppTaskLIst from './components/AppTaskList.vue'
</script>

<template>
  <div class="app-container">
    <AppFrog />
    <AppHeader />
    <AppTaskLIst />
  </div>
</template>

<style scoped>
.app-container {
  width: 400px;
  height: 800px;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #15b392;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
