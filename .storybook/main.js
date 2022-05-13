const path = require('path')

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  framework: '@storybook/react',
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // 절대 경로 추가
      components: path.resolve(__dirname, '../components'),
      styles: path.resolve(__dirname, '../styles'),
      pages: path.resolve(__dirname, '../pages'),
    }
    return config
  },
}
