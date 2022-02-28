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
  const emits = defineEmits(['add']);
  const handleAdd = (e) => {
    emits('add', e);
    value.value = '';
  };
</script>

<style scoped></style>
