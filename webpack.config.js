const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // Ensures minified output
  entry: './src/main.js', // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js', // Output file
    library: 'MyLibrary', // Makes the script usable globally
    libraryTarget: 'umd', // Universal module definition
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
