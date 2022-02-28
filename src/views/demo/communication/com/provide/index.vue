<template>
  <a-card title="demo5 - provide/inject" :bordered="false">
    <!-- 兄弟通讯 -->
    <List />
    <Add />
  </a-card>
</template>

<script setup>
  import List from './list.vue';
  import Add from './add.vue';
  import { ref, provide } from 'vue';
  const list = ref(['JavaScript', 'HTML', 'CSS']);
  provide('list', list.value);
</script>

<style scoped></style>
