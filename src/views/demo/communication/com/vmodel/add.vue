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
  const props = defineProps({
    modellist: {
      type: Array,
      default: () => [],
    },
    fn: {
      type: Function,
    },
  });
  // 注：  如果在子组件中并没有用props接收， 则必须通过emits更新，即打开注释的两行代码
  // const emits = defineEmits(['update:modellist']);
  const handleAdd = (e) => {
    const arr = props.modellist;
    arr.push(e);
    // emits('update:modellist', arr);
    value.value = '';
  };
  console.log(props.fn());
</script>

<style scoped></style>
