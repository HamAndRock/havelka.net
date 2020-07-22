const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const helpers = require('./helpers');

module.exports = {

  entry: {
    polyfill: '@babel/polyfill',
    main: helpers.root('/src/main.ts')
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.scss', '.json'],
    alias: {
      '@': helpers.root('/src/'),
      'vue-i18n$': 'vue-i18n/dist/vue-i18n.esm.js',
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'babel-loader!ts-loader'
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      },

      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
      {
        test: /\.(png|jpg|jpeg|gif|cur)$/,
        use: ['file-loader']
      }
    ]
  }
};
