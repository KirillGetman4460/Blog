const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode:"production",
    watch: true,
    context: path.resolve(__dirname, 'src'),

    entry:["@babel/polyfill",'./index.jsx'],
    
    output:{
        publicPath: '/',
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins:[
        new HTMLWebpackPlugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: 'styles.css'
        })      
    ],
    devtool: 'development' ? 'source-map' : '',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,'css-loader']
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },

          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                '@babel/preset-env'          
              ],
              plugins:[
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-syntax-top-level-await"
              ]
              }
            }
          },
          {
            test: /\.m?ts$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                    '@babel/preset-env',
                    "@babel/preset-typescript"
                ]
              }
            }
          },
          {
            test: /\.m?jsx$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                    '@babel/preset-env',
                    "@babel/preset-react"
                ]
              }
            }
          }
        ]
    },

    devServer:{
        static:{
            directory: path.resolve(__dirname, 'src')
        },
        historyApiFallback: true,
        compress: true
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}