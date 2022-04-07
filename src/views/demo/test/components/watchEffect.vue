<template>
  <a-card title="watchEffect">
    <div>
      <h1>Watch：</h1>
      ·具备一定的惰性。
      <br />
      ·参数可以拿到最新值和之前的值。
      <br />
      ·可以侦听多个数据的变化，用一个侦听器承载。
      <br />
      ·给 watch 第三个参数 添加 { immediate:true } 可以立即执行，没有惰性。
      <br />
    </div>
    <a-divider />
    <div>
      <h1>watchEffect</h1>
      ·立即执行，没有惰性。
      <br />
      ·不需要传递侦听的内容，自动感知代码依赖，不需要传递很多参数，只用传递一个回调函数。
      <br />
      ·可以侦听多个数据的变化，用一个侦听器承载。
      <br />
      ·不能获取之前的值。
      <br />
    </div>
    <a-input v-model:value="p1" />
    +
    <a-input v-model:value="p2" />=
    <span>{{ p1 * 1 + p2 * 1 }}</span>
  </a-card>
</template>

<script setup>
  import { ref, watchEffect } from 'vue';
  const p1 = ref(0);
  const p2 = ref(0);
  watchEffect(() => {
    console.log(p1.value);
    console.log(p2.value);
  });
</script>

<style lang="less" scoped>
  hr {
    margin: 20px;
  }
</style>
