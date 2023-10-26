//  pc端路由
import path from 'path'

const resolve = (pagePath) => path.resolve(process.cwd(), `./${pagePath}`)

export const moRouter = [
    {
        path: '/m',
        name: 'mhome',
        component: resolve('pages/mo/home/index.vue'),
        meta: {
          name: '首页',
        },
      },
      {
        path: '/m/about',
        name: 'mabout',
        component: resolve('pages/mo/about/index.vue'),
        meta: {
          name: '关于我们',
        },
      },
      {
        path: '/m/contant',
        name: 'mcontant',
        component: resolve('pages/mo/contant/index.vue'),
        meta: {
          name: '联系我们',
        },
      },
      {
        path: '/m/products',
        name: 'mproducts',
        component: resolve('pages/mo/products/index.vue'),
        meta: {
          name: '产品页',
        },
      },
      {
        path: '/m/solution',
        name: 'msolution',
        component: resolve('pages/mo/solution/index.vue'),
        meta: {
          name: '解决方案页',
        },
      },
      {
        path: '/m/product/calio',
        name: 'mcalio',
        component: resolve('pages/mo/productList/calio/index.vue'),
        meta: {
          name: 'calio',
        },
      },
      {
        path: '/m/product/bello',
        name: 'mbello',
        component: resolve('pages/mo/productList/bello/index.vue'),
        meta: {
          name: 'bello',
        },
      },
      {
        path: '/m/product/cush',
        name: 'mcush',
        component: resolve('pages/mo/productList/cush/index.vue'),
        meta: {
          name: 'cush',
        },
      },
      {
        path: '/m/product/sole',
        name: 'msole',
        component: resolve('pages/mo/productList/sole/index.vue'),
        meta: {
          name: 'sole',
        },
      },
      {
        path: '/m/terms',
        name: 'mterms',
        component: resolve('pages/mo/terms/index.vue'),
        meta: {
          name: '条款页',
        },
      },
      {
        path: '/m/privacy',
        name: 'mprivacy',
        component: resolve('pages/mo/privacy/index.vue'),
        meta: {
          name: '隐私页',
        },
      },
]
