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
      {
        path: '/product/bello',
        name: 'bello',
        component: resolve('pages/pc/productList/bello/index.vue'),
        meta: {
          name: 'bello',
        },
      },
      {
        path: '/product/cush',
        name: 'cush',
        component: resolve('pages/pc/productList/cush/index.vue'),
        meta: {
          name: 'cush',
        },
      },
      {
        path: '/product/sole',
        name: 'sole',
        component: resolve('pages/pc/productList/sole/index.vue'),
        meta: {
          name: 'sole',
        },
      },
      {
        path: '/terms',
        name: 'terms',
        component: resolve('pages/pc/terms/index.vue'),
        meta: {
          name: '条款页',
        },
      },
      {
        path: '/privacy',
        name: 'privacy',
        component: resolve('pages/pc/privacy/index.vue'),
        meta: {
          name: '隐私页',
        },
      },
]