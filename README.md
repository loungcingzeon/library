# 01. 如何开发一个属于自己的前端类库

## 课时1 1. 目标介绍
  - 基于webpack进行资源构建
  - 使用ES6语法进行开发
  - 将包输出为umd规范的文件
  - 使用mocha和chai进行测试
  - 使用eslint来进行代码检查
  - 基于npm script来集成开发命令


## 课时2 2. 环境配置
  - 全局环境：node & npm
  - 命令行： terminal & shell
  - 版本管理：git
  - 编辑器：atom/webstorm/st3/vs
  - 浏览器：chrome
  - 注册npm账号
  - 注册github账号

## 课时3 3. 创建类库
  - 创建项目的基本结构
      src 开发源代码
      lib 编译后的资源
      test  测试用例
      .gitignore
      LICENSE
      README.md
      package.json
      webpack.config.js
      .babelrc
      .eslint.js

## 课时4 4. 使用webpack和babel打包


## 课时5 5. 支持umd模块
  - 创建 index.html
  - 配置webpack.comfig.js 文件

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
   - 打包成umd


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


## 课时6 6. 支持开发调试

    - webpack几个小配置
    - resolve
      01. extension 扩展名,方便
      02. root 添加默认搜索路径，但得是绝对路径，可以是数组和字符串
    - devtool 开始工具配置
      01. cheap-source-map



## 课时7 l7. 支持环境变量
    - 区分开发环境和生产环境
    - sparrow.js (开发环境，未压缩校验， 一些开发环境的配置和代码)
    - sparrow.mim.js (生产环境)   

    ```
    -process.env.WEBPACK_ENV
    -yargs
    ```

    - yargs 下载
     ```
     $ npm install yargs --save-dev
     ```

## 课时8 8. 优化你的代码

    - 将用于生产环境的代码压缩
       ```
       webpack.optimize.UglifyJsPlugin
       ```
     - 提供给生产环境和开发环境用的文件名需要区分



## 课时9 9. 使用eslint进行代码风格检查
       -eslint eslint-loader
       $ npm install eslint eslint-loader --save-dev

       -执行代码检查
         $ .\node_modules\.bin\eslint --init
         ```
         PS E:\DEVELOPMENT\reactcourse\learn06\react-course6\library> .\node_modules\.bin\eslint --init
         ? How would you like to configure ESLint? Answer questions about your style
         ? Are you using ECMAScript 6 features? Yes
         ? Are you using ES6 modules? Yes
         ? Where will your code run? Browser
         ? Do you use CommonJS? Yes
         ? Do you use JSX? Yes
         ? Do you use React? Yes
         ? What style of indentation do you use? Tabs
         ? What quotes do you use for strings? Double

         ? What line endings do you use? Unix
         ? Do you require semicolons? No
         ? What format do you want your config file to be in? JavaScript
         Installing eslint-plugin-react
         library@1.0.0 E:\DEVELOPMENT\reactcourse\learn06\react-course6\library
         +-- eslint-plugin-react@6.10.3
         | +-- array.prototype.find@2.0.4
         | | +-- define-properties@1.1.2
         | | | `-- foreach@2.0.5
         | | `-- es-abstract@1.7.0
         | |   +-- es-to-primitive@1.1.1
         | |   | +-- is-date-object@1.0.1
         | |   | `-- is-symbol@1.0.1
         | |   +-- is-callable@1.1.3
         | |   `-- is-regex@1.0.4
         | +-- doctrine@1.5.0
         | +-- has@1.0.1
         | | `-- function-bind@1.1.0
         | +-- jsx-ast-utils@1.4.1
         | `-- object.assign@4.0.4
         |   `-- object-keys@1.0.11
         `-- UNMET PEER DEPENDENCY webpack@1.13.2
          
         npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
         npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.1: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
         npm WARN babel-loader@7.0.0 requires a peer of webpack@2 but none was installed.
         Successfully created .eslintrc.js file in E:\DEVELOPMENT\reactcourse\learn06\react-course6\library

         ```


     - 处理以下的问题
       ```
       ERROR in ./src/index.js

       E:\DEVELOPMENT\reactcourse\learn06\react-course6\library\src\index.js

        1:1   error  Expected linebreaks to be 'LF' but found 'CRLF'    linebreak-style
        2:30  error  Expected linebreaks to be 'LF' but found 'CRLF'    linebreak-style
        3:3   error  Expected indentation of 1 tab but found 2 spaces   indent
        3:17  error  Expected linebreaks to be 'LF' but found 'CRLF'    linebreak-style
        4:5   error  Expected indentation of 1 tab but found 4 spaces   indent
        4:26  error  Expected linebreaks to be 'LF' but found 'CRLF'    linebreak-style
        5:3   error  Expected indentation of 0 tabs but found 2 spaces  indent
        5:4   error  Expected linebreaks to be 'LF' but found 'CRLF'    linebreak-style
        6:1   error  Expected linebreaks to be 'LF' but found 'CRLF'    linebreak-style
        7:3   error  Expected indentation of 1 tab but found 2 spaces   indent
        7:13  error  Expected linebreaks to be 'LF' but found 'CRLF'    linebreak-style
        8:5   error  Expected indentation of 1 tab but found 4 spaces   indent
        8:35  error  Extra semicolon                                    semi
        8:36  error  Expected linebreaks to be 'LF' but found 'CRLF'    linebreak-style
        9:3   error  Expected indentation of 0 tabs but found 2 spaces  indent
        9:4   error  Expected linebreaks to be 'LF' but found 'CRLF'    linebreak-style
       10:2   error  Expected linebreaks to be 'LF' but found 'CRLF'    linebreak-style

       ✖ 17 problems (17 errors, 0 warnings)
       ```
     - 配置 package.json
         // 处理以下的问题
           "lint:fix": "eslint ./src --fix"
           ```
           "scripts": {
             "dev": "webpack --progress --colors --watch --mode=development",
             "build": "webpack --mode=production",
             "lint": "eslint ./src",
             "lint:fix": "eslint ./src --fix"  
           },
           ```

