<template>
  <a-card title="事件">
    <h1>事件修饰器</h1>
    <ul>
      <li v-for="item in eventModifiers" :key="item">{{ item }}</li>
    </ul>
    <a-divider />
    <div class="box1" @click="alertFn('fn1')">
      <h2>fn1</h2>
      <div class="box1_1" @click="alertFn('fn2')">
        <h2>fn2</h2>
        <a-button @click.stop="add('hello', $event)">test</a-button>
      </div>
    </div>
    <a-divider />
    <a href="" @click.prevent="alertFn('超链接')">一个超链接</a>
    <a-divider />
    <h1>input修饰器</h1>
    <a-input @keyup.enter="alertFn('enter')" placeholder="enter" />
    <a-input @keyup.space="alertFn('space')" placeholder="space" />
  </a-card>
</template>
<script setup>
  import { ref } from 'vue';
  const eventModifiers = ref(['.stop', '.prevent', 'self', 'capture', 'once', 'passive']);
  const alertFn = (msg) => {
    alert(msg);
  };
  const add = (a, event) => {
    alert('button');
    console.log(a);
    console.log(event);
  };
</script>
<style lang="less" scoped>
  .box1 {
    background: #ccc;
    .box1_1 {
      background: skyblue;
    }
  }
</style>
