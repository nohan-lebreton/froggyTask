<script setup></script>

<template>
  <div class="todo-app">
    <section class="move-area">
      <div class="frog">
        <div class="eyes">
          <div class="eye"></div>
          <div class="eye"></div>
        </div>
      </div>
    </section>
    <img src="/img/frog.png" alt="Frog" />
  </div>
</template>

<script setup>
document.querySelector('body').addEventListener('mousemove', eyeball)
function eyeball() {
  'use strict'
  var eye = document.querySelectorAll('.eye')
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2
    let radian = Math.atan2(event.pageX - x, event.pageY - y)
    let rot = radian * (180 / Math.PI) * -1 + 270
    eye.style.transform = 'rotate(' + rot + 'deg)'
  })
}
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  display: flex;
  margin: auto;
  max-width: 40%;
  height: auto;
}

.eyes {
  display: flex;
  justify-content: center; /* Centre les yeux horizontalement */
  position: relative;
  top: -10px;
  display: flex;
  margin-bottom: -50px;
}
.eyes .eye {
  position: relative;
  width: 40px;
  height: 40px;
  display: block;
  background: #f9ea4b;
  margin: 0 10px;
  border-radius: 50%;
}

.eyes .eye::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: #333;
  border-radius: 50%;
}
</style>
