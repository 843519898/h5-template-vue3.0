<template>
  <div>
      {{props.name}}
      <span>解构 prop，可以通过使用 setup 函数中的 toRefs </span>
  </div>
</template>

<script>
import { toRefs, reactive, onMounted, getCurrentInstance, ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
export default {
  props: {
    name: String
  },
  setup(props,context) {
    
    const state = reactive({
      name: "",
      value1: 0,
      value2: "a",
      show: true
    });
    console.log(props.name);

    

    return {
      state,
      props
    };
  },
};

</script>
<style lang=scss scoped>

</style>