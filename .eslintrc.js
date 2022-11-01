module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint", "react-hooks"],
  env: {
    browser: true,
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/ban-types": 1,
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": 0,
    "react/display-name": 0,
  },
};
