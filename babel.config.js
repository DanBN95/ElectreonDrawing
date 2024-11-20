module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-paper/babel',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@lib': './src/lib',
        },
      },
    ],
  ],
};

