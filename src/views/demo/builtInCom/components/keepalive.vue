<template>
  <a-card title="keepalive">
    <h2> Transition内置组件，允许我们在多个组件之间动态切换时，有条件地缓存组件实例。</h2>
    <!-- <a-radio-group v-model:value="activeComponent">
      <a-radio :value="A"> A </a-radio>
      <a-radio :value="B"> B </a-radio>
    </a-radio-group> -->
    <label><input type="radio" v-model="activeComponent" :value="A" /> A</label>
    <label><input type="radio" v-model="activeComponent" :value="B" /> B</label>
    <KeepAlive>
      <component :is="activeComponent" />
    </KeepAlive>
  </a-card>
</template>

<script setup>
  import { ref, shallowRef } from 'vue';
  import A from './keepalive/A.vue';
  import B from './keepalive/B.vue';
  const activeComponent = shallowRef(A);
</script>

<style lang="less" scoped></style>
