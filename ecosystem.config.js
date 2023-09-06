// 测试环境 服务器上执行 pm2 start ecosystem.config.js --env test  (ecosystem.config.js可不要)
module.exports = {
  apps: [
    {
      name: 'gabriel',
      exec_mode: 'cluster',
      instances: '2', // max 0 或者指定数目 （表示启动的进程数，用于负载均衡）
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      watch: true,
      env_dev: {
        NODE_ENV: 'dev',
      },
      env_test: {
        NODE_ENV: 'tes',
      },
      env: {
        NODE_ENV: 'pro',
      },
    },
  ],
}
