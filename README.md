# gatsby-plugin-size-analyzer

Extension of [webpack-bundle-size-analyzer](https://github.com/robertknight/webpack-bundle-size-analyzer) by [Robert Knight](https://github.com/robertknight) for Gatsby

## Installation

`yarn add gatsby-plugin-size-analyzer`

## How to use

1. Include the plugin in your `gatsby-config.js` file.
2. Create a folder in your project root, name it "reports".
3. Build your gatsby project to find "size-analyzer.txt" inside the reports folder.

```javascript
// in gatsby-config.js
plugins: [
  `gatsby-plugin-size-analyzer`
];
```

## Options

Decide the name and location of your reports folder like so:

```javascript
// in gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-size-analyzer`,
    options: {
      path: ['myreports/gatsby']
    },
  },
];
```

⚠️ The folder named "gatsby" needs to exist before you build your project!
