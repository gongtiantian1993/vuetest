<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{ index + 1 }}. {{ item }}</li>
  </ul>
</template>

<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    list: {
      type: Array,
      default: () => [],
    },
  });
</script>

<style></style>
