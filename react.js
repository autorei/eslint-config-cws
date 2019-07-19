module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-cws'],
  rules: {
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['warn'],
    'react/button-has-type': 0,
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-hooks',
  ],
};