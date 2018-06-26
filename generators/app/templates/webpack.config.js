const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const uglifyJSPlugin = new UglifyJSPlugin();

const extractPlugin = new ExtractTextPlugin({
  filename: 'bundle.css'
});

module.exports = {
  mode: 'development',
  entry: './main.ts',
  context: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js',
    publicPath: '/'
  },
  devServer: {
    color: true,
    watch: true,
    hot: true
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), "node_modules"],
    extensions: ['.ts', '.js', '.json', '.scss', '.css']
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      use: ['ng-annotate-loader', 'ts-loader']
    }, {
      test: /\.scss$/,
      use: extractPlugin.extract({
        use: [
          {
            loader: "css-loader", options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader", options: {
              sourceMap: true
            }
          }
        ]
      })
    }, {
      test: /\.css$/,
      use: extractPlugin.extract({
        use: ['css-loader']
      })
    }]
  },
  plugins: [
    extractPlugin,
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/**/*.html'),
        to: path.resolve(__dirname, 'dist')
      },
    ], {
      debug: true,
      ignore: ['*.js', '*.css', '*.ts', '*.scss']
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    uglifyJSPlugin,
    new CleanWebpackPlugin(['dist'])
  ]
};