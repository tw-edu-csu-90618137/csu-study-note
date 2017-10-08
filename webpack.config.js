"use strict";
const path = require("path");

const {
  NoEmitOnErrorsPlugin,
  NamedModulesPlugin
} = require('webpack');

const {
  CommonsChunkPlugin,
  UglifyJsPlugin
} = require('webpack').optimize;

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLess = new ExtractTextPlugin({
  filename: (getPath) => {
      return getPath("../css/[name].css").replace("_less","");
    },
  allChunks:true
});

var configFn = function(env, argv) {
  const isDev = env.dev;
  const isExtractLESS = env.extractLESS;

  var rule_less = [{
      loader: "style-loader",
      options:{
        insertAt:"bottom",
        insertInto:"head"
      }
    },
    {
      loader: "css-loader",
      options: {
        minimize: !isDev ? {
          preset: 'default'
        } : false,
      }
    },
    {
      loader: "less-loader",
      options: {
        paths: [path.join(process.cwd(), 'node_modules')] //less path
      }
    }
  ];

  var config =  {
    resolve: {
      extensions: [".js", ".less"],
      modules: ["./node_modules"]
    },
    context: path.join(process.cwd(), 'src'),
    entry: {
      "docsify.plugins":"./js/docsify.plugins.js"
    },
    output: {
      filename: "[name].js",
      chunkFilename: "[id].chunk.js",
      path: path.join(process.cwd(), "docs/js")
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['env'],
              plugins: ['transform-runtime']
            }
          }
        },
        {
          test: /\.less$/,
          use: isExtractLESS?extractLess.extract(rule_less.slice(1)):rule_less
        }
      ]
    },
    plugins: [
      extractLess,
      new NamedModulesPlugin(),
      new NoEmitOnErrorsPlugin()
    ]
  };


  if(!isDev){
    config.plugins.push(new UglifyJsPlugin({compress: {drop_console: true}}));
  }

  return config;
}

module.exports = configFn;
