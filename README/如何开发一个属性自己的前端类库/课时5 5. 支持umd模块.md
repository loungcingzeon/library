# library
## 课时5 5. 支持umd模块
  -创建 index.html
## 配置webpack.comfig.js 文件
    ```
        var path = require("path");
        var webpack = require("webpack");
        var librayName = "sparrow"
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
          module:{
            loaders:[
              {
                test: /\.js$/,
                loader:'babel',
                exclude:/node_modules/
              }
            ]
          },
          plugins:{

          }
        };

        module.exports = config;
    ```
## 打包成umd
    ```
      sparrow
      function sparrow() {
          _classCallCheck(this, sparrow);

          this.name = "sparrow";
        }
      var a = new sparrow();
      undefined
      a
      sparrow {name: "sparrow"}
      a.name
      "sparrow"
    ```
