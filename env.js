module.exports = {
  dev: {
    NODE_ENV: 'devlopment',
    port: 9200,
    host: '0.0.0.0', // 可适应不同的主机名
    target: 'http://10.10.68.204:10010', // 要代理的后端服务地址
  },
  tes: {
    NODE_ENV: 'test',
    port: 9200,
    host: '0.0.0.0',
    target: 'http://10.10.68.206:10010',
  },
  pro: {
    NODE_ENV: 'production',
    port: 11807,
    host: '0.0.0.0',
    target: 'http://39.108.58.94:10010',
  },
}
