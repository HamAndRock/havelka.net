const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CreateSymlinkPlugin = require('symlink-webpack-plugin');

const helpers = require('./helpers');

const path = require('path');



module.exports = merge(common, {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.vue', '.scss'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            'vue-i18n$': 'vue-i18n/dist/vue-i18n.esm.js'
        }
    },
    output: {
        path: helpers.root('/dist'),
        publicPath: '/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].chunk.js?[chunkhash]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './index.html',
            inlineSource: '.(css)$',
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: './404.html',
            inlineSource: '.(css)$',
            template: './src/index.html',
        }),
        new CreateSymlinkPlugin([
            {origin: 'index.html', symlink: 'en.html',},
            {origin: 'index.html', symlink: 'cs.html',},
        ]),
        new CopyPlugin([
            { from: 'src/CNAME', to: '' },
            { from: 'src/robots.txt', to: '' },
            { from: 'src/sitemap.xml', to: '' },
            { from: 'images', to: 'images' },
            { from: 'favicon', to: '' },
        ]),
        new HTMLInlineCSSWebpackPlugin(),
    ],
    optimization: {
        usedExports: true,
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                },
                commons: {
                    test: /[\\/]jquery[\\/]/,
                    name: 'jquery',
                    chunks: 'all'
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                terserOptions: {}
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    module: {
        rules: [
            {test: /\.(png|jpg|jpeg|gif|cur)$/, use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: "images/"
                    }
                }]
            },
            {test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: "fonts/"
                        }
                    }
                ]
            }
        ]
    }
});
