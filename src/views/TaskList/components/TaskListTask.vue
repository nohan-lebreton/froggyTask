<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  task: Object
})

const emit = defineEmits(['delete', 'toggle'])

function emitDelete() {
  emit('delete', props.task)
}

function toggleTask() {
  emit('toggle', props.task)
}

const url = computed(() => {
  const name = props.task.done ? 'done' : 'notDone'
  return `/img/${name}.svg`
})

const alt = computed(() => {
  return props.task.done ? 'Done' : 'notDone'
})
</script>

<template>
  <div :class="['task', { done: task.done }]" data-testid="task">
    <img
      :src="url"
      :alt="alt"
      class="toggle-icon"
      @click="toggleTask()"
      data-testid="toggle-task"
    />
    <span :class="{ done: task.done }">{{ task.label }}</span>
    <img
      src="/img/trash.svg"
      alt="Trash"
      class="trash-icon"
      @click="emitDelete()"
      data-testid="delete-task"
    />
  </div>
</template>

<style scoped>
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

.toggle-icon {
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

.task.done {
  background-color: #67f373; /* Violet quand la tâche est terminée */
}

.done {
  text-decoration: line-through;
  color: gray;
}
</style>
