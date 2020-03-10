module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  env: {
      "browser": true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  settings: {
      'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
            "alwaysTryTypes": true
        },
    },
  },
  rules: {
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'import/extensions': ['error', 'ignorePackages', {
          'js': 'never',
          'jsx': 'never',
          'ts': 'never',
          'tsx': 'never',
      }],
      "no-underscore-dangle": [
          "error",
          {
              "allow": ["_id"]
          }
      ],
      "prettier/prettier": [
          "error",
          {
              "singleQuote": true,
              "printWidth": 80,
              "tabWidth": 4,
              "useTabs": false
          },
      ],
  },
};