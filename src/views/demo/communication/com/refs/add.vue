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
  import { ref } from 'vue';
  const value = ref('');
  const list = ref(['JavaScript', 'HTML', 'CSS']);

  const handleAdd = (e) => {
    list.value.push(e);
    value.value = '';
  };
  defineExpose({ list });
</script>

<style scoped></style>
