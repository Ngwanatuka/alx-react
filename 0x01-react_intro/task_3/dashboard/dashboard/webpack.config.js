const path = require('path');


module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    performance: {
        maxAssetSize: 1000000,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'public'),
    },
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
};