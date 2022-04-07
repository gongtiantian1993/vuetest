<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot :text="greetingMessage" :count="1"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const greetingMessage = ref('hello world');
</script>

<style lang="less" scoped></style>
