<template>
  <div class="page-index">
    <!-- <transition name="Skleft">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition> -->
    <router-view v-slot="{ Component }">
      <transition :name="state.SkipSwitchName" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { reactive, watch, ref, onMounted, getCurrentInstance } from "vue";

export default {
  name: "App",
  setup() {
    onBeforeRouteUpdate((to) => {
      alert("fsf");
      console.log(to, "=====");
    });
    let { proxy } = getCurrentInstance();
    const state = reactive({
      SkipSwitchName: "",
    });
    const router = useRouter();

    console.log(router);
    router.beforeEach((to, from, next) => {
      if (from.path === "/") {
        state.SkipSwitchName = "Skleft";
      } else {
        if (to.meta.tx > from.meta.tx) {
          state.SkipSwitchName = "Skleft";
        } else {
          state.SkipSwitchName = "Skright";
        }
      }
      //     //页面跳转初始化滚动位置
      //     //this.$utils.scrollToTop();
      next();
    });
    
    return {
      state,
    };
  },
};
</script>

<style lang="scss">
input,
textarea {
  -webkit-user-select: auto; /*webkit浏览器*/
  margin: 0;
  padding: 0;
  outline: none;
}

.Skright-enter-active,
.Skright-leave-active,
.Skleft-enter-active,
.Skleft-leave-active {
  transition: all 300ms;
}
.Skleft-enter-from{
  transform: translate3d(-100%, 0, 0);
}
.Skleft-leave-to {
  transform: translate3d(100%, 0, 0);
}
.Skright-enter-from{
  transform: translate3d(100%, 0, 0);
}
.Skright-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.page-index{
  width: 100%;
  height: 100vh;
  background: rgb(243, 240, 240);
}
</style>
