<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{ index + 1 }}. {{ item }}</li>
  </ul>
</template>

<script setup>
  import { inject } from 'vue';
  const list = inject('list');
</script>

<style></style>
