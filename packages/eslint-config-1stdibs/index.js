module.exports = {
    env: {
        commonjs: true,
        browser: true,
    },
    extends: [
        './rules/bestPractices',
        './rules/errors',
        './rules/es6',
        './rules/import',
        './rules/node',
        './rules/strict',
        './rules/style',
        './rules/variables',
        './rules/flowtype',
        './rules/react',
        './rules/tests',
    ].map(require.resolve),
    rules: {},
};
