var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './main.js',
  // target: 'node',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js',
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     ON_TEST: process.env.NODE_ENV === 'test'
  //   })
  // ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "sass-loader" // compiles Less to CSS
      }]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [{
            loader: "url-loader?limit=100000" // creates style nodes from JS strings
        }]
      },
      {
        test: /\.html$/,
        use: [{
            loader: "html-loader" // creates style nodes from JS strings
        }]
      }
  ]
  }
};
