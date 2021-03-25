/**
 * 基础路由
 * @type { *[] }
 * tx表示层级，页面跳转动画
 */
export const constantRouterMap = [{
        path: '/',
        meta: {
            tx: 1,
        },
        component: () => import('../view/index.vue')
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            tx: 2,
        },
        component: () => import('../view/home/index')
    },
    {
        path: '/setup',
        name: 'Setup',
        meta: {
            tx: 2,
        },
        component: () => import('../view/vue3-test/setup.vue')
    },
    {
        path: '/live',
        name: 'Live',
        meta: {
            tx: 2,
        },
        component: () => import('../view/vue3-test/live.vue')
    }
]