---
title: 【译】使用 AngularJS 和 Electron 构建桌面应用
date: 2015-12-26 12:41:19
categories: [art]
tags: [JavaScript, front-end]
---

> 原文：[Creating Desktop Applications With AngularJS and GitHub Electron](https://scotch.io/tutorials/creating-desktop-applications-with-angularjs-and-github-electron)

![angular-electron-cover.png][1]

GitHub 的 [Electron](http://electron.atom.io/) 框架（以前叫做 Atom Shell）允许你使用 HTML, CSS 和 JavaScript 编写跨平台的桌面应用。它是 [io.js](https://iojs.org/) 运行时的衍生，专注于桌面应用而不是 web 服务端。

Electron 丰富的原生 API 使我们能够在页面中直接使用 JavaScript 获取原生的内容。

这个教程向我们展示了如何使用 Angular 和 Electron 构建一个桌面应用。下面是本教程的所有步骤：

1. 创建一个简单的 Electron 应用
2. 使用 Visual Studio Code 编辑器管理我们的项目和任务
3. 使用 Electron 开发（原文为 Integrate）一个 Angular 顾客管理应用（Angular Customer Manager App）
4. 使用 Gulp 任务构建我们的应用，并生成安装包
<!--more-->
## 创建你的 Electron 应用

起初，如果你的系统中还没有安装 Node，你需要先安装它。我们应用的结构如下所示：

![project-structure.png][2]

这个项目中有两个 package.json 文件。

- 开发使用
 项目根目录下的 package.json 包含你的配置，开发环境的依赖和构建脚本。这些依赖和 package.json 文件不会被打包到生产环境构建中。
- 应用使用
 app 目录下的 package.json 是你应用的清单文件。因此每当在你需要为你项目安装 npm 依赖的时候，你应该依照这个 package.json 来进行安装。

package.json 的格式和 Node 模块中的完全一致。你应用的启动脚本（的路径）需要在 **app/package.json** 中的 `main` 属性中指定。

`app/package.json` 看起来是这样的：

```javascript
{
  name: "AngularElectron",
  version: "0.0.0",
  main: "main.js"
}
```

过执行 `npm init` 命令分别创建这两个 `package.json` 文件，也可以手动创建它们。通过在命令提示行里键入以下命令来安装项目打包必要的 npm 依赖：

```
npm install --save-dev electron-prebuilt fs-jetpack asar rcedit Q
```

## 创建启动脚本

**app/main.js** 是我们应用的入口。它负责创建主窗口和处理系统事件。**main.js** 应该如下所示：

```javascript
// app/main.js

// 应用的控制模块
var app = require('app');

// 创建原生浏览器窗口的模块
var BrowserWindow = require('browser-window');
var mainWindow = null;

// 当所有窗口都关闭的时候退出应用
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// 当 Electron 结束的时候，这个方法将会生效
// 初始化并准备创建浏览器窗口
app.on('ready', function () {

  // 创建浏览器窗口.
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // 载入应用的 index.html
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // 打开开发工具
  // mainWindow.openDevTools();
  // 窗口关闭时触发
  mainWindow.on('closed', function () {

    // 想要取消窗口对象的引用，如果你的应用支持多窗口，
    // 通常你需要将所有的窗口对象存储到一个数组中，
    // 在这个时候你应该删除相应的元素
    mainWindow = null;
  });

});
```

## 通过 DOM 访问原生

正如我上面提到的那样，Electron 使你能够直接在 web 页面中访问本地 npm 模块和原生 API。你可以这样创建 `app/index.html` 文件：

```javascript
<html>
<body>
  <h1>Hello World!</h1>
  We are using Electron
  <script>  document.write(process.versions['electron']) </script>
  <script> document.write(process.platform) </script>
  <script type="text/javascript">
     var fs = require('fs');
     var file = fs.readFileSync('app/package.json');
     document.write(file);
  </script>
</body>
</html>
```

**app/index.html** 是一个简单的 HTML 页面。在这里，它通过使用 Node’s [fs](https://nodejs.org/api/fs.html) (file system) 模块来读取 `package.json` 文件并将其内容写入到 document body 中。

## 运行应用

一旦你创建好了项目结构、`app/index.html`、`app/main.js` 和 `app/package.json`，你很可能想要尝试去运行初始的 Electron 应用来测试并确保它正常工作。

如果你已经在系统中全局安装了 `electron-prebuilt`，就可以通过下面的命令启动应用：

```
electron app
```

在这里，`electron` 是运行 electron shell 的命令，`app` 是我们应用的目录名。如果你不想将 Election 安装到你全局的 npm 模块中，可以在命令提示行中通过下面命令使用本地 `npm_modules` 文件夹下的 electron 来启动应用。

```
"node_modules/.bin/electron" "./app"
```

尽管你可以这样来运行应用，但是我还是建议你在 `gulpfile.js` 中创建一个 [gulp task](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)，这样你就可以将你的任务和 Visual Studio Code 编辑器相结合，我们会在下一部分展示。

```javascript
// 获取依赖
var gulp        = require('gulp'),
  childProcess  = require('child_process'),
  electron      = require('electron-prebuilt');

// 创建 gulp 任务
gulp.task('run', function () {
  childProcess.spawn(electron, ['./app'], { stdio: 'inherit' });
});
```

运行你的 gulp 任务：`gulp run`。我们的应用看起来会是这个样子：

![electron-app][3]

## 配置 Visual Studio Code 开发环境

Visual Studio Code 是微软的一款跨平台代码编辑器。VS Code 是基于 Electron 和 微软自身的 Monaco Code Editor 开发的。你可以在[这里](http://code.visualstudio.com/)下载到 Visual Studio Code。

在 VS Code 中打开你的 electron 应用。

![open-application.png][4]

## 配置 Visual Studio Code Task Runner

有很多自动化的工具，像构建、打包和测试等。我们大多从命令行中运行这些工具。VS Code task runner 使你能够将你自定义的任务集成到项目中。你可以在你的项目中直接运行 grunt,、gulp,、MsBuild 或者其他任务，这并不需要移步到命令行。

VS Code 能够自动检测你的 grunt 和 gulp 任务。按下 `ctrl + shift + p` 然后键入 `Run Task` 敲击回车便可。

![run-task.png][5]

你将从 `gulpfile.js` 或 `gruntfile.js` 文件中获取所有有效的任务。

> 注意：你需要确保 `gulpfile.js` 文件存在于你应用的根目录下。

![run-task-gulp.png][6]

`ctrl + shift + b` 会从你任务执行器（task runner）中执行 `build` 任务。你可以使用 `task.json` 文件来覆盖任务集成。按下 `ctrl + shift + p` 然后键入 `Configure Task` 敲击回车。这将会在你项目中创建一个 `.setting` 的文件夹和 `task.json` 文件。要是你不止想要执行简单的任务，你需要在 `task.json` 中进行配置。例如你或许想要通过按下 `Ctrl + Shift + B` 来运行应用，你可以这样编辑 `task.json` 文件：

```json
{
  "version": "0.1.0",
  "command": "gulp",
  "isShellCommand": true,
  "args": [ "--no-color" ],
  "tasks": [
    {
      "taskName": "run",
      "args": [],
      "isBuildCommand": true
    }
  ]
}
```

根部分声明命令为 `gulp`。你可以在 `tasks` 部分写入你想要的更多任务。将一个任务的 `isBuildCommand` 设置为 true 意味着它和 `Ctrl + Shift + B` 进行了绑定。目前 VS Code 只支持一个顶级任务。

现在，如果你按下 `Ctrl + Shift + B`，`gulp run` 将会被执行。

你可以在[这里](https://code.visualstudio.com/Docs/editor/tasks#_defining-a-problem-matcher)阅读到更多关于 visual studio code 任务的信息。

#### 调试 Electron 应用

打开调试面板点击配置按钮就会在 `.settings` 文件夹内创建一个 `launch.json` 文件，包含了调试的配置。

![debug.png][7]

我们不需要启动 app.js 的配置，所以移除它。

现在，你的 `launch.json` 应该如下所示：

```javascript
{
  "version": "0.1.0",
  // 配置列表。添加新的配置或更改已存在的配置。
  // 仅支持 "node" 和 "mono"，可以改变 "type" 来进行切换。
  "configurations": [
    {
      "name": "Attach",
      "type": "node",
      // TCP/IP 地址. 默认是 "localhost"
      "address": "localhost",
      // 建立连接的端口.
      "port": 5858,
      "sourceMaps": false
     }
   ]
}
```

按照下面所示更改之前创建的 gulp `run` 任务，这样我们的 electron 将会采用调试模式运行，5858 端口也会被监听。

```javascript
gulp.task('run', function () {
  childProcess.spawn(electron, ['--debug=5858','./app'], { stdio: 'inherit' });
});
```

在调试面板中选择 “Attach” 配置项，点击开始（run）或者按下 F5。稍等片刻后你应该就能在上部看到调试命令面板。

![debug-star.png][8]

## 创建 AngularJS 应用

第一次接触 AngularJS？浏览[官方网站](https://angularjs.org/)或一些 [Scotch Angular 教程](https://scotch.io/tag/angular-js)。

这一部分会讲解如何使用 AngularJS 和 MySQL 数据库创建一个顾客管理（Customer Manager）应用。这个应用的目的不是为了强调 AngularJS 的核心概念，而是展示如何在 GiHub 的 Electron 中同时使用 AngularJS 和 NodeJS 以及 MySQL 。

我们的顾客管理应用正如下面这样简单：

- 顾客列表
- 添加新顾客
- 选择删除一个顾客
- 搜索指定的顾客

## 项目结构

我们的应用在 **app** 文件夹下，目录结构如下所示：

![angular-project-structure.png][9]

主页是 `app/index.html` 文件。`app/scripts` 文件夹包含所有用在该应用中的关键脚本和视图。有许多方法可以用来组织应用的文件。

这里我更喜欢按照功能来组织脚本文件。每个功能都有它自己的文件夹，文件夹中有模板和控制器。获取更多关于目录结构的信息，可以阅读 [AngularJS 最佳实践: 目录结构](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)

在开始 AngularJS 应用之前，我们将使用 [bower](https://scotch.io/tutorials/manage-front-end-resources-with-bower) 安装客户端方面的依赖。如果你还没有 [Bower](http://bower.io/)  先要安装它。在命令提示行中将当前工作目录切换至你应用的根目录，然后依照下面的命令安装依赖。

```
bower install angular angular-route angular-material --save
```

## 设置数据库

在这个例子中，我将使用一个名字为 `customer-manager` 的数据库和一张名字为 `customers` 的表。下面是数据库的导出文件，你可以依照这个快速开始。

```sql

CREATE TABLE `customer_manager`.`customers` (
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(450) NULL,
  `city` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `remarks` VARCHAR(500) NULL, PRIMARY KEY (`customer_id`)
);
```

#### 创建一个 Angular Service 和 MySQL 进行交互

一旦你的数据库和表都准备好了，就可以开始创建一个 AngularJS service 来直接从数据库中获取数据。使用  `node-mysql`  这个 npm 模块使 service 连接数据库——一个使用 JavaScript 为 NodeJs 编写的 MySQL 驱动。在你 Angular 应用的 **app/** 目录下安装 `node-mysql` 模块。

> 注意：我们将 node-mysql 模块安装到 app 目录下而不是应用的根目录，是因为我们需要在最终的 distribution 中包含这个模块。

在命令提示行中切换工作目录至 **app** 文件夹然后按照下面所示安装模块：

```
npm install --save mysql
```

我们的 angular service —— **app/scripts/customer/customerService.js** 如下所示：

```
(function () {
    'use strict';
    var mysql = require('mysql');

    // 创建 MySql 数据库连接
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "customer_manager"
    });

    angular.module('app')
        .service('customerService', ['$q', CustomerService]);

    function CustomerService($q) {
        return {
            getCustomers: getCustomers,
            getById: getCustomerById,
            getByName: getCustomerByName,
            create: createCustomer,
            destroy: deleteCustomer,
            update: updateCustomer
        };

        function getCustomers() {
            var deferred = $q.defer();
            var query = "SELECT * FROM customers";
            connection.query(query, function (err, rows) {
                if (err) deferred.reject(err);
                deferred.resolve(rows);
            });
            return deferred.promise;
        }

        function getCustomerById(id) {
            var deferred = $q.defer();
            var query = "SELECT * FROM customers WHERE customer_id = ?";
            connection.query(query, [id], function (err, rows) {
                if (err) deferred.reject(err);
                deferred.resolve(rows);
            });
            return deferred.promise;
        }

        function getCustomerByName(name) {
            var deferred = $q.defer();
            var query = "SELECT * FROM customers WHERE name LIKE  '" + name + "%'";
            connection.query(query, [name], function (err, rows) {
                if (err) deferred.reject(err);
                deferred.resolve(rows);
            });
            return deferred.promise;
        }

        function createCustomer(customer) {
            var deferred = $q.defer();
            var query = "INSERT INTO customers SET ?";
            connection.query(query, customer, function (err, res)
                if (err) deferred.reject(err);
                deferred.resolve(res.insertId);
            });
            return deferred.promise;
        }

        function deleteCustomer(id) {
            var deferred = $q.defer();
            var query = "DELETE FROM customers WHERE customer_id = ?";
            connection.query(query, [id], function (err, res) {
                if (err) deferred.reject(err);
                deferred.resolve(res.affectedRows);
            });
            return deferred.promise;
        }

        function updateCustomer(customer) {
            var deferred = $q.defer();
            var query = "UPDATE customers SET name = ? WHERE customer_id = ?";
            connection.query(query, [customer.name, customer.customer_id], function (err, res) {
                if (err) deferred.reject(err);
                deferred.resolve(res);
            });
            return deferred.promise;
        }
    }
})();
```

`customerService` 是一个简单的自定义 angular service，它提供了对表 `customers` 的基础 CRUD 操作。直接在 service 中使用了 node 模块 `mysql`。如果你已经拥有了一个远程的数据服务，你也可以使用它来替代之。

## 控制器 & 模板

**app/scripts/customer/customerController** 中的 `customerController` 如下所示：

```
(function () {
    'use strict';
    angular.module('app')
        .controller('customerController', ['customerService', '$q', '$mdDialog', CustomerController]);

    function CustomerController(customerService, $q, $mdDialog) {
        var self = this;

        self.selected = null;
        self.customers = [];
        self.selectedIndex = 0;
        self.filterText = null;
        self.selectCustomer = selectCustomer;
        self.deleteCustomer = deleteCustomer;
        self.saveCustomer = saveCustomer;
        self.createCustomer = createCustomer;
        self.filter = filterCustomer;

        // 载入初始数据
        getAllCustomers();

        //----------------------
        // 内部方法
        //----------------------

        function selectCustomer(customer, index) {
            self.selected = angular.isNumber(customer) ? self.customers[customer] : customer;
            self.selectedIndex = angular.isNumber(customer) ? customer: index;
        }

        function deleteCustomer($event) {
            var confirm = $mdDialog.confirm()
                                   .title('Are you sure?')
                                   .content('Are you sure want to delete this customer?')
                                   .ok('Yes')
                                   .cancel('No')
                                   .targetEvent($event);

            $mdDialog.show(confirm).then(function () {
                customerService.destroy(self.selected.customer_id).then(function (affectedRows) {
                    self.customers.splice(self.selectedIndex, 1);
                });
            }, function () { });
        }

        function saveCustomer($event) {
            if (self.selected != null && self.selected.customer_id != null) {
                customerService.update(self.selected).then(function (affectedRows) {
                    $mdDialog.show(
                        $mdDialog
                            .alert()
                            .clickOutsideToClose(true)
                            .title('Success')
                            .content('Data Updated Successfully!')
                            .ok('Ok')
                            .targetEvent($event)
                    );
                });
            }
            else {
                //self.selected.customer_id = new Date().getSeconds();
                customerService.create(self.selected).then(function (affectedRows) {
                    $mdDialog.show(
                        $mdDialog
                            .alert()
                            .clickOutsideToClose(true)
                            .title('Success')
                            .content('Data Added Successfully!')
                            .ok('Ok')
                            .targetEvent($event)
                    );
                });
            }
        }

        function createCustomer() {
            self.selected = {};
            self.selectedIndex = null;
        }

        function getAllCustomers() {
            customerService.getCustomers().then(function (customers) {
                self.customers = [].concat(customers);
                self.selected = customers[0];
            });
        }

        function filterCustomer() {
            if (self.filterText == null || self.filterText == "") {
                getAllCustomers();
            }
            else {
                customerService.getByName(self.filterText).then(function (customers) {
                    self.customers = [].concat(customers);
                    self.selected = customers[0];
                });
            }
        }
    }

})();
```

我们的顾客模板（**app/scripts/customer/customer.html**）使用了 angular material 组件来构建 UI，如下所示：

```
<div style="width:100%" layout="row">
    <md-sidenav class="site-sidenav md-sidenav-left md-whiteframe-z2"
                md-component-id="left"
                md-is-locked-open="$mdMedia('gt-sm')">

        <md-toolbar layout="row" class="md-whiteframe-z1">
            <h1>Customers</h1>
        </md-toolbar>
        <md-input-container style="margin-bottom:0">
            <label>Customer Name</label>
            <input required name="customerName" ng-model="_ctrl.filterText" ng-change="_ctrl.filter()">
        </md-input-container>
        <md-list>
            <md-list-item ng-repeat="it in _ctrl.customers">
                <md-button ng-click="_ctrl.selectCustomer(it, $index)" ng-class="{'selected' : it === _ctrl.selected }">
                    {{it.name}}
                </md-button>
            </md-list-item>
        </md-list>
    </md-sidenav>

    <div flex layout="column" tabIndex="-1" role="main" class="md-whiteframe-z2">

        <md-toolbar layout="row" class="md-whiteframe-z1">
            <md-button class="menu" hide-gt-sm ng-click="ul.toggleList()" aria-label="Show User List">
                <md-icon md-svg-icon="menu"></md-icon>
            </md-button>
            <h1>{{ _ctrl.selected.name }}</h1>
        </md-toolbar>

        <md-content flex id="content">
            <div layout="column" style="width:50%">
                <br />
                <md-content layout-padding class="autoScroll">
                    <md-input-container>
                        <label>Name</label>
                        <input ng-model="_ctrl.selected.name" type="text">
                    </md-input-container>
                    <md-input-container md-no-float>
                        <label>Email</label>
                        <input ng-model="_ctrl.selected.email" type="text">
                    </md-input-container>
                    <md-input-container>
                        <label>Address</label>
                        <input ng-model="_ctrl.selected.address"  ng-required="true">
                    </md-input-container>
                    <md-input-container md-no-float>
                        <label>City</label>
                        <input ng-model="_ctrl.selected.city" type="text" >
                    </md-input-container>
                    <md-input-container md-no-float>
                        <label>Phone</label>
                        <input ng-model="_ctrl.selected.phone" type="text">
                    </md-input-container>
                </md-content>
                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap>
                    <md-button class="md-raised md-info" ng-click="_ctrl.createCustomer()">Add</md-button>
                    <md-button class="md-raised md-primary" ng-click="_ctrl.saveCustomer()">Save</md-button>
                    <md-button class="md-raised md-danger" ng-click="_ctrl.cancelEdit()">Cancel</md-button>
                    <md-button class="md-raised md-warn" ng-click="_ctrl.deleteCustomer()">Delete</md-button>
                </section>
            </div>
        </md-content>

    </div>
</div>
```

app.js 包含模块初始化脚本和应用的路由配置，如下所示：

```
(function () {
    'use strict';

    var _templateBase = './scripts';

    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate'
    ])
    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: _templateBase + '/customer/customer.html' ,
                controller: 'customerController',
                controllerAs: '_ctrl'
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }
    ]);

})();
```

最后是我们的首页 **app/index.html**

```
<html lang="en" ng-app="app">
    <title>Customer Manager</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"gt;
    <meta name="description" content="">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <!-- build:css assets/css/app.css -->
    <link rel="stylesheet" href="../bower_components/angular-material/angular-material.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <!-- endbuild -->
<body>
    <ng-view></ng-view>
    <!-- build:js scripts/vendor.js -->
    <script src="../bower_components/angular/angular.js"></script>
    <script src="../bower_components/angular-route/angular-route.js"></script>
    <script src="../bower_components/angular-animate/angular-animate.js"></script>
    <script src="../bower_components/angular-aria/angular-aria.js"></script>
    <script src="../bower_components/angular-material/angular-material.js"></script>
    <!-- endbuild -->

    <!-- build:app scripts/app.js -->
    <script src="./scripts/app.js"></script>
    <script src="./scripts/customer/customerService.js"></script>
    <script src="./scripts/customer/customerController.js"></script>
    <!-- endbuild -->
</body>
</html>
```

如果你已经如上面那样配置过 VS Code task runner 的话，使用 `gulp run` 命令或者按下 `Ctrl + Shif + B` 来启动你的应用。

![angular-app.png][10]

## 构建 AngularJS 应用

为了构建我们的 Angular 应用，需要安装 `gulp-uglify`, `gulp-minify-css` 和 `gulp-usemin` 依赖包。

```
npm install --save gulp-uglify gulp-minify-css gulp-usemin
```

打开你的 `gulpfile.js` 并且引入必要的模块。

```
  var childProcess = require('child_process');
  var electron     = require('electron-prebuilt');
  var gulp         = require('gulp');
  var jetpack      = require('fs-jetpack');
  var usemin       = require('gulp-usemin');
  var uglify       = require('gulp-uglify');

  var projectDir = jetpack;
  var srcDir     = projectDir.cwd('./app');
  var destDir    = projectDir.cwd('./build');
```

如果构建目录已经存在的话，清理一下它。

```
gulp.task('clean', function (callback) {
  return destDir.dirAsync('.', { empty: true });
});
```

复制文件到构建目录。我们并不需要使用复制功能来复制 angular 应用的代码，在下一部分中 `usemin` 将会为我们做这件事请：

```
gulp.task('copy', ['clean'], function () {
    return projectDir.copyAsync('app', destDir.path(), {
        overwrite: true, matching: [
            './node_modules/**/*',
            '*.html',
            '*.css',
            'main.js',
            'package.json'
       ]
    });
});
```

我们的构建任务将使用 gulp.src() 获取 app/index.html 然后传递给 usemin。然后它会将输出写入到构建目录并且把 index.html 中的引用用优化版代码替换掉 。

> 注意： 千万不要忘记在 app/index.html 像这样定义 usemin 块：

```
<!-- build:js scripts/vendor.js -->
<script src="../bower_components/angular/angular.js"></script>
<script src="../bower_components/angular-route/angular-route.js"></script>
<script src="../bower_components/angular-animate/angular-animate.js"></script>
<script src="../bower_components/angular-aria/angular-aria.js"></script>
<script src="../bower_components/angular-material/angular-material.js"></script>
<!-- endbuild -->

<!-- build:app scripts/app.js -->
<script src="./scripts/app.js"></script>
<script src="./scripts/customer/customerService.js"></script>
<script src="./scripts/customer/customerController.js"></script>
<!-- endbuild -->
```

构建任务如下所示：

```
gulp.task('build', ['copy'], function () {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      js: [uglify()]
    }))
    .pipe(gulp.dest('build/'));
});
```

## 为发行（distribution）做准备

在这一部分我们将把 Electron 应用打包至生产环境。在根目录创建构建脚本 `build.windows.js`。这个脚本用于 Windows 上。对于其他平台来说，你应该创建那个平台特定的脚本并且根据平台来运行。

可以在 `node_modules/electron-prebuilt/dist` 目录中找到一个典型的 electron distribution。这里是构建 electron 应用的步骤：

- 我们首要的任务是复制 electron distribution 到我们的 `dist` 目录。
- 每一个 electron distribution 都包含一个默认的应用在 `dist/resources/default_app` 中 。我们需要用我们最终构建的应用来替换它。
- 为了保护我们的应用源码和资源，你可以选择将你的应用打包成一个 asar 归档，这会改变一点你的源码。一个 asar 归档是一个简单的类似 tar 的格式，它会将你所有的文件拼接成单个文件，Electron 可以在不解压整个文件的情况下从中读取任意文件。

> 注意：这一部分描述的是 windows 平台下的打包。其他平台中的步骤是一样的，只是路径和使用的文件不一样而已。你可以在 github 中获取 OSx 和 linux 的完整构建脚本。

安装构建 electron 必要的依赖：`npm install --save q asar fs-jetpack recedit`

接下来，初始化我们的构建脚本，如下所示：

```
var Q = require('q');
var childProcess = require('child_process');
var asar = require('asar');
var jetpack = require('fs-jetpack');
var projectDir;
var buildDir;
var manifest;
var appDir;

