module.exports = {
    root: true,
    extends: ['eslint:recommended', 'prettier'],
    env: {
        "node": true,
        "es6": true
    },
    parserOptions: {
        ecmaVersion: 2021
    },
    plugins: ['prettier'],
    rules: {
        'no-console': 'off',
    },
};
