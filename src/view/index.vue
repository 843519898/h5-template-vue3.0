<template>
  <div>
    <div class="page-content">
      <van-dropdown-menu>
        <van-dropdown-item v-model="state.value1" :options="option1" />
        <van-dropdown-item v-model="state.value2" :options="option2" />
      </van-dropdown-menu>
      <!--   <van-button type="primary" @click="goPage">动画</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button> -->
      <van-cell title="状态管理" is-link to="home" />
      <van-cell title="setup函数" is-link to="setup" />
      <van-cell title="生命周期" is-link to="live" />
      <van-cell title="路由跳转" is-link to="home" />
      <van-cell title="路由跳转" is-link to="home" />
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { toRefs, reactive, onMounted, getCurrentInstance, ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
export default {
  components: {},
  setup() {
    // onBeforeRouteUpdate((to) => {
    //   console.log(to, "=====");
    // });
    const active = ref("home");
    let { ctx, proxy } = getCurrentInstance();
    const state = reactive({
      name: "",
      value1: 0,
      value2: "a",
      show: true,
    });
    const option1 = [
      { text: "全部商品", value: 0 },
      { text: "新款商品", value: 1 },
      { text: "活动商品", value: 2 },
    ];
    const option2 = [
      { text: "默认排序", value: "a" },
      { text: "好评排序", value: "b" },
      { text: "销量排序", value: "c" },
    ];
    //const store = useStore()
    //state.name = store.state.Name

    onMounted(() => {
      console.log(ctx);
      ctx.$toast("提示文案");
    });

    const goPage = () => {
      console.log(ctx);
      state.show = !state.show;
      //ctx.$router.push({ name: "Home" });
    };

    return {
      state,
      option1,
      option2,
      goPage,
      ...getArticleAllFn(proxy),
      active,
    };
  },
};
//功能模块方法提取出setup中   体现VUE3的灵魂
function getArticleAllFn(proxy) {
  let needData = ref("后端需要的参数");
  async function getArticleAll() {
    try {
      //你封装的接口
      //const data = await ctx.$api.article.getArticleAll(needData);//ctx只能在开发阶段正常使用
      const data = await proxy.$api.article.getArticleAll(needData);
    } catch (error) {
      console.log(error);
    }
  }

  return { getArticleAll };
}
</script>
<style lang=scss scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page-content {
  width: 100%;
  height: 100vh;
}
</style>