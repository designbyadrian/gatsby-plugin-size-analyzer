const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;

exports.modifyWebpackConfig = ({ config, stage }, options) => {

  if (stage === 'build-javascript') {
    const root = config._config.context;
    const path = options.path || 'reports';
    const filename = 'size-analyzer.txt';

    console.log(`Generating size report in: ${root}/${path}/${filename}`);
    config.merge({
      plugins: [new WebpackBundleSizeAnalyzerPlugin(`${root}/${path}/${filename}`)]
    });
  }

  return config;
};
