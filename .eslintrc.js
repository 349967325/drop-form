module.exports = {
  root: true,
  // 环境，这里可以设置环来做区别判断
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  // 使用的扩展库
  extends: ['standard', 'standard-react', 'plugin:react/recommended'],
  // 解析器用于解析代码
  parser: 'babel-eslint',
  // 解析器配置
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  // 可以全局使用变量
  globals: {
    Babel: true,
    React: true,
    PATH_ENV: true
  },
  // 第三方插件
  plugins: [
    'react-hooks'
  ],
  // 规则配置
  rules: {
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn' // 检查 effect 的依赖
  }

}
