<template>
  <a-card title="demo4 - refs" :bordered="false">
    <ul>
      <li v-for="(item, index) in addRefs?.list" :key="index">{{ index + 1 }}. {{ item }}</li>
    </ul>
    <Add ref="addRefs" />
  </a-card>
</template>

<script setup>
  import { ref } from 'vue';
  import Add from './add.vue';
  const addRefs = ref(null);
</script>

<style scoped></style>
