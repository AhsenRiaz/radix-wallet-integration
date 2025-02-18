module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            classes: true,
            legacyDecorators: true,
        },
        requireConfigFile: false,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:lodash/recommended',
        'plugin:promise/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'import', 'lodash', 'promise', 'prettier'],
    rules: {
        'import/named': 'off',
        indent: 'off',
        'no-var': 'error',
        'no-alert': 'error',
        'no-undef': 'error',
        'no-console': 'error',
        'no-debugger': 'error',
        '@typescript-eslint/indent': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'space-before-blocks': 'error',
        'arrow-spacing': 'error',
        'key-spacing': [
            'error',
            {
                afterColon: true,
                mode: 'minimum',
            },
        ],
        'brace-style': ['error', '1tbs'],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'comma-style': [
            'error',
            'last',
            {
                exceptions: {
                    VariableDeclaration: true,
                },
            },
        ],
        'computed-property-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'prefer-const': 'error',
        'promise/no-nesting': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'off',
        'import/no-named-as-default': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'lodash/import-scope': 'off',
        'lodash/preferred-alias': 'off',
        'lodash/prop-shorthand': 'off',
        'lodash/prefer-lodash-method': 'off',
        'lodash/chain-style': ['off', 'as-needed'],
        'lodash/chaining': ['off', 'as-needed'],
        'lodash/prefer-thru': 'off',
        'max-len': [
            'error',
            {
                code: 120,
                ignoreStrings: true,
                ignoreComments: true,
                ignoreTemplateLiterals: true,
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
        },
    },
    ignorePatterns: ['dist/', 'node_modules/'], // Exclude dist and node_modules
}
