<template>
  <a-card title="生命周期钩子">
    <ul>
      <li v-for="(item, index) in hooklList" :key="index">{{ item.name }} - {{ item.desc }}</li>
    </ul>
  </a-card>
</template>
<script setup>
  import {
    ref,
    onUpdated,
    onMounted,
    onUnmounted,
    onBeforeMount,
    onBeforeUpdate,
    onBeforeUnmount,
    onErrorCaptured,
    onActivated,
    onDeactivated,
    onServerPrefetch,
  } from 'vue';
  const hooklList = ref([
    {
      name: 'onMounted',
      desc: '注册在组件挂载后要调用的回调',
    },
    {
      name: 'onUpdated',
      desc: '注册一个回调函数，在组件由于响应性状态改变而更新了DOM树后调用',
    },
    {
      name: 'onUnmounted',
      desc: '注册一个要在组件卸载后调用的回调',
    },
    {
      name: 'onBeforeMount',
      desc: '注册一个钩子在组件被挂载之前被调用',
    },
    {
      name: 'onBeforeUpdate',
      desc: '注册一个钩子，在组件因为响应式状态改变而要更新DOM树之前调用',
    },
    {
      name: 'onBeforeUnmount',
      desc: '注册一个钩子，在组件实例被卸载之前调用',
    },
    {
      name: 'onErrorCaptured',
      desc: '注册一个钩子，当一个从派生组件传播的错误被捕获时调用',
    },
    {
      name: 'onActivated',
      desc: '注册一个回调函数，当组件实例作为<KeepAlive>缓存的树的一部分被插入到DOM中时调用',
    },
    {
      name: 'onDeactivated',
      desc: '注册一个回调函数，当组件实例从DOM中移除后，作为<KeepAlive>缓存的树的一部分被调用',
    },
    {
      name: 'onServerPrefetch',
      desc: '在组件实例在服务器上呈现之前，注册一个要解析的异步函数',
    },
  ]);
  onMounted(() => {
    console.log(`onMounted`);
  });
  onUpdated(() => {
    console.log(`onUpdated`);
  });
  onUnmounted(() => {
    console.log(`onUnmounted`);
  });
  onBeforeMount(() => {
    console.log(`onBeforeMount`);
  });
  onBeforeUpdate(() => {
    console.log(`onBeforeUpdate`);
  });
  onBeforeUnmount(() => {
    console.log(`onBeforeUnmount`);
  });
  onErrorCaptured(() => {
    console.log(`onErrorCaptured`);
  });
  onActivated(() => {
    console.log(`onActivated`);
  });
  onDeactivated(() => {
    console.log(`onDeactivated`);
  });
  onServerPrefetch(() => {
    console.log(`onServerPrefetch`);
  });
</script>
<style lang="less" scoped></style>
