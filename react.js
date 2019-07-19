module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-cws'],
  rules: {
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['warn'],
    'react/button-has-type': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': ['error', {
      allowChildren: true,
    }],
    'jsx-a11y/anchor-is-valid': ['error', {
      specialLink: ['to'],
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'import/no-unresolved': ['error', {
      commonjs: true,
      amd: true,
    }],
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-hooks',
  ],
};