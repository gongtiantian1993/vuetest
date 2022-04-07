<template>
  <a-card title="watch">
    <p>
      Ask a yes/no question:
      <br />
      <a-input v-model:value="question" placeholder="请输入问题，末尾加上'?'" />
    </p>
    <p>{{ answer }}</p>
    <img :src="imgUrl" alt="" />
    <a-divider />
    <h2
      >watch第一个参数可以是单ref,计算函数：如() => x.value + y.value，数组,
      reactive对象某属性(单独reactive对象某一属性这样监听() =>
      obj.count),reactive对象(在所有嵌套的突变中都会触发回调)</h2
    >
    <a-input v-model:value="p1" />
    +
    <a-input v-model:value="p2" />=
    <span>{{ p1 * 1 + p2 * 1 }}</span>
    <a-divider />
    <a-input v-model:value="student.name" />
    <a-input v-model:value="student.age" />
    <a-input v-model:value="student.from" />
  </a-card>
</template>

<script setup>
  import { ref, reactive, watch } from 'vue';
  const question = ref('');
  const answer = ref('Questions usually contain a question mark. ;-)');
  const imgUrl = ref('');
  // watch works directly on a ref
  watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.indexOf('?') > -1) {
      answer.value = 'Thinking...';
      try {
        const res = await fetch('https://yesno.wtf/api');
        const resJson = await res.json();
        answer.value = resJson.answer;
        imgUrl.value = resJson.image;
      } catch (error) {
        answer.value = 'Error! Could not reach the API. ' + error;
      }
    }
  });
  const p1 = ref(0);
  const p2 = ref(0);
  watch([p1, p2], ([newVal1, newVal2]) => {
    console.log(`p1的新值是:${newVal1}`);
    console.log(`p2的新值是:${newVal2}`);
  });
  const student = reactive({
    name: 'zhangsan',
    age: 18,
    from: 'China',
  });
  // 只监听reactive某一属性
  watch(
    () => student.name,
    (newVal, oldVal) => {
      console.log(newVal);
    },
  );
  // 在所有嵌套的突变中都会触发回调
  //   watch(student, (newVal, oldVal) => {
  //     console.log(newVal);
  //   });
</script>

<style lang="less" scoped></style>
