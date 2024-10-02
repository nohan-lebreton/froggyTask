<script setup lang="ts">
//rensiegenr sur emit, props et revoir onboarding
import { computed } from 'vue'
const props = defineProps(['task'])
const emit = defineEmits(['...'])

function emitDelete() {
  emit('...')
}

const url = computed(() => {
  const name = props.task.done ? 'done' : 'notDone'
  return `../assets/img/${name}.svg`
})

const alt = computed(() => {
  return props.task.done ? '' : ''
})
</script>

<template>
  <div>
    <img :url="url" :alt="alt" />
    <button @click="emitDelete()" />
  </div>
</template>
