<template>
  <a-card title="demo2 - emit" :bordered="false">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ index + 1 }}. {{ item }}</li>
    </ul>
    <Add @add="handleAdd" />
  </a-card>
</template>

<script setup>
  import { ref } from 'vue';
  import Add from './add.vue';
  const list = ref(['JavaScript', 'HTML', 'CSS']);
  const handleAdd = (value) => {
    list.value.push(value);
  };
</script>

<style scoped></style>
