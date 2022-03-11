module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
    ],
    settings: {
        "import/resolver": { node: { extensions: [".js", ".jsx", ".ts", ".tsx"] } },
        "import/no-unresolved": 0, // Turn off "Unable to resolve path to module ..." error
        "import/extensions": 0, // Turn off "Missing file extension for ..." error
    },
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        indent: "off",
        "@typescript-eslint/indent": ["error", 4],
        "no-plusplus": ["off", { allowForLoopAfterthoughts: true }],
        "object-curly-newline": ["error", { multiline: true }],
        "linebreak-style": ["error", "windows"],
        "import/extensions": ["off"],
        "import/prefer-default-export": ["off"],
        "no-param-reassign": ["error", { props: false }],
        "lines-between-class-members": ["off"],

        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        // "@typescript-eslint/no-non-null-assertion": "warn",
        "max-len": "off",
        "no-console": "warn",

        // react config
        "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        "react/jsx-indent": ["off"],
        "react/react-in-jsx-scope": ["off"],
        "import/no-extraneous-dependencies": ["error", { packageDir: "./" }],
        "import/no-relative-packages": ["off"],
    },
};
