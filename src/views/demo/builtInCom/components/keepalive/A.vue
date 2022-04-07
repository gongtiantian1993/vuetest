<template>
  <p>count: {{ count }}</p>
  <a-button @click="count++">add</a-button>
</template>

<script setup>
  import { ref } from 'vue';
  const count = ref(0);
</script>

<style></style>
