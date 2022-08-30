module.exports = {
  extends: ["../../.eslintrc"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.stories.*", "**/.storybook/**/*.*"],
        peerDependencies: true,
      },
    ],
  },
}
