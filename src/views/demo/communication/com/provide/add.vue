<template>
  <a-input-search
    v-model:value="value"
    placeholder="input add text"
    enter-button="Add"
    size="large"
    @search="handleAdd"
  />
</template>

<script setup>
  import { ref, inject } from 'vue';
  const value = ref('');
  const list = inject('list');
  const handleAdd = (e) => {
    list.push(e);
    value.value = '';
  };
</script>

<style scoped></style>
