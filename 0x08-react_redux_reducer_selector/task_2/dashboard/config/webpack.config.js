const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),  // Corrected path
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),  // Corrected path
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Handles JS and JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Presets needed for JSX
          },
        },
      },
      {
        test: /\.css$/,  // CSS loader
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,  // Image loader
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../dist/index.html'),  // Corrected path
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, '../dist'),  // Corrected path
    hot: true,
  },
  devtool: 'inline-source-map',
};