const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');


module.exports = {
    mode: 'development',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
      },
    performance: {
        maxAssetSize: 1000000,
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    devServer: {
        static: path.resolve(__dirname,'./public'),
        port: 8564,
    },

    devtool: 'inline-source-map',


    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]',
                          outputPath: 'images',
                        },
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
                                quality: '65-90',
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
                ],
            },
        ],
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};