module.exports = {
  target: 'serverless',
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

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
};
