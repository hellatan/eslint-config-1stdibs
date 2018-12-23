module.exports = {
    "plugins": [
        "import"
    ],
    "env": {
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".json",
                    ".ts",
                    ".tsx",
                ]
            }
        }
    },
    "rules": {
        "import/extensions": [
            1,
            "always",
            {
                "js": "never",
                "jsx": "never",
                "json": "never",
                "ts": "never",
                "tsx": "never",
            }
        ],
        "import/no-absolute-path": [
            1,
            {
                commonjs: true
            }
        ],
        "import/no-unresolved": [
            1,
            {
                commonjs: true
            }
        ]
    }
};
