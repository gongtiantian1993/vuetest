<template>
  <a-button @click="openModal">打开弹出框</a-button>
  <modal :title="'测试弹出框'" :visible="modalVisible" @close-modal="handleClose">
    <a-input type="text" v-model:value="formData.name" />
    <a-input type="text" v-model:value="formData.password" />
    <a-input type="text" v-model:value="formData.age" />
    <template #footer>
      <div>
        <a-button @click="handleOk">确定</a-button>
        <a-button @click="handleClose">取消</a-button>
      </div>
    </template>
  </modal>
</template>

<script lang="ts">
  import modal from './common/modal.vue';
  import { defineComponent, provide, ref, reactive } from 'vue';

  export default defineComponent({
    name: 'App',
    components: {
      modal,
    },
    setup() {
      const msg = 'Hello Vue 3.0 + Vite';
      // 模态框
      let modalVisible = ref(false);
      const formData = reactive({
        name: '',
        password: '',
        age: '',
      });
      const openModal = () => {
        formData.name = '';
        formData.password = '';
        formData.age = '';
        modalVisible.value = true;
      };
      const handleClose = () => {
        modalVisible.value = false;
      };
      const handleOk = () => {
        console.log(formData);
        modalVisible.value = false;
      };

      let location = ref('大连');
      provide('location', location);
      return {
        msg,
        modalVisible,
        openModal,
        handleClose,
        handleOk,
        formData,
      };
    },
  });
</script>
