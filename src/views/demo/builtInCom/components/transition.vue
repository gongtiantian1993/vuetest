<template>
  <a-card title="Transition & TransitionGroup">
    <h2> Transition用于在元素或组件进入和离开 DOM 时应用动画。</h2>
    <a-button @click="show = !show">Toggle</a-button>
    <Transition name="bounce">
      <p v-if="show" style="text-align: center"> Hello here is some bouncy text! </p>
    </Transition>
    <a-divider />
    <h2> TransitionGroup用于在 v-for 列表中插入、移除或移动元素或组件时应用动画。</h2>
    <TransitionGroup name="list" tag="ul">
      <a-input v-model:value="input" @press-enter="addItem" />
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </TransitionGroup>
  </a-card>
</template>

<script setup>
  import { ref } from 'vue';
  const show = ref(true);
  const items = ref(['zhangsan', 'lisi', 'wangwu', 'zhaoliu', 'sunqi']);
  const input = ref('');
  const addItem = (e) => {
    console.log(e.target.value);
    items.value.push(e.target.value);
  };
</script>

<style lang="less" scoped>
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
