'use strict';

const path = require('path');
const webpack = require('webpack');
const WebpackStylish = require('webpack-stylish');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'production';
const __DEV__ = NODE_ENV === 'development';

const config = {
  mode: NODE_ENV,
  entry: path.join(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'heimdall.[contenthash:8].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          { loader: __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: __DEV__ ? { localIdentName: '[path]__[local]' } : 'hash:base64:8',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              additionalData: '@import "@/styles/variables";\n@import "@/styles/mixins";\n',
            },
          },
        ],
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: 'images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.ejs'),
    })
  ],
};

if (__DEV__) {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
  );
  config.devServer = {
    port: 2333,
    stats: 'errors-only',
    overlay: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    disableHostCheck: true,
  };
} else {
  config.stats = 'none';
  config.plugins.push(
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      inline: [/runtime\.[a-z\d]{8}\.js$/],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new WebpackStylish(),
    new OptimizeCssAssetsPlugin(),
  );
  config.optimization = {
    runtimeChunk: { name: 'runtime' },
    splitChunks: {
      cacheGroups: {
        commons: {
          priority: 0,
          name: 'commons',
          chunks: 'async',
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    },
  };
}

module.exports = config;
