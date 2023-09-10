//  pc端路由
import path from 'path'

const resolve = (pagePath) => path.resolve(process.cwd(), `./${pagePath}`)



export const pcRouter = [
    {
        path: '/',
        name: 'home',
        component: resolve('pages/pc/home/index.vue'),
        meta: {
          name: '首页',
        },
      },
      {
        path: '/about',
        name: 'about',
        component: resolve('pages/pc/about/index.vue'),
        meta: {
          name: '关于我们',
        },
      },
      {
        path: '/solution',
        name: 'solution',
        component: resolve('pages/pc/solution/index.vue'),
        meta: {
          name: '解决方案页',
        },
      },
      {
        path: '/product/calio',
        name: 'calio',
        component: resolve('pages/pc/productList/calio/index.vue'),
        meta: {
          name: 'calio',
        },
      },
]