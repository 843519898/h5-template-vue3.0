<template>
  <div>

  </div>
</template>

<script>
import {   reactive ,onBeforeMount,onMounted,onBeforeUpdate,
onUpdated ,onBeforeUnmount,onUnmounted,onErrorCaptured,onRenderTracked,onRenderTriggered
} from "vue";

export default {
  components: {},
  setup() {
    
    const state = reactive({

    });
    // beforeCreate(() => {
    //     console.log("beforeCreate");
    // })
    // created(() => {
    //     console.log("created");
    // })
    onBeforeMount(() => {
        console.log("onBeforeMount");
    })
    onMounted(() => {
        console.log("onMounted");
    })
    onBeforeUpdate(() => {
        console.log("onBeforeUpdate");
    })
    onUpdated(() => {
        console.log("onUpdated");
    })
    onBeforeUnmount(() => {
        console.log("onBeforeUnmount");
    })
    onUnmounted(() => {
        console.log("onUnmounted");
    })
    onErrorCaptured(() => {
        console.log("onErrorCaptured");
    })
    onRenderTracked(() => {
        console.log("onRenderTracked");
    })
    onRenderTriggered(() => {
        console.log("onRenderTriggered");
    })
    return {
      state,
    };
  },
};

</script>
<style lang=scss scoped>

</style>