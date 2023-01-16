const path = require('path');
const { argv } = require('yargs');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

const storiesPath = !argv._[0]
  ? path
      .resolve(__dirname, '../../src/**/*.@(story|stories).@(js|jsx|ts|tsx)')
      .replace(/\\/g, '/')
  : path
      .resolve(
        __dirname,
        `../../src/ursa-${argv._[0].replace(
          '@ursa/',
          ''
        )}/**/*.@(story|stories).@(js|jsx|ts|tsx)`
      )
      .replace(/\\/g, '/');

module.exports = {
  features: { emotionAlias: false },
  // typescript: {
  //   check: true,
  //   reactDocgen: "react-docgen-typescript",
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) => {
  //       if (prop.parent) {
  //         return !prop.parent.fileName.includes("node_modules");
  //       }
  //       return true;
  //     },
  //   },
  // },
  core: { builder: 'webpack5' },
  // '../../examples/**/*.stories.@(js|jsx|ts|tsx)'
  stories: [storiesPath],
  addons: [
    'storybook-addon-turbo-build',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@react-theming/storybook-addon'
  ],
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
          configFile: path.join(__dirname, '../../tsconfig.json')
        })
      ]
    };

    // Turn off docgen plugin as it breaks bundle with displayName
    config.plugins.pop();

    return config;
  }
};
