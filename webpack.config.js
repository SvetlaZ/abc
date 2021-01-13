const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          'file-loader?name=assets/[ext]/[name].[ext]',
        ],
      },
      {
        test: /\.(ttf)$/,
        use: [
          'file-loader?name=fonts/[name].[ext]',
        ],
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
