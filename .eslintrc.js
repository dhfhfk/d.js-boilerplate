module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    ignorePatterns: ["dist/"],
    parser: "@typescript-eslint/parser",
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    plugins: ["@typescript-eslint"],
    rules: {
        indent: ["warn", 4, { SwitchCase: 1 }],
        "linebreak-style": ["warn", "unix"],
        quotes: ["warn", "double"],
        semi: ["warn", "always"],
        "no-unused-vars": "warn",
    },
};
