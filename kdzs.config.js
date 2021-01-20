// 判断 env
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  // 入口文件
  entry: isDev ? 'src/index.ts' : 'src/index.ts',
  // 公共资源文件，会拷贝到打包之后的文件夹
  assetsPath: 'public',
  // 打包生成的路径的根路径
  publicPath: './',
  build: {
    // 打包类型，可选值 lib | app
    type: 'app',
    // 是否生成 source map
    sourceMap: true,
    // 是否自动注入 polyfill， 默认 true
    autoInjectPolyfill: true
  },
  compile: {
    // react | vue3 | none，默认检测项目中 package.json 中 dependencies 中的字段
    jsxType: 'react'
  },
  serve: {
    // 发开服务器端口
    port: 9030,
    host: '0.0.0.0'
  },
  // 动态添加环境，没有以 `KDZS_` 开头的限制
  // 代码中访问 `__TEST__ && console.log('...')`
  customEnvs() {
    return {
      __TEST__: true,
      __NUMBER__: 12345,
      __TEXT__: 'text',
      // 重载内置 'process.env.BUILD_INFO' 变量
      'process.env.BUILD_INFO': `Build timestamp: ${new Date().toISOString()}`
    }
  },
  // webpack 配置
  webpack: {}
}
