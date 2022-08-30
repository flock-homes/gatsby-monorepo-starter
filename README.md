# gatsby-monorepo-starter

A simple monorepo starter with a single web app and a component library. 

This monorepo starter is built with the following tools and technologies:
- [yarn 2 with PnP / ZeroInstall](https://yarnpkg.com/features/zero-installs) for dependency management
- [GatsbyJS](https://www.gatsbyjs.com/products/cloud/) as the web app framework
- [Typescript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/) for component library visualization
- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for code quality
- [Lefthook](https://github.com/evilmartians/lefthook) for pre-commit hooks

## Creating a new package
1. Create a new folder in the `/packages` directory with your package name. 
2. Initialize a new JS package there. If you're creating a new gatsby web app, create it using the `gatsby new` command. 
3. Add the following files to your new package

**tsconfig.json**
```
{
  "extends": "./../../tsconfig.base.json",
  "include": [
    "src/**/*",
  ],
  "compilerOptions": {
    "rootDir": "."
  },
}
```

**eslintrc.js**
```
module.exports = {
    "extends": [
        "../../.eslintrc"
    ],
    "parserOptions": {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
    },
}
```
**prettier.config.js**
```
module.exports = require('../../prettier.config')
```

## Importing one package into another
From the package that is importing another, run the following
```
yarn add @packages/your-package
```

Make sure that the entrypoint is set in the package.json of the package that is being imported. 

## VSCode configuration
If you are seeing issues in VSCode with linting or typescript, open up a `.tsx` file and open the command palette (Cmd + P on Mac). Search for `Typescript: Select Typescript Version` and set the version to the workspace version.