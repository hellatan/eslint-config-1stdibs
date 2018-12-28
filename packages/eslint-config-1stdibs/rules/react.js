module.exports = {
    plugins: ["react"],
    settings: {
        react: {
            version: "16.5"
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "react/display-name": [
            1,
            {
                ignoreTranspilerName: false
            }
        ],
        "react/jsx-boolean-value": "warn",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-multi-comp": [
            2,
            {
                ignoreStateless: true
            }
        ],
        "react/no-unknown-property": "error",
        "react/prop-types": "warn",
        "react/react-in-jsx-scope": "error",
        "react/self-closing-comp": "error",
        "react/sort-comp": "warn",
        "react/prefer-es6-class": [1, "always"],
        "react/prefer-stateless-function": "warn",
        "react/jsx-no-target-blank": "warn"
    }
};
