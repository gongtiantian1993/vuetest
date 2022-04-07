<template>
  <PageWrapper>
    <a-select :default-value="spanSetting.defaultValue" style="width: 120px" @change="handleChange">
      <a-select-option v-for="(item, index) in spanSetting.list" :key="index" :value="item">
        {{ item }}
      </a-select-option>
    </a-select>
    <a-row :gutter="[16, 16]">
      <a-col :span="spanSetting.defaultValue">
        <Computed />
      </a-col>
      <a-col :span="spanSetting.defaultValue">
        <Event />
      </a-col>
      <a-col :span="spanSetting.defaultValue">
        <LifeCycleHooks />
      </a-col>
      <a-col :span="spanSetting.defaultValue">
        <Watch />
      </a-col>
      <a-col :span="spanSetting.defaultValue">
        <WatchEffect />
      </a-col>
      <a-col :span="spanSetting.defaultValue">
        <Refs />
      </a-col>
      <a-col :span="spanSetting.defaultValue">
        <Slot />
      </a-col>
      <a-col :span="spanSetting.defaultValue">
        <Provide />
      </a-col>
      <a-col :span="spanSetting.defaultValue">
        <Composables />
      </a-col>
      <a-col :span="spanSetting.defaultValue">
        <CustomDirectives />
      </a-col>
    </a-row>
  </PageWrapper>
</template>
<script setup>
  import { PageWrapper } from '/@/components/Page';
  import Computed from './components/computed.vue';
  import Event from './components/event.vue';
  import LifeCycleHooks from './components/lifeCycleHooks.vue';
  import Watch from './components/watch.vue';
  import WatchEffect from './components/watchEffect.vue';
  import Refs from './components/refs.vue';
  import Slot from './components/slot.vue';
  import Provide from './components/provide.vue';
  import Composables from './components/composables.vue';
  import CustomDirectives from './components/customDirectives.vue';
  import { reactive } from 'vue';
  const spanSetting = reactive({
    defaultValue: 3,
    list: [2, 3, 4, 6, 8, 12, 24],
  });
  const handleChange = (value) => {
    spanSetting.defaultValue = value;
  };
</script>
