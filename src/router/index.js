//history模式
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import { constantRouterMap } from './router.js'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  // 指定路由的模式,此处使用的是History模式
  history: createWebHistory(process.env.BASE_URL),
  // 路由地址
  routes: constantRouterMap
  
})

router.beforeEach((guard) => {
	//console.log(guard);
});


export default router;