module.exports = {
  root: true,
  extends: ['universe/native'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'error',
    'react/jsx-uses-vars': 'error',
    // 'unused-imports/no-unused-imports': 'error',
    'no-nested-ternary': 'error',
    'import/prefer-default-export': 'error',
  },
};
