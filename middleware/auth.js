// 路由中间件

export default function ({ req, app, store, route, params, error, redirect }) {
  // 判断是否是移动端
  const isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }
  // 用户设备状态
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
  store.commit('SET_IS_PC', !isMobile(userAgent))

  /* eslint-disable */
  if (isMobile(userAgent) && route.path.indexOf('/m') === -1 ) {
    return redirect({
      path: `/m${route.path}`,
      query: route.query,
    })
  }

  if (isMobile(userAgent) && route.path.indexOf('/m') === -1 ) {
    const str = route.path.substring(3, route.path.length)
    return redirect({
      path: `/m${str}`,
      query: route.query,
    })
  }

  if (!isMobile(userAgent) && route.path.indexOf('/m') > -1 ) {
    const str = route.path.substring(2, route.path.length)
    return redirect({
      path: `${str ? str : '/'}`,
      query: route.query,
    })
  }

  if (!isMobile(userAgent) && route.path.indexOf('/m') > -1 ) {
    const str = route.path.substring(5, route.path.length)
    return redirect({
      path: `${str}`,
      query: route.query,
    })
  }
}
