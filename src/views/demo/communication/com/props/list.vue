<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{ index + 1 }}. {{ item }}</li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    list: {
      type: Array,
      default: () => [],
    },
  });
</script>

<style></style>
