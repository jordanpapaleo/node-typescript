module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current'
      }
    }],
    '@babel/typescript'
  ],
  ignore: ['**/*.test.ts'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          common: ([, path]) => `./src/common${path}`
        }
      },
      'resolve'
    ]
  ]
}
