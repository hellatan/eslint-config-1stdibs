module.exports = {
    plugins: ['eslint-plugin-mocha', 'eslint-plugin-jest'],
    env: {
        phantomjs: true,
        mocha: true,
        'jest/globals': true,
    },
    globals: {
        loadFixtures: false,
        appendLoadFixtures: false,
        setFixtures: false,
        sandbox: false,
        before: false,
        after: false,
    },
    rules: {
        'mocha/no-exclusive-tests': 'error',
        'jest/valid-expect': 'warn',
        'jest/no-identical-title': 'warn',
        'jest/no-focused-tests': 'error',
    },
};
