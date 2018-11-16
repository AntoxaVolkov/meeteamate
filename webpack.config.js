const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", path.resolve(__dirname, "src", "index.jsx")],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      components: path.resolve(__dirname, "src", "components"),
      containers: path.resolve(__dirname, "src", "containers"),
      actions: path.resolve(__dirname, "src", "actions"),
      pages: path.resolve(__dirname, "src", "pages"),
      api: path.resolve(__dirname, "src", "api"),
      reducers: path.resolve(__dirname, "src", "reducers"),
      middleware: path.resolve(__dirname, "src", "middleware")
    }
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s?css/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(bmp|gif|jpe?g|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[name].[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/fonts/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    stats: "errors-only"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new MiniCssExtractPlugin({ filename: "style.css" }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html"
    })
  ]
};
