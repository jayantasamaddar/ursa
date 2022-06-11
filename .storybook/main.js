// module.exports = {
//   stories: [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)",
//     "../src/ursa-*/src/**/*.story.@(js|jsx|ts|tsx)"
//   ],
//   addons: [
//     'storybook-addon-turbo-build',
//     '@storybook/addon-a11y',
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions"
//   ],
//   "framework": "@storybook/react"
// }

/* eslint-disable no-param-reassign */
const path = require('path');
const { argv } = require('yargs');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

const storiesPath = !argv._[0]
  ? path.resolve(__dirname, '../src/**/*.story.@(ts|tsx)').replace(/\\/g, '/')
  : path
      .resolve(
        __dirname,
        `../src/ursa-${argv._[0].replace('@ursa/', '')}/**/*.story.@(js|jsx|ts|tsx)`
      )
      .replace(/\\/g, '/');

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)", storiesPath],
  addons: [
    'storybook-addon-turbo-build',
    '@storybook/addon-a11y',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
          configFile: path.join(__dirname, '../tsconfig.json'),
        }),
      ],
    };

    // Turn off docgen plugin as it breaks bundle with displayName
    config.plugins.pop();

    return config;
  },
}
