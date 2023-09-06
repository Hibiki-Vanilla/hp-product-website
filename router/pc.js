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
]