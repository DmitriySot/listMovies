module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["react-app", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    NodeJS: true,
    __PATH_PREFIX__: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
};
