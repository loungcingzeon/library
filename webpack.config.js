var path = require("path");
var webpack = require("webpack");
var mode = require("yargs").argv.mode;

// plugin 插件
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var librayName = "sparrow";
var plugins = [];
var filename = "";



if(mode === "production"){
  // 生产环境
  plugins.push(new uglifyJsPlugin({minimize:true}));
  // sparrow.min.js
  filename = librayName + ".min.js";
}else{
  // 开发环境 sparrow.js
  filename = librayName + ".js";
}


var config = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
      path:path.resolve(__dirname, "./lib"),
      //filename:librayName + ".[hash:6].js"
      filename:librayName + ".js",

      // 打包成umd
      library: librayName,
      libraryTarget: "umd",
      umdNameDefine: true
  },
  // 调试工具
  "devtool":"cheap-source-map",
  // 扩展名
  resolve:{
    extension:["", ".js",, ".css", ".json"],
    root:path.resolve("./src")
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader:'babel',
        exclude:/node_modules/
      },
      {
        test: /\.js$/,
        loader:'eslint',
        exclude:/node_modules/
      }
    ]
  },
  plugins:plugins
};

module.exports = config;
