<template>
  <PageWrapper>
    <a-row :gutter="[16, 16]">
      <a-col :span="8">
        <Demo1 />
      </a-col>
      <a-col :span="8">
        <Demo2 />
      </a-col>
      <a-col :span="8">
        <Demo3 />
      </a-col>
      <a-col :span="8">
        <Demo4 />
      </a-col>
      <a-col :span="8">
        <Demo5 />
      </a-col>
    </a-row>
  </PageWrapper>
</template>

<script setup>
  import { PageWrapper } from '/@/components/Page';
  import Demo1 from './com/props/index.vue';
  import Demo2 from './com/emit/index.vue';
  import Demo3 from './com/vmodel/index.vue';
  import Demo4 from './com/refs/index.vue';
  import Demo5 from './com/provide/index.vue';
</script>

<style scoped></style>
