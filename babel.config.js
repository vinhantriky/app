module.exports = {
  presets: [['module:@react-native/babel-preset'], '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          '#': './src',
        },
      },
    ],
  ],
};
