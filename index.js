module.exports = {
  extends: ['eslint-config-airbnb-base', 'eslint-config-prettier' ],
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'max-len': ['error', {
      'code': 100,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
    }],
  },
};