## 课时10 10. 支持单元测试
      - mocha chai 下载
       $ npm install mocha chai --save-dev

      - 获取第一手资料学习方法用功能
         官网：https://github.com/mochajs/mocha

      - 01.操作如下：
         ```
         PS E:\DEVELOPMENT\reactcourse\learn06\react-course7\library> cd .\test\
         PS E:\DEVELOPMENT\reactcourse\learn06\react-course7\library\test> ls
         PS E:\DEVELOPMENT\reactcourse\learn06\react-course7\library\test> touch index.spec.js
         ```

       - 配置 package.json
         01. "test": "mocha"
           ```
           "scripts": {
             "dev": "webpack --progress --colors --watch --mode=development",
             "build": "webpack --mode=production",
             "lint": "eslint ./src",
             "lint:fix": "eslint ./src --fix",
             "test": "mocha"
           },
           ```
          02. 查看帮助文件 .\node_modules\.bin\mocha --help

           ```
           PS E:\DEVELOPMENT\reactcourse\learn06\react-course7\library> .\node_modules\.bin\mocha --help

           Usage: mocha [debug] [options] [files]



           Commands:

             init <path>  initialize a client-side mocha setup at <path>

           Options:

             -h, --help                              output usage information
             -V, --version                           output the version number
             -A, --async-only                        force all tests to take a callback (async) or return a promise
             -c, --colors                            force enabling of colors
             -C, --no-colors                         force disabling of colors
             -G, --growl                             enable growl notification support
             -O, --reporter-options <k=v,k2=v2,...>  reporter-specific options
             -R, --reporter <name>                   specify the reporter to use
             -S, --sort                              sort test files
             -b, --bail                              bail after first test failure
             -d, --debug                             enable node's debugger, synonym for node --debug
             -g, --grep <pattern>                    only run tests matching <pattern>
             -f, --fgrep <string>                    only run tests containing <string>
             -gc, --expose-gc                        expose gc extension
             -i, --invert                            inverts --grep and --fgrep matches
             -r, --require <name>                    require the given module
             -s, --slow <ms>                         "slow" test threshold in milliseconds [75]
             -t, --timeout <ms>                      set test-case timeout in milliseconds [2000]
             -u, --ui <name>                         specify user-interface (bdd|tdd|qunit|exports)
             -w, --watch                             watch files for changes
             --check-leaks                           check for global variable leaks
             --full-trace                            display the full stack trace
             --compilers <ext>:<module>,...          use the given module(s) to compile files
             --debug-brk                             enable node's debugger breaking on the first line
             --globals <names>                       allow the given comma-delimited global [names]
              --es_staging                            enable all staged features
              --harmony<_classes,_generators,...>     all node --harmony* flags are available
              --preserve-symlinks                     Instructs the module loader to preserve symbolic links when resolving and caching modules
              --icu-data-dir                          include ICU data
              --inline-diffs                          display actual/expected differences inline within each string
              --inspect                               activate devtools in chrome
              --inspect-brk                           activate devtools in chrome and break on the first line
              --interfaces                            display available interfaces
              --no-deprecation                        silence deprecation warnings
              --no-exit                               require a clean shutdown of the event loop: mocha will not call process.exit
              --no-timeouts                           disables timeouts, given implicitly with --debug
              --opts <path>                           specify opts path
              --perf-basic-prof                       enable perf linux profiler (basic support)
              --prof                                  log statistical profiling information
              --log-timer-events                      Time events including external callbacks
              --recursive                             include sub directories
              --reporters                             display available reporters
              --retries <times>                       set numbers of time to retry a failed test case
              --throw-deprecation                     throw an exception anytime a deprecated function is used
              --trace                                 trace function calls
              --trace-deprecation                     show stack traces on deprecations
              --use_strict                            enforce strict mode
              --watch-extensions <ext>,...            additional extensions to monitor with --watch
              --delay                                 wait for async suite definition
           ```

       - 配置 "test": "mocha --require babel-register"

       -  使用 test/index.spec.js

       - 配置
         ```
         "test": "mocha --require babel-register -w --colors ./test/*.spec.js"
         ```

       - 下载 babel-register
         $ npm install babel-register --save-dev


## 课时11 11. 发布到npm和github上
  - npm官网：https://npmjs.com
  - 将包发布到npm
