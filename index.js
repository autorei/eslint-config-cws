module.exports = {
  extends: [ 'airbnb', 'prettier' ],
  rules: {
    'semi': 0,
    'max-len': ['error', { 'code': 100 }],
    'prfer-promise-reject-erroers': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['warn'],
    'no-return-assign': ['off']
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-hooks',
  ],
};