module.exports = {
  extends: ['eslint-config-airbnb-base', 'eslint-config-prettier' ],
  rules: {
    'semi': 0,
    'max-len': ['error', {
      'code': 100,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
    }],
  },
};