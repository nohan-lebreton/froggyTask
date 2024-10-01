import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePopupStore = defineStore('popup', () => {
  const showPopupMessage = ref('')
  const showPopupVisible = ref(false)

  function showPopup(text) {
    showPopupMessage.value = text
    showPopupVisible.value = true

    setTimeout(() => {
      showPopupVisible.value = false
    }, 3000)
  }

  return {
    showPopupMessage,
    showPopupVisible,
    showPopup
  }
})