function init() {
    // 项目路径是应用的根目录
    projectDir = jetpack;
    // 构建目录是最终应用被构建后放置的目录
    buildDir = projectDir.dir('./dist', { empty: true });
    // angular 应用目录
    appDir = projectDir.dir('./build');
    // angular 应用的 package.json 文件
    manifest = appDir.read('./package.json', 'json');
    return Q();
}
```

这里我们使用 `fs-jetpack` node 模块进行文件操作。它提供了更灵活的文件操作。

### 复制 Electron Distribution

从 `electron-prebuilt/dist` 复制默认的 electron distribution 到我们的 dist 目录

```
function copyElectron() {
     return projectDir.copyAsync('./node_modules/electron-prebuilt/dist', buildDir.path(), { overwrite: true });
}
```

### 清理默认应用

你可以在 `resources/default_app` 文件夹内找到一个默认的 HTML 应用。我们需要用我们自己的 angular 应用来替换它。按照下面所示移除它：

> 注意：这里的路径是针对 windows 平台的。对于其他平台过程是一致的，只是路径不一样而已。在 OSX 中路径应该是 Contents/Resources/default_app

```
function cleanupRuntime() {
     return buildDir.removeAsync('resources/default_app');
}
```

### 创建 asar 包

```
function createAsar() {
     var deferred = Q.defer();
     asar.createPackage(appDir.path(), buildDir.path('resources/app.asar'), function () {
         deferred.resolve();
     });
     return deferred.promise;
}
```

这将会把你 angular 应用的所有文件打包到一个 asar 包文件里。你可以在 `dist/resources/` 目录中找到 asar 文件。

### 替换为自己的应用资源

下一步是将默认的 electron icon 替换成你自己的，更新产品的信息然后重命名应用。

```
function updateResources() {
    var deferred = Q.defer();

    // 将你的 icon 从 resource 文件夹复制到构建文件夹下
    projectDir.copy('resources/windows/icon.ico', buildDir.path('icon.ico'));

    // 将 Electron icon 替换成你自己的
    var rcedit = require('rcedit');
    rcedit(buildDir.path('electron.exe'), {
        'icon': projectDir.path('resources/windows/icon.ico'),
        'version-string': {
            'ProductName': manifest.name,
            'FileDescription': manifest.description,
        }
    }, function (err) {
        if (!err) {
            deferred.resolve();
        }
    });
    return deferred.promise;
}
// 重命名 electron exe
function rename() {
    return buildDir.renameAsync('electron.exe', manifest.name + '.exe');
}
```

## 创建原生安装包

你可以使用 wix 或 NSIS 创建 windows 安装包。这里我们尽可能使用更小更灵活的 NSIS，它很适合网络应用。使用 NSIS 可以创建支持应用安装时需要的任何事情的安装包。

在 resources/windows/installer.nsis 中创建 NSIS 脚本


```
!include LogicLib.nsh
    !include nsDialogs.nsh

    ; --------------------------------
    ; Variables
    ; --------------------------------

    !define dest "{{dest}}"
    !define src "{{src}}"
    !define name "{{name}}"
    !define productName "{{productName}}"
    !define version "{{version}}"
    !define icon "{{icon}}"
    !define banner "{{banner}}"

    !define exec "{{productName}}.exe"

    !define regkey "Software\${productName}"
    !define uninstkey "Software\Microsoft\Windows\CurrentVersion\Uninstall\${productName}"

    !define uninstaller "uninstall.exe"

    ; --------------------------------
    ; Installation
    ; --------------------------------

    SetCompressor lzma

    Name "${productName}"
    Icon "${icon}"
    OutFile "${dest}"
    InstallDir "$PROGRAMFILES\${productName}"
    InstallDirRegKey HKLM "${regkey}" ""

    CRCCheck on
    SilentInstall normal

    XPStyle on
    ShowInstDetails nevershow
    AutoCloseWindow false
    WindowIcon off

    Caption "${productName} Setup"
    ; Don't add sub-captions to title bar
    SubCaption 3 " "
    SubCaption 4 " "

    Page custom welcome
    Page instfiles

    Var Image
    Var ImageHandle

    Function .onInit

        ; Extract banner image for welcome page
        InitPluginsDir
        ReserveFile "${banner}"
        File /oname=$PLUGINSDIR\banner.bmp "${banner}"

    FunctionEnd

    ; Custom welcome page
    Function welcome

        nsDialogs::Create 1018

        ${NSD_CreateLabel} 185 1u 210 100% "Welcome to ${productName} version ${version} installer.$\r$\n$\r$\nClick install to begin."

        ${NSD_CreateBitmap} 0 0 170 210 ""
        Pop $Image
        ${NSD_SetImage} $Image $PLUGINSDIR\banner.bmp $ImageHandle

        nsDialogs::Show

        ${NSD_FreeImage} $ImageHandle

    FunctionEnd

    ; Installation declarations
    Section "Install"

        WriteRegStr HKLM "${regkey}" "Install_Dir" "$INSTDIR"
        WriteRegStr HKLM "${uninstkey}" "DisplayName" "${productName}"
        WriteRegStr HKLM "${uninstkey}" "DisplayIcon" '"$INSTDIR\icon.ico"'
        WriteRegStr HKLM "${uninstkey}" "UninstallString" '"$INSTDIR\${uninstaller}"'

        ; Remove all application files copied by previous installation
        RMDir /r "$INSTDIR"

        SetOutPath $INSTDIR

        ; Include all files from /build directory
        File /r "${src}\*"

        ; Create start menu shortcut
        CreateShortCut "$SMPROGRAMS\${productName}.lnk" "$INSTDIR\${exec}" "" "$INSTDIR\icon.ico"

        WriteUninstaller "${uninstaller}"

    SectionEnd

    ; --------------------------------
    ; Uninstaller
    ; --------------------------------

    ShowUninstDetails nevershow

    UninstallCaption "Uninstall ${productName}"
    UninstallText "Don't like ${productName} anymore? Hit uninstall button."
    UninstallIcon "${icon}"

    UninstPage custom un.confirm un.confirmOnLeave
    UninstPage instfiles

    Var RemoveAppDataCheckbox
    Var RemoveAppDataCheckbox_State

    ; Custom uninstall confirm page
    Function un.confirm

        nsDialogs::Create 1018

        ${NSD_CreateLabel} 1u 1u 100% 24u "If you really want to remove ${productName} from your computer press uninstall button."

        ${NSD_CreateCheckbox} 1u 35u 100% 10u "Remove also my ${productName} personal data"
        Pop $RemoveAppDataCheckbox

        nsDialogs::Show

    FunctionEnd

    Function un.confirmOnLeave

        ; Save checkbox state on page leave
        ${NSD_GetState} $RemoveAppDataCheckbox $RemoveAppDataCheckbox_State

    FunctionEnd

    ; Uninstall declarations
    Section "Uninstall"

        DeleteRegKey HKLM "${uninstkey}"
        DeleteRegKey HKLM "${regkey}"

        Delete "$SMPROGRAMS\${productName}.lnk"

        ; Remove whole directory from Program Files
        RMDir /r "$INSTDIR"

        ; Remove also appData directory generated by your app if user checked this option
        ${If} $RemoveAppDataCheckbox_State == ${BST_CHECKED}
            RMDir /r "$LOCALAPPDATA\${name}"
        ${EndIf}

    SectionEnd
