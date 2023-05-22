const path = require("path");

//! Примечание: если в какой-то момент изображения перестали отображаться, то нужно просто нажать Ctrl + S/сохранить index.html, и всё вернётся на круги своя


//Плагины
const HtmlWebpackPlugin = require("html-webpack-plugin");//
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Данный html будет использован как шаблон
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css', // Формат имени файла
      }), // Добавляем в список плагинов
  ]; // Создаем массив плагинов

module.exports = {
    mode,
    plugins,
    devtool: 'source-map',
    entry: {
        main: './src/scripts/index.js',
        about: './src/scripts/about/about.js',
        contacts: './src/scripts/contacts/contacts.js'
    },

    output: {
        filename: 'scripts/[name].[contenthash].js', // '[chunkhash].[id].chunk.js', //'[name].[chunkhash].js', //'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, //очищать dist перед повторным npm run build
        assetModuleFilename: 'assets/images/[name].[contenthash].[ext]', //если название папки с картинками другое, не забудьте поменять
        environment: {
            arrowFunction: false,
        },
    },
    
    module: {
        rules: [
            {
                test: /\.(html)$/i,
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
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // inject: false,
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            // inject: false,
            template: 'src/about.html',
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            // inject: false,
            template: 'src/contacts.html',
            filename: 'contacts.html'
        }),
        new MiniCssExtractPlugin({filename: 'styles/[name].[contenthash].css'})        
    ],
    // devServer: {
    //     watchFiles: ["src/*.html"],
    //     hot: true,
    // }
};