module.exports = {
    extends: ['eslint-config-1stdibs-base', './rules/react'].map(require.resolve),
    overrides: [
        {
            files: ['*.{js,jsx}'],
            extends: ['./rules/flowtype'].map(require.resolve),
        },
    ],
};
