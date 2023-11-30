const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },

  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000
  },


  devServer: {
    static: path.join(__dirname, "./dist"),
    hot: true,
    port: 3000,
  },

    devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                },
            },
        ],
      },
      {
        loader: 'image-webpack-loader',
        options: {
            mozjpeg: {
                progressive: true,
                quality: 65
            },
            optipng: {
                enabled: false,
            },
            pngquant: {
                quality: [0.65, 0.90],
                speed: 4
            },
            gifsicle: {
                interlaced: false,
            },
            webp: {
                quality: 75
            },
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Holberton - dashboard",
    }),
    new CleanWebpackPlugin(),
  ],
};
