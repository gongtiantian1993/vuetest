<template>
  <a-card title="自定义指令">
    <h2>自定义指令主要用于重用涉及对普通元素进行低级 DOM 访问的逻辑。 指令名必须v开头</h2>
    <a-divider />
    <input v-focus />
    <a-divider />
    <p v-height-light="{ color: 'red', fontSize: '16px' }">这是一段文字，指令为其加上了样式</p>
  </a-card>
</template>

<script setup>
  const vFocus = {
    // mounted: (el) => el.focus(),
    // el: 指令绑定的元素。这可用于直接操作 DOM。

    // binding: 包含以下属性的对象:
    // value：传递给指令的值。例如在 v-my-directive="1 + 1" 中，该值为 2。
    // oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否已更改都可用。
    // arg：传递给指令的参数，如果有的话。例如在 v-my-directive:foo 中，arg 将是“foo”。
    // 修饰符：一个包含修饰符的对象，如果有的话。例如在 v-my-directive.foo.bar 中，修饰符对象将是 { foo: true, bar: true }。
    // instance：使用指令的组件的实例。
    // dir：指令定义对象。

    // vnode：表示绑定元素的底层 VNode。

    // prevNode：表示上一次渲染中绑定元素的 VNode。仅在 beforeUpdate 和 updated 挂钩中可用。
    created(el, binding, vnode, prevVnode) {
      // see below for details on arguments
    },
    // called right before the element is inserted into the DOM.
    beforeMount() {},
    // called when the bound element's parent component
    // and all its children are mounted.
    mounted(el) {
      el.focus();
    },
    // called before the parent component is updated
    beforeUpdate() {},
    // called after the parent component and
    // all of its children have updated
    updated() {},
    // called before the parent component is unmounted
    beforeUnmount() {},
    // called when the parent component is unmounted
    unmounted() {},
  };
  const vHeightLight = {
    created(el, binding, vnode, prevVnode) {
      el.style.color = binding.value.color;
      el.style.fontSize = binding.value.fontSize;
      el.style.fontWeight = 'bold';
      el.style.textShadow = '10px 5px 1px #ccc';
      console.log(binding);
      console.log(binding.value);
    },
  };
  // const vStyle = {
  //   created(el, binding, vnode, prevVnode) {
  //     el.style.color = binding.value;
  //     el.style.fontWeight = 'bold';
  //     el.style.textShadow = '10px 5px 1px #ccc';
  //     console.log(binding);
  //     console.log(binding.value);
  //   },
  // }
</script>

<style></style>
