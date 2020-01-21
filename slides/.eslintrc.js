module.exports = {
  extends: '@brandonramsey/eslint-config/react',
  rules: {
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    indent: ['error', 2, { ignoredNodes: ['JSXElement', 'JSXAttribute', 'JSXSpreadAttribute']}],
    'no-void': ['off'],
    'react/jsx-first-prop-new-line': ['off'],
  },
};
