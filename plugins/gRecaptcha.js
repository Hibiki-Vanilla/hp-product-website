export default ({ req, app, store }) => {
  const { $axios } = app
  if (process.client) {
    const isMobile = (ua) => {
      return !!ua.match(/AppleWebKit.*Mobile.*/)
    }
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
    const body = document.body
    const htmlStyle = document.getElementsByTagName('html')[0].style
    if (!isMobile(userAgent)) {
      // htmlStyle.minWidth = '1280px'
      // htmlStyle.overflowX = 'auto'
      // body.style.minWidth = '1280px'
      // body.style.overflowX = 'visible'
    }
    // body下创建google校验挂在节点
    const googleRecpath = document.createElement('div')
    googleRecpath.id = 'hp-gRecaptcha'
    body.appendChild(googleRecpath)
    setTimeout(() => {
      const gooleGRecaptcha = window?.grecaptcha?.render('u-gRecaptcha', {
        // sitekey: '6LeteCYaAAAAAKli6Y6b-Fi2GGHQBHgzi-rOVItQ',
        sitekey: '6LfWpvghAAAAAPYPuiAxsai2OieCy6BMlX1RXEp4',
        callback: (token) => {
          store.dispatch('gooleCallBack', { token, $axios })
        },
        size: 'invisible',
      })
      store.commit('SET_GOOLE_RECAPT', gooleGRecaptcha)
    }, 800)
  }
}
