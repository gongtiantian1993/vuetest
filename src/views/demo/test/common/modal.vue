<template>
  <div v-if="visible" class="mask">
    <div class="modal">
      <div class="modal-wrapper">
        <div class="modal-title">{{ title }} <span @click="closeModalFn">X</span></div>
        <div class="modal-body">
          <slot></slot>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      title: {
        type: String,
        default: '模态框',
      },
      visible: {
        type: Boolean,
        default: true,
      },
    },
    setup(props, context) {
      const closeModalFn = () => {
        context.emit('closeModal');
      };
      return {
        closeModalFn,
      };
    },
  });
</script>

<style scoped>
  .mask {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #39373759;
    display: flex;
    justify-content: center;
  }
  .modal-wrapper {
    width: 300px;
    height: 300px;
    background: #fff;
    margin-top: 100px;
  }
  .modal-title {
    text-align: left;
    padding: 5px 10px;
    border-bottom: 1px solid #ccc;
  }
  .modal-title span {
    float: right;
    cursor: pointer;
  }
  .modal-body {
    padding: 10px;
  }
  .footer {
    border-top: 1px solid #ccc;
    padding: 5px;
    position: relative;
    top: 118px;
  }
</style>
