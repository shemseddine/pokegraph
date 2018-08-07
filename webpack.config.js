const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    hash: true,
    template: "./index.html",
    filename: "index.html"
});

module.exports = {
  entry: __dirname + "/index.js",
  output: {
      path: __dirname + "/dist",
      filename: "index_bindle.js"
  },
  module: {
    rules: [
        {
          test: /(\.jsx|\.js)$/,
          loader: "babel-loader",
          exclude: /(node_modules|bower_components)/,
          options: {
            cacheDirectory: true,
          }
        },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};
