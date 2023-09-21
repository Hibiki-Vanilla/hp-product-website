import jsCookie from 'js-cookie'
export default ({ req, app, route }) => {
  // 路由守卫
  app.router.beforeEach((to, from, next) => {
    if (process.client) {
      const hasUjession = jsCookie.get('U-JSESSIONID')
      if (to.meta.name === '详情页' && !hasUjession) {
        const value = Math.random()
        // 30 分钟内有效
        jsCookie.set('U-JSESSIONID', value, { expires: new Date(new Date().getTime() + 30 * 60 * 1000) })
      }
    }
    next()
  })
  // app.router.afterEach(() => {})

  // app.nuxt.defaultTransition.beforeEnter = () => {
    
  // }

  // Optional: wait for locale before scrolling for a smoother transition
  // app.router.options.scrollBehavior = async (to, from, savedPosition) => {

  // }
}
