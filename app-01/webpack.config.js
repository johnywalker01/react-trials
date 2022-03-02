var webpack = require('webpack');
var path = require('path');

// variables
var isProduction = process.argv.indexOf('production') >= 0 || process.env.NODE_ENV === 'production';
const rootPath = path.join(__dirname, '.');
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './build');

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: rootPath,
  entry: {
    vendor: ["@material-ui/styles"],
    app: './src/main.tsx',
  },
  mode: isProduction ? 'production' : 'development',
  output: {
    path: outPath,
    publicPath: isProduction ? '/' : '/',
    filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
    chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // (jsnext:main directs not usually distributable es6 format, but es6 sources)
    mainFields: ['module', 'browser', 'main'],
    alias: {
      app: path.resolve(__dirname, 'src/app/'),
      images: path.resolve(__dirname, 'src/assets/images'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },

      // .ts, .tsx
      {
        test: /\.(ts|tsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: ['@babel/plugin-proposal-class-properties'],
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      // css
      {
        test: /\.css$/,

        use: ['style-loader', 'css-loader'],
      },
      // static assets
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
      {
        test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // name: false,
      cacheGroups: {
        name: "vendor",
        minChunks: false,
      },
    },

    // bundles will be build seperately.

    // runtimeChunk: 'single',
    // splitChunks: {
    //   chunks: 'all',
    //   maxInitialRequests: Infinity,
    //   minSize: 0,
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name(module) {
    //         // get the name. E.g. node_modules/packageName/not/this/part.js
    //         // or node_modules/packageName
    //         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

    //         // npm package names are URL-safe, but some servers don't like @ symbols
    //         return `npm.${packageName.replace('@', '')}`;
    //       },
    //     },
    //   },
    // },
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false, }),
    new HtmlWebpackPlugin({ template: 'src/assets/index.html', }),
    new MiniCssExtractPlugin({ filename: isProduction ? '[contenthash].css' : '[fullhash].css', disable: !isProduction, }),
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    stats: 'minimal',
    clientLogLevel: 'warning',
    mimeTypes: {
      'text/html': ['phtml'],
    },
    port: 3003, // DEV PORT
    open: {},
  },
  // https://webpack.js.org/configuration/devtool/
  devtool: isProduction ? false : 'source-map',
};
