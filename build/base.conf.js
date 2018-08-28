const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

let production = process.env.NODE_ENV === 'production'

const renderer = {
    entry: {
        app: path.resolve('src', 'main.ts')
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                include: path.resolve('src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true
                    }
                }]
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                include: path.resolve('src'),
                use: ['babel-loader', {
                    loader: 'ts-loader',
                    options: {
                        appendTsxSuffixTo: [/\.vue$/]
                    }
                }]

            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                include: path.resolve('src'),
                use: ['babel-loader', {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }]
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'tslint-loader'
            },
            {
                test: /\.(c|s|le)ss$/,
                use: production ? [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ] : [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: production ? 'images/[name].[ext]' : 'images/[name].[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: production ? 'medias/[name].[ext]' : 'medias/[name].[hash:7].[ext]',
                        publicPath: '../'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: production ? 'static/fonts/[name].[ext]' : 'fonts/[name].[hash:7].[ext]',
                        publicPath: '../'
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve('src'),
            'vue$': 'vue/dist/vue.esm.js',
            'babel-core': path.resolve('node_modules', '@babel', 'core')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json', '.css', '.sss', '.node']
    },
    output: {
        path: path.resolve('dist'),
        filename: `[name].js`,
        // libraryTarget: 'umd'
    },
    optimization: {
        minimize: process.env.NODE_ENV == 'production' ? true : false,
        // https://www.webpackjs.com/plugins/split-chunks-plugin/
        splitChunks: process.env.NODE_ENV == 'production' ? {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        } : false
    },
    plugins: [
        // new webpack.ProgressPlugin(),
        // https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('src', 'index.html'),
            minify: production ? {
                removeComments: true,
                inject: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            } : null
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new VueLoaderPlugin()
    ],
    mode: process.env.NODE_ENV,
    target: 'web'
}

if (production) {
    renderer.plugins.push(
        // https://github.com/webpack-contrib/mini-css-extract-plugin
        new MiniCssExtractPlugin({
            filename: "static/styles/[name].css"
        }),
        // https://github.com/NMFR/optimize-css-assets-webpack-plugin
        new OptimizeCssAssetsPlugin({})
    )
}


module.exports = renderer