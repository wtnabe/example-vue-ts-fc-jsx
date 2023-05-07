module.exports = {
  opts: {
    recurse: true
  },
  source: {
    include: ['./src/'],
    includePattern: '.+\\.(js|jsx|ts|tsx|vue)$'
  },
  plugins: [
    'jsdoc-vue3js',
    'node_modules/jsdoc-babel'
  ],
  babel: {
    babelrc: false,
    configFile: false,
    extensions: ['js', 'jsx', 'ts', 'tsx'],
    presets: [
      '@babel/preset-typescript'
    ],
    plugins: [
      '@babel/plugin-syntax-jsx'
    ]
  },
  typescript: {
    moduleRoot: 'src'
  }
}
