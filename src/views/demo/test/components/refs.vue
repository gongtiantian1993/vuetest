<template>
  <a-card title="refs/props/emits">
    <h2>refs: 直接访问底层DOM元素时使用特殊的ref属性:</h2>
    <a-input ref="input" />
    <a-divider />
    <h2>refs: 子组件通过defineExpose暴露变量， 父组件通过给子组件配置ref接收</h2>
    <p>{{ child?.msg }}</p>
    <a-divider />
    <h2>props: 子组件defineProps接收，父组件:props名='值'传递</h2>
    <h2
      >emits:
      子组件事件操控父组件/向父组件传递值。子组件defineEmits发射事件，父组件调用子组件时用@子组件emit名='xxxFn'接收
    </h2>
    <div :style="{ fontSize: postFontSize + 'px' }">
      <Child ref="child" :title="'Child\'s title'" @enlarge-text="postFontSize += 1" />
    </div>
  </a-card>
</template>

<script setup>
  import { ref } from 'vue';
  import Child from './refs/child.vue';
  const input = ref(null);
  const child = ref(null);
  const postFontSize = ref(14);
  setTimeout(() => {
    input.value.focus();
  }, 3000);
</script>

<style lang="less" scoped></style>
