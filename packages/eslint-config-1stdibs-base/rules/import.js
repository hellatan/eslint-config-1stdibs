module.exports = {
    plugins: ["import"],
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
            }
        }
    },
    rules: {
        "import/extensions": [
            "warn",
            "always",
            {
                js: "never",
                jsx: "never",
                json: "never",
                ts: "never",
                tsx: "never"
            }
        ],
        "import/no-absolute-path": [
            "warn",
            {
                commonjs: true
            }
        ],
        "import/no-unresolved": [
            "warn",
            {
                commonjs: true
            }
        ]
    }
};
