import { pcRouter } from './pc'
import { moRouter } from './mo'

// 定义路由
export const $routes = [
  // pc路由
  ...pcRouter,
  //  移动端路由
  ...moRouter,
]
const extendRoutes = (routes) => {
  routes.length = 0
  routes.push(...$routes)
}

export default {
  base: '/',
  middleware: ['auth'],
  extendRoutes,
}
