const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const VueLoaderPlugin = require('vue-loader-plugin')

// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const ENV = require('./environment-config')
// const ENV_PROD = ENV.ENV_PROD
// const PLUGINS = require('./config/plugins')(ENV)

// console.log('\nBuilding for ' + chalk.red(ENV.env.NODE_ENV.toUpperCase()) + '\n')

module.exports = {
  entry: path.resolve('./src/index.js'),
  // mode: ENV_PROD ? 'production' : 'development',
  output: {
    path: path.resolve('./dist'),
    // publicPath: '/',
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      '@': 'src/'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new HtmlWebpackPlugin({
      // filename: './src/index.html',
      template: path.resolve('./src/index.html'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      nodeModules: process.env.NODE_ENV !== 'production'
        ? path.resolve(__dirname, './node_modules')
        : false
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
        ]
      },
      // {
      //   test: /\.less$/i,
      //   use: [
      //     ENV_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
      //     'css-loader',
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         postcssOptions: {
      //           plugins: [
      //             require('autoprefixer')({
      //               overrideBrowserslist: ['> 5%', 'last 2 versions']
      //             }),
      //           ]
      //         },
      //       }
      //     },
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         sourceMap: true,
      //         lessOptions: {
      //           javascriptEnabled: true
      //         }
      //       }
      //     },
      //   ]
      // },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            extractCSS: process.env.NODE_ENV === 'production',
            loaders: {
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',
              scss: 'vue-style-loader!css-loader!sass-loader',
              less: 'vue-style-loader!css-loader!less-loader'
            }
          }
        }
      },
      {
        test: /\.((woff(2)?)|(ttf)|(eot)|(svg))(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMap: true,
              compact: false,
              presets: [
                ['@babel/preset-env', {
                  useBuiltIns: 'entry',
                  targets: {
                    browsers: 'last 2 versions, ie 10-11',
                  },
                  corejs: {
                    version: 3,
                    proposals: true
                  }
                }]
              ],
              // plugins: [
              //   ['object-to-json-parse', {
              //     minJSONStringSize: 1024
              //   }],
              //   ['babel-plugin-loop-optimizer']
              // ]
            },
          }
        ]
      },
    ],
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       terserOptions: ENV_PROD ? {
  //         mangle: true,
  //         beautify: false,
  //         compress: {
  //           sequences: true,
  //           dead_code: true,
  //           conditionals: true,
  //           booleans: true,
  //           unused: true,
  //           if_return: true,
  //           join_vars: true,
  //           drop_console: ENV_PROD
  //         },
  //         output: {
  //           quote_style: 1,
  //           comments: false
  //         }
  //       } : {
  //           mangle: false,
  //           beautify: true
  //         }
  //     }),
  //     new CssMinimizerPlugin()
  //   ],
  // }
}