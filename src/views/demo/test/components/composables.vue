<template>
  <a-card title="Composables-组合函数">
    <h2>核心逻辑仍然完全相同——我们所要做的就是将其移动到一个外部函数中，并返回应该公开的状态</h2>
    <div>Mouse position is at: {{ x }}, {{ y }}</div>
  </a-card>
</template>

<script setup>
  import { useMouse } from './composables/mouse.js';
  const { x, y } = useMouse();
  //   import { ref, onMounted, onUnmounted } from 'vue';

  //   const x = ref(0);
  //   const y = ref(0);

  //   function update(event) {
  //     x.value = event.pageX;
  //     y.value = event.pageY;
  //   }

  //   onMounted(() => {
  //     window.addEventListener('mousemove', update);
  //   });
  //   onUnmounted(() => {
  //     window.removeEventListener('mousemove', update);
  //   });
</script>
<style></style>
