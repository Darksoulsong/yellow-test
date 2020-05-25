const aliases = require('./alias-config');
const withCSS = require('@zeit/next-css');

const webpack = require('webpack');

module.exports = withCSS({
  webpack: (config, { dev }) => {
    const { alias } = config.resolve;
    config.resolve.alias = {
      ...alias,
      ...aliases,
    };

    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/.next/', '/out/'],
        enforce: 'pre',
        options: {
          emitWarning: true,
          fix: true,
        },
      });
    }
    return config;
  },
});
