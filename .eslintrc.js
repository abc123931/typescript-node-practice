module.exports = {
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended"
    ],
    env: {
      es6: true,
      browser: true,
      node: true,
      jest: true
    },
    plugins: ["@typescript-eslint", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module",
      project: "tsconfig.json",
      tsconfigRootDir: ".",
      extraFileExtensions: [".json"]
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ]
    }
  };
