const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const extractText = new ExtractTextWebpackPlugin({
  filename: 'bundle.css'
});

module.exports = {
  config: {
    entry: {
      bundle: './main.ts',
      vendor: './vendor.ts'
    },
    context: path.resolve(__dirname, 'src'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
      publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.ts', '.js', '.json', '.scss', '.css']
    },
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "initial",
            name: "vendor",
            enforce: true
          }
        }
      }
    },
    module: {
      rules: [{
        test: /\.ts(x?)$/,
        use: ['ng-annotate-loader', 'babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: extractText.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        use: ['file-loader']
      }]
    }
  },
  plugins: [
    extractText,
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunks: ['bundle', 'vendor']
    })
  ]
};