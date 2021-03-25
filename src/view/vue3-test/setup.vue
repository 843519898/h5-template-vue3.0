<template>
  <div>
    <test name='传入第一个参数'></test>
    
  </div>
</template>

<script>
import {  h, ref, reactive } from "vue";
import test from './components/test'
export default {
  components: {test},
  setup(props,context) {
    
    const state = reactive({
      name: "",
      value1: 0,
      value2: "a",
      show: true
    });
    console.log(props);
     // Attribute (非响应式对象)
    console.log(context.attrs)

    // 插槽 (非响应式对象)
    console.log(context.slots)

    // 触发事件 (方法)
    console.log(context.emit)
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    // Please note that we need to explicitly expose ref value here
    return {
      state,
    };
  },
};

</script>
<style lang=scss scoped>

</style>