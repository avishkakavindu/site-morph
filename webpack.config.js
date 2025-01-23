const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // Ensures minified output
  entry: './src/main.js', // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js', // Minified file
    library: 'SiteMorph', // Makes the script usable globally
    libraryTarget: 'umd', // Universal module definition
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    alias: {
      jquery: path.resolve(__dirname, 'node_modules/jquery'),
      lodash: path.resolve(__dirname, 'node_modules/lodash'),
      dot: path.resolve(__dirname, 'node_modules/dot'),
    },
  },
};
