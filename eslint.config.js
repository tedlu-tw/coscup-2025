// @ts-check
import { antfu } from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
  },
  {
    rules: {
      'antfu/if-newline': 'off',
      'curly': ['error', 'multi-line', 'consistent'],
      'node/prefer-global/buffer': ['error', 'always'],
      'node/prefer-global/process': ['error', 'always'],
      'style/arrow-parens': ['error', 'always'],
      'style/brace-style': ['error', '1tbs'],
      'style/no-multi-spaces': ['error', { ignoreEOLComments: true }],
      'style/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      'vue/max-attributes-per-line': ['error'],
      'vue/attributes-order': ['error', { alphabetical: true }],
    },
  },
  {
    // Ignore generated files
    ignores: [
      '.pnpm-store/', // Generated by CI workflow
    ],
  },
)
