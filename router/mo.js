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
        path: '/m/solution',
        name: 'msolution',
        component: resolve('pages/mo/solution/index.vue'),
        meta: {
          name: '解决方案页',
        },
      },
]