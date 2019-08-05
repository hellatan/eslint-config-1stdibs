module.exports = {
    extends: [
        './rules/bestPractices',
        './rules/errors',
        './rules/es6',
        './rules/import',
        './rules/node',
        './rules/strict',
        './rules/style',
        './rules/tests',
        './rules/variables',
        'eslint-config-prettier',
    ].map(require.resolve),
    plugins: ['prettier'],
    env: {
        commonjs: true,
        browser: true,
    },
    rules: {
        'prettier/prettier': 'error',
    },
};
