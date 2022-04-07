<template>
  <h2>Child2</h2>
  <p>{{ count }}</p>
  <a-button @click="updateLocation">点击切换：{{ location }}</a-button>
</template>

<script setup>
  import { inject } from 'vue';
  const count = inject('count', '默认值');
  setTimeout(() => {
    count.value = 100;
  }, 3000);

  const { location, updateLocation } = inject('location');
</script>

<style></style>
