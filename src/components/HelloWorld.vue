<template>
  <div class="hello">
    <h1>{{ title.name }}</h1>
    <h2>{{user}}</h2>
    <button @click="updateUser">修改值</button>
  </div>
</template>

<script lang="ts">
import { reactive, ref, onMounted } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const title = reactive({
      name: "欢迎学习Vue3.0",
    });
    const user = ref('我在家里啊')
    user.value = '李璐玮'
    const updateUser = () => {
      user.value = '伍思凯'
      title.name = 'haode'
    }
    onMounted(() => {
      console.log('onMounted函数触发');
    })

    return { title,user,updateUser };
  },
};
</script>

<style scoped>
</style>
