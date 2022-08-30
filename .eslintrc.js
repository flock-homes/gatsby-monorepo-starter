require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./packages/*/tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "import", "react"],
  extends: ["airbnb-typescript", "prettier"],
}
