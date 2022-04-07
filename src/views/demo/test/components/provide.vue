<template>
  <a-card title="provide/inject">
    <div> provide count : {{ count }} </div>
    <div>location: {{ location }}</div>
    <a-divider />
    <Child1 />
    <a-divider />
    <Child2 />
  </a-card>
</template>

<script setup>
  import { ref, provide, readonly } from 'vue';
  import Child1 from './provide/child1.vue';
  import Child2 from './provide/child2.vue';
  const count = ref(0);
  provide('count', count);
  // provide('count', readonly(count)); // readonly 只读

  const location = ref('North Pole');
  function updateLocation() {
    location.value = 'South Pole';
  }
  provide('location', {
    location,
    updateLocation,
  });
</script>

<style></style>
