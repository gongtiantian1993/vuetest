<template>
  <h2>Child1</h2>
  <a-input v-model:value="count" />
</template>

<script setup>
  import { inject } from 'vue';
  const count = inject('count');
</script>

<style></style>
