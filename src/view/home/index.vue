<template>
  <div>
    <van-nav-bar
      title="状态管理测试"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <span>状态管理测试</span>
    <van-button type="danger" @click="handleBtn">getUserName方法</van-button>
    <van-button type="danger" @click="addNum">addNum方法</van-button>
    <h1>{{ name }}</h1>
    <h2>{{num}}</h2>
  </div>
</template>

<script>
import { toRefs, ref, reactive, onMounted, computed } from "vue";
import { useStore,mapState,mapMutations } from "vuex";
// import { getUser } from '../../api/index'
// import { useRoute } from 'vue-router'
export default {
  components: {},
  setup() {
    // const state = reactive({
    //   name: "",
    // });
    const store = useStore();
    const state = store.state;
    // const num = ref(0);
    const addNum = () => {
      // state
      // console.log(state.num);

      // mutations
      // store.commit("MUTaddNum",{num:1});
      // store.commit({type:"MUTaddNum",num:1});

      // actions
      store.dispatch("ACTaddnum",{num:10});
      // store.dispatch({type:"ACTaddnum",num:10});

      // getters
      // num.value= store.getters.GETaddnum;
    }
    const list = ref([]);
    const name = computed(() => store.state.userName);
    const num = computed(() => store.state.num);
    const handleBtn = () => {
      store.commit("getUserName", "Vue");
    };

    onMounted(() => {});
    return {
      list,
      name,
      handleBtn,
      state,
      addNum,
      num,
      //...toRefs(state),
    };
  },
};
</script>
<style scoped>
</style>