const { name } = require('./package.json');

const base = {
  name,
  container: '#app',
  activeRule: '/vue',
}

module.exports = {
  default: {
    ...base,
    entry: '//localhost:3001',
  }
}