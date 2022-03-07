<template>
  <a-card title="Computed">
    <a-alert
      message="常用于"
      description="包含反应性数据的复杂逻辑，建议使用计算属性"
      type="warning"
    />
    <p>出版书的数量(直接使用数据判断):</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
    <p>出版书的数量(使用计算属性定义新变量):</p>
    <span>{{ publishedBooksMessage }}</span>
    <hr />
    <a-input placeholder="Basic usage" v-model:value="count" />
    <p>当前输入的为数字：{{ isNumber }}</p>
  </a-card>
</template>
<script setup>
  import { ref, reactive, computed } from 'vue';
  // 原始数据
  const author = reactive({
    name: 'John Doe',
    books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
  });
  const count = ref(0);
  // 计算属性
  const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No';
  });
  const isNumber = computed(() => {
    return !isNaN(count.value);
  });
</script>
