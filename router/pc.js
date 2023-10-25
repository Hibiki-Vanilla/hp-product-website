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
    path: '/contant',
    name: 'contant',
    component: resolve('pages/pc/contant/index.vue'),
    meta: {
      name: '联系我们',
    },
  },
  {
    path: '/products',
    name: 'products',
    component: resolve('pages/pc/products/index.vue'),
    meta: {
      name: '产品页',
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
