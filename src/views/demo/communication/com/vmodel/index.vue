<template>
  <a-card title="demo3 - v-model" :bordered="false">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ index + 1 }}. {{ item }}</li>
    </ul>
    <Add v-model:modellist="list" />
  </a-card>
</template>

<script setup>
  import { ref } from 'vue';
  import Add from './add.vue';
  const list = ref(['JavaScript', 'HTML', 'CSS']);
</script>

<style scoped></style>
