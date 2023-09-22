module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'prettier'],
  rules: {
    'no-var': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 0,
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
  },
};
