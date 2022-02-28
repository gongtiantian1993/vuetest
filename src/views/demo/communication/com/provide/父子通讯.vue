<template>
  <a-card title="demo5 - provide/inject" :bordered="false">
    <List />
    <a-input-search
      v-model:value="value"
      placeholder="input add text"
      enter-button="Add"
      size="large"
      @search="handleAdd"
    />
  </a-card>
</template>

<script setup>
  import { ref, provide } from 'vue';
  import List from './list.vue';
  const list = ref(['JavaScript', 'HTML', 'CSS']);
  const value = ref('');
  // provide向组件提供数据
  provide('list', list.value);
  const handleAdd = (e) => {
    list.value.push(e);
    value.value = '';
  };
</script>

<style scoped></style>
