<template>
  <a-card title="demo3 - v-model" :bordered="false">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ index + 1 }}. {{ item }}</li>
    </ul>
    <Add v-model:modellist="list" :fn="fn"/>
  </a-card>
</template>

<script setup>
  import { ref } from 'vue';
  import Add from './add.vue';
  const list = ref(['JavaScript', 'HTML', 'CSS']);
  function fn() {
    console.log(12345623456345);
  }
</script>

<style scoped></style>