```

在 `build.windows.js` 文件中创建一个叫做 `createInstaller` 的函数，如下所示：

```
function createInstaller() {
    var deferred = Q.defer();

    function replace(str, patterns) {
        Object.keys(patterns).forEach(function (pattern) {
            console.log(pattern)
              var matcher = new RegExp('{{' + pattern + '}}', 'g');
            str = str.replace(matcher, patterns[pattern]);
        });
        return str;
    }

    var installScript = projectDir.read('resources/windows/installer.nsi');

    installScript = replace(installScript, {
        name: manifest.name,
        productName: manifest.name,
        version: manifest.version,
        src: buildDir.path(),
        dest: projectDir.path(),
        icon: buildDir.path('icon.ico'),
        setupIcon: buildDir.path('icon.ico'),
        banner: projectDir.path('resources/windows/banner.bmp'),
    });
    buildDir.write('installer.nsi', installScript);

    var nsis = childProcess.spawn('makensis', [buildDir.path('installer.nsi')], {
        stdio: 'inherit'
    });

    nsis.on('error', function (err) {
        if (err.message === 'spawn makensis ENOENT') {
            throw "Can't find NSIS. Are you sure you've installed it and"
            + " added to PATH environment variable?";
        } else {
            throw err;
        }
    });

    nsis.on('close', function () {
        deferred.resolve();
    });

    return deferred.promise;

}
```

你应该安装了 NSIS，并且确保它在你的路径中是可用的。`creaeInstaller` 函数会读取安装包脚本并且依照 NSIS 运行时使用 `makensis` 命令来执行。

## 将他们组合到一起

创建一个函数把所有的片段放在一起，为了使 gulp 任务可以获取到然后输出它：

```
function build() {
    return init()
            .then(copyElectron)
            .then(cleanupRuntime)
            .then(createAsar)
            .then(updateResources)
            .then(rename)
            .then(createInstaller);
}
module.exports = { build: build };
```

接着，在 `gulpfile.js` 中创建 gulp 任务来执行这个构建脚本：

```
var release_windows = require('./build.windows');
var os = require('os');
gulp.task('build-electron', ['build'], function () {
    switch (os.platform()) {
        case 'darwin':
        // 执行 build.osx.js
        break;
        case 'linux':
        //执行 build.linux.js
        break;
        case 'win32':
        return release_windows.build();
    }
});
```

运行下面命令，你应该就会得到最终的产品：

```
gulp build-electron
```

你最终的 electron 应用应该在 `dist` 目录中，并且目录结构应该和下面是相似的：

![](http://scotch.io/wp-content/uploads/2015/09/dist-structure1.png)

## 总结

Electron 不仅仅是一个支持打包 web 应用成为桌面应用的原生 web view。它现在包含 app 的自动升级、Windows 安装包、崩溃报告、通知和一些其它有用的原生 app 功能——所有的这些都通过 JavaScript API 调用。

到目前为止，很大范围的应用使用 electron 创建，包括聊天应用、数据库管理器、地图设计器、协作设计工具和手机原型等。

下面是 Github Electron 的一些有用的资源：

- 官方网站 – http://electron.atom.io/
- 官方文档 – https://github.com/atom/electron/tree/master/docs
- Awesome Electron – https://github.com/sindresorhus/awesome-electron
- Electron 应用样板 – https://github.com/szwacz/electron-boilerplate
- 使用 ReactJs 的 Electron 样板 – https://github.com/airtoxin/Electron-React-Boilerplate
- https://github.com/chentsulin/electron-react-boilerplate
- [本文中应用源码](https://github.com/jasimea/ElectronAngular)（译者注）


  [1]: https://segmentfault.com/img/bVrNxl
  [2]: https://segmentfault.com/img/bVrNxm
  [3]: https://segmentfault.com/img/bVrNxq
  [4]: https://segmentfault.com/img/bVrNxt
  [5]: https://segmentfault.com/img/bVrNxu
  [6]: https://segmentfault.com/img/bVrNxv
  [7]: https://segmentfault.com/img/bVrNxw
  [8]: https://segmentfault.com/img/bVrNxx
  [9]: https://segmentfault.com/img/bVrNxy
  [10]: https://segmentfault.com/img/bVrNxC
