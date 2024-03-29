const path = require("path");

//! Примечание: если в какой-то момент изображения перестали отображаться, то нужно просто нажать Ctrl + S/сохранить index.html, и всё вернётся на круги своя


//Плагины
const HtmlWebpackPlugin = require("html-webpack-plugin");//
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//


// const WebpackMd5Hash = require("webpack-md5-hash");

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'index.js', //'[name].[chunkhash].js', // '[chunkhash].[id].chunk.js', //'[name].[chunkhash].js', //'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, //очищать dist перед повторным npm run build
        assetModuleFilename: 'assets/images/[name][ext]', //если название папки с картинками другое, не забудьте поменять
        environment: {
            arrowFunction: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(scss|css)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    "autoprefixer"
                                ],
                            ],
                        },
                    },
                }, "group-css-media-queries-loader"],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-transform-arrow-functions"],
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // inject: false,
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin()
        // new WebpackMd5Hash()
    ],
    devServer: {
        watchFiles: ["src/*.html"]
    }
};