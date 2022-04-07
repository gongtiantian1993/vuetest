<template>
  <a-card title="slot">
    <Container>
      <template #header>
        <p>header</p>
      </template>
      <!-- 具名插槽接收传递过来的参数 -->
      <template #default="slotProps">
        <p>匿名插槽/默认default插槽位置</p>
        <p>参数Count: {{ slotProps.count }}</p>
        <p>参数Text: {{ slotProps.text }}</p>
      </template>
      <template #footer>
        <p>footer</p>
      </template>
    </Container>
    <a-divider />
    <!-- 匿名插槽/默认插槽 - 接收传递过来的参数 -->
    <Container v-slot="slotProps">
      <p>参数Count: {{ slotProps.count }}</p>
      <p>参数Text: {{ slotProps.text }}</p>
    </Container>
    <a-divider />
    <!-- 匿名插槽/默认插槽 - 结构接收传递过来的参数 -->
    <Container v-slot="{ count, text }">
      <p>{{ count }} </p>
      <p>{{ text }} </p>
    </Container>
    <a-divider />
    <h2>实例</h2>
    <FancyList :api-url="url" :per-page="10">
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p class="meta">by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </FancyList>
  </a-card>
</template>

<script setup>
  import Container from './slot/container.vue';
  import FancyList from './slot/FancyList.vue';
</script>

<style lang="less" scoped>
  .meta {
    font-size: 0.8em;
    color: #42b883;
  }
</style>
