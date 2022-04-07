<template>
  <PageWrapper>
    <a-select :default-value="spanSetting.defaultValue" style="width: 120px" @change="handleChange">
      <a-select-option v-for="(item, index) in spanSetting.list" :key="index" :value="item">
        {{ item }}
      </a-select-option>
    </a-select>
    <a-row :gutter="[16, 16]">
      <a-col :span="spanSetting.defaultValue">
        <TransitionCom />
      </a-col>
      <a-col :span="spanSetting.defaultValue">
        <KeepaliveCom />
      </a-col>
    </a-row>
  </PageWrapper>
</template>
<script setup>
  import { PageWrapper } from '/@/components/Page';
  import TransitionCom from './components/transition.vue';
  import KeepaliveCom from './components/keepalive.vue';
  import { reactive } from 'vue';
  const spanSetting = reactive({
    defaultValue: 6,
    list: [2, 3, 4, 6, 8, 12, 24],
  });
  const handleChange = (value) => {
    spanSetting.defaultValue = value;
  };
</script>
