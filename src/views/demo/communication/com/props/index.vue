<template>
  <a-card title="demo1 - Props" :bordered="false">
    <List :list="list" />
    <a-input-search
      v-model:value="value"
      placeholder="input add text"
      enter-button="Add"
      size="large"
      :loading="isLoading"
      @search="handleAdd"
    />
  </a-card>
</template>

<script setup>
  import { ref } from 'vue';
  import List from './list.vue';
  const list = ref(['JavaScript', 'HTML', 'CSS']);
  const value = ref('');
  const isLoading = ref(false);

  const handleAdd = (e) => {
    isLoading.value = true;
    list.value.push(e);
    setTimeout(() => {
      value.value = '';
      isLoading.value = false;
    }, 1000);
  };
</script>

<style scoped></style>
