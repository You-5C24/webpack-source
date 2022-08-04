const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TestPlugin = require("./plugins/test-plugin.js");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // loader: "./loaders/test-loader.js",
        // use: ["./loaders/sync-loader.js", "./loaders/async-loader.js"],
        // loader: "./loaders/raw-loader.js",
        // use: [
        //   "./loaders/sync-loader.js",
        //   "./loaders/pitch2-loader.js",
        //   "./loaders/pitch-loader.js",
        // ],
        loader: "./loaders/clean-log-loader.js",
      },
      {
        test: /\.js$/,
        loader: "./loaders/banner-loader",
        options: {
          author: "5C24",
        },
      },
      {
        test: /\.js$/,
        loader: "./loaders/babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new TestPlugin(),
  ],
  mode: "development",
};
