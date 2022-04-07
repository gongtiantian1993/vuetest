<template>
  <div>
    <p>child component {{ title }}</p>
    <a-button @click="setFontSizeFn">font size +</a-button>
  </div>
</template>

<script setup>
  const msg = '我是子组件';
  // prop
  defineProps({
    title: {
      type: String,
      default: '',
    },
  });
  // ref
  defineExpose({
    msg,
  });
  // defineEmits ，声明可发射事件
  const emits = defineEmits(['enlarge-text']);
  const setFontSizeFn = () => {
    emits('enlarge-text');
  };
</script>

<style lang="less" scoped>
  div {
    background: #87ceeb;
    padding: 10px;
  }
</style>
