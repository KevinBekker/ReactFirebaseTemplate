module.exports = {
    parser: 'babel-eslint',
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'no-console': 0,
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'linebreak-style': 0,
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
        'react/prop-types': 0,
        'no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
            },
        ],
    },
};
