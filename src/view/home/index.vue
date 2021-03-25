<template>
  <div>
    <span>状态管理测试</span>
    <van-button type="danger" @click="handleBtn">vuex按钮</van-button>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import { toRefs, ref, reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
// import { getUser } from '../../api/index'
// import { useRoute } from 'vue-router'
export default {
  components: {},
  setup() {
    // const state = reactive({
    //   name: "",
    // });
    const list = ref([]);
    const store = useStore();
    console.log(store);
    const name = computed(() => store.state.userName);
    const handleBtn = () => {
      store.commit("getUserName", "Vue");
    };

    onMounted(() => {});
    return {
      list,
      name,
      handleBtn,
      //...toRefs(state),
    };
  },
};
</script>
<style scoped>
</style>