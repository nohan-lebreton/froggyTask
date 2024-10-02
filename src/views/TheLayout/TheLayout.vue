<script setup>
import AppFrog from '@/views/TheLayout/TheLayoutFrog.vue'
import AppHeader from '@/views/TheLayout/TheLayoutHeader.vue'
import AppTaskLIst from '@/views/TaskList/TaskList.vue'
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
