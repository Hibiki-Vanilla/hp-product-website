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
]