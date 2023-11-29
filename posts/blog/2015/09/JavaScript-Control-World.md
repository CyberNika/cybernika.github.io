---
title: JavaScript 就要统治世界了？
date: 2015-09-19 21:45:25
categories: [技术]
tags: [JavaScript, front-end]
---
> "JavaScript 可以 ……"
> "嘛，不就是操作一下 DOM，可以让元素飞来飞去吗"
> "JavaScript 是 ……"
> "不就是用 jQuery 让网页动起来，顶多就是再用用 Ajax 和后端进行一下数据交换吗"
> "JavaScript 是一门 ……"
> "最讨厌和鄙视这种弱类型不需要编译的脚本语言了，你说 OOP? 扯淡的吧，JS 有对象吗"
> "……"

# 0x00. 前言

早上起床惯例刷刷微博，突然看到 [React Native 宣布支持 Android](http://weibo.com/1400854834/CABjGgwbD?type=comment#_rnd1442420379926) 的消息，一时感觉 Facebook 太给力了，不仅没有推迟发布 [React Native For Android](http://facebook.github.io/react-native/docs/getting-started.html#content) 而且还比之前公告的时间提前了一些。立马下床打开电脑赶紧上官网，心想着用 JS 写原生安卓的日子终于要来了。乐乐呵呵地打开文档，然后瞬间就傻眼了。好吧，尽欺负我们这些买不起 Mac 的穷学生。
<!-- more -->
![React Native Requirements][1]

虽然暂且还是用不了 React Native，但是突然就感觉到了 JS 的强大，细细一想，还真是暗暗作喜，这么恶劣的语言也居然能做出这么多有趣的事情，也真是苦了那些 JS 工程师啊。于是有了这篇稍稍对 JavaScript 畅想的文章。第一次写这类文章，还只是一名在校学生，固然没有大神们的那种境界，有错误和不妥之处还请指出，我定虚心学习。

# 0x01. 浏览器中的 JavaScript

曾经很单纯地认为能够熟练地使用 [jQuery](http://jquery.com/)/[JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) 操作 [DOM](http://www.w3school.com.cn/htmldom/)，能够将一些高复用的组件注册为插件就是掌握 JS 的标志。然而随着自己接触更多的人，接触更多的技术才发现自己的无知和渺小，浏览器其实只是 JavaScript 的一个宿主环境，提供 JavaScript 引擎来解释 JavaScript，浏览器环境下的 JavaScript 和 JavaScript 本身还是有很大区别的，浏览器下的 JavaScript 在 JavaScript 整个体系中其实也只是很小（但很重要）的一部分而已。

![JavaScript In Console][2]

# 0x02. JavaScript 能做什么

## 1. Web 前端

很早以前各大公司对于 Web 标准的恶战让 JS 的环境异常恶劣，加之语言其本身的不成熟让其功能仅限于一些简单的前端交互。[Ajax](http://www.ibm.com/developerworks/cn/xml/wa-ajaxintro1.html) 技术的出现让前端可以在不刷新页面的情况下和后端进行数据交换，[jQuery](http://jquery.com/)/[zepto](http://zeptojs.com/) 等库的盛行让 JS 变得异常简单，[Bootstrap](http://getbootstrap.com/)/[Amaze UI](http://amazeui.org/) 等 UI 框架更是让前端的成本无限降低，[RequireJS](http://www.requirejs.cn/)/[SeaJs](http://seajs.org/docs/) 让 JavaScript 也可以进行依赖管理，[MVVM](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)（Model-View-ViewModel 的出现让前后端的分离做到了极致，JavaScript 在前端领域前景明朗。

```javascript
// jQuery 进行 Ajax 请求
$.ajax({
  async: true,
  type: 'POST',
  url: "api.php/CustomerLogin/login",
  data: {
    username: 'Nika',
    password: 'javascript',
    uuid: 'web_javascript'
  },
  success: function (data) {
    // 登录成功
  }
});
```

![阮一峰如是说][3]

- Ajax：[掌握 Ajax - IBMdeveloperWorks](http://www.ibm.com/developerworks/cn/xml/wa-ajaxintro1.html)
- 库：[jQuery](http://www.jquery123.com/)/[zepto](http://gmu.baidu.com/doc/2.0.5/)
- UI 框架：[Bootstrap](http://www.bootcss.com/)/[AmazeUI](http://amazeui.org/)
- 依赖管理：[RequireJS](http://www.requirejs.cn/)/[SeaJs](http://seajs.org/docs/)
- MVVM：[AngularJS](http://www.apjs.net/)/[Avalon](http://avalonjs.github.io/)

## 2. 后端之旅

2009年5月，Ryan Dah 发布了 [Node](http://nodejs.org/) 的最初版本。Node 是一个基于 Chrome JavaScript 运行时建立的平台，它对 [Google V8](https://developers.google.com/v8/) 引擎进行了封装，使 JavaScript 第一次走出前端运行在了服务器上。这对 JavaScript 来说是一种质的突破，这使得 Web 编程可以只用一门语言便可完成。It's Amazing! Web 的大一统时代仿佛就要来了。同时 Node 也诞生了 [npm](https://www.npmjs.com/)，从此 JavaScript 也有了强大的包管理机制。

```javascript
// 使用 Express 的 Hello world
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
```

- 关于 Node：[Node .js- Wikipedia](https://en.wikipedia.org/wiki/Node.js)/[我们为什么要使用 NodeJS](http://limu.iteye.com/blog/1013223)
- Web 开发框架：[Express](http://www.expressjs.com.cn/)/[Clouda](http://cloudajs.org/docs)
- 博客系统：[Ghost](http://www.ghostchina.com/)/[hexo](https://github.com/hexojs/hexo)
- 基于 Node 的前端自动化构建工具：[Grunt](http://www.gruntjs.net/)/[Gulp](http://www.gulpjs.com.cn/)

## 3. Hybrid App

传统上 JavaScript 只能在浏览器中运行，Node 的出现让 JavaScript 运行在了服务端，然而只是这样的话，好像还是少点什么。人们总是希望用一种方式去做所有的事情，于是聪明的工程师们就发明了 [**Hybrid App**](http://baike.baidu.com/link?url=0n3hSaSSDZY32ugehfhv0-iLUFhDR7PjW9m1uvQQ-uD_D1hMIULV-DAZldELQUxNM87aa1MV5Y0tYTEmBxH0Lq) 这种形式，让 JavaScript 在一定意义上运行在了移动设备上。然而当前 Hybrid App 虽然让 JavaScript 也可以写出 JAVA/Objective-C 才能实现的 APP，但是这种方式仍然没有抛弃浏览器运行环境，对 WebView 有很强的依赖性，性能和原生应用还有很大差距。

![APICloud 云端一体平台介绍](http://docs.apicloud.com/img/docImage/overview.jpg)

- 对比：[Native App、Web App 还是Hybrid App？](http://www.biaodianfu.com/native-app-or-web-app-or-hybrid-app.html)
- 工具：[PhoneGap](http://phonegap.com/)/[APICloud](http://www.apicloud.com/)/[AppCan](http://www.appcan.cn/)

## 4. 桌面应用

至此 JavaScript 除了可以被浏览器解析，也可以作为后端语言使用，还可以用来构建移动端 APP。仿佛已经够强大了吧，然而这还不够，JavaScript 还可以用来构建桌面应用！

**[Node-webkit](http://nwjs.io/)**

Node-webkit 是一个 *Web 应用程序运行时环境*，它可以让你以 Web 的方式来写桌面应用程序，你可以用任何流行的 Web 技术来编写一个跨平台（Windows，Linux，MacOS）的桌面程序，并且性能和交互也是良好的，[Teambition](https://www.teambition.com/) 桌面客户端便是使用 Node-webkit 编写的。目前在 [GitHub](https://github.com/nwjs/nw.js/) 上有 24463 Star。

**[heX](http://hex.youdao.com/zh-cn/)**

heX 是有道公司开发的采用前端技术（HTML，CSS，JavaScript）开发桌面应用软件的跨平台解决方案，意在解决传统桌面应用开发中繁琐的 UI 和交互开发工作，使其变的简单而高效。特别适合重 UI，重交互的桌面应用软件。新版有道词典 beta 版的首页便是使用 heX 开发完成的。

- [Node-Webkit 作者王文睿：桌面应用的全新开发方式](http://www.csdn.net/article/2014-01-08/2818066-Node-Webkit)
- [Node-Webkit 文档](http://nwjs.io/)/[Node-Webkit 教程](http://damoqiongqiu.iteye.com/blog/2010720)
- [heX 介绍](http://hex.youdao.com/blog/)/[heX 文档](http://hex.youdao.com/zh-cn/tutorial/index.html)

## 5. 神作 React

**[React](http://facebook.github.io/react/)**

React（React.js） 是由 FaceBook 开发和维护的前端框架，目前在 [GitHub](https://github.com/facebook/react) 得到了 27900+ star。它摒弃了 MVC/MVVM 的模式，仅仅是做 UI，开创性地采用了 Virtual DOM（虚拟 DOM）避免了 DOM 操作消耗性能的问题，将 UI 拆分成不同的可组合、可复用、可维护的组件，组件和组件之间耦合度极低，开发效率大幅度增加。在前端 UI 组件化的趋势下，这很值得去尝试。instagram.com 全站都采用 React 进行开发。

![React 架构 - 来自 @鬼道 (http://www.zhihu.com/people/luics) 的知乎回答][4]

上图来自 [@鬼道](http://www.zhihu.com/people/luics) 的知乎回答[如何评价 React Native？](http://www.zhihu.com/question/27852694/answer/43990708)

``` javascript
// 简单的官方示例
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(<HelloMessage name="John" />, mountNode);
```

**[React Native](http://facebook.github.io/react/)**

React Native 既拥有 Native 的用户体验，又保留 React 的开发效率。开源不到1周 [GitHub](https://github.com/facebook/react-native) Star 破万，这简直是逆天的成绩啊！上线之初仅支持 iOS，React 也在 9 月 14 号对 Android 提供了支持服务，这就意味着你可以使用同一套逻辑和架构、同一门语言实现 Web、iOS、Android 的开发。由于各大平台 API 和交互逻辑的不同，React Native 的理念是 “Learn once, write anywhere”，而不是曾经跨平台流行的 “Write once, run anywhere” 。实际上 React Native 和 React 有很大的差别，但是逻辑和架构还是保持一致的。React Native 和 Hybrid 最大的区别是前者摒弃了饱受性能诟病的 WebView，通过 HTML 标签和移动平台的组件进行映射，仿佛是将 JS “编译”成了原生语言一样，性能和交互体验会比 Hybrid 好上不少。目前在 [GitHub](https://github.com/facebook/react-native) 上有 18551 Star。

``` javascript
// 简单的官方示例
// iOS
var React = require('react-native');
var { TabBarIOS, NavigatorIOS } = React;
var App = React.createClass({
  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item title="React Native" selected={true}>
        <NavigatorIOS initialRoute={{ title: 'React Native' }} />
      </TabBarIOS.Item> </TabBarIOS>
    );
  },
});

// Android
var React = require('react-native');
var { DrawerLayoutAndroid, ProgressBarAndroid } = React;
var App = React.createClass({
  render: function() {
    return (
      <DrawerLayoutAndroid
        renderNavigationView={() => <Text>React Native</Text>}>
        <ProgressBarAndroid />
      </DrawerLayoutAndroid>
    );
  },
});
```

- [React 文档](https://facebook.github.io/react/)
- [React 傻瓜教程](http://zhuanlan.zhihu.com/FrontendMagazine/19896745)/[React 入门 - 阮一峰](http://www.ruanyifeng.com/blog/2015/03/react.html)
- [React Native 文档](http://facebook.github.io/react-native/)
- [React Native](http://www.zhihu.com/question/27852694)

## 6. 游戏

世界上最流行的 2D 游戏引擎之一 [Cocos2d](http://www.cocos.com/) 和最流行的 3D 游戏引擎之一 [Unity3D](http://unity3d.com/cn/) 均支持 JS 开发游戏。

**[Cocos2d-js](http://www.cocos.com/doc/article/index?type=cocos2d-x&url=/doc/cocos-docs-master/manual/framework/cocos2d-js/catalog/../1-about-cocos2d-js/1-1-a-brief-history/zh.md)**

Cocos2d-JS 是 Cocos2d-x 的 JavaScript 版本，融合了 Cocos2d-html5 和Cocos2d-x JavaScript Bindings。它支持 Cocos2d-x 的所有核心特性并提供更简单易用的 JavaScript 风格 API，并且天然支持原生、浏览器跨平台应用。

在 3.0 版中，Cocos2d-JS 完成了不同平台工作流的彻底整合，为不同平台提供了统一的开发体验。无论开发 Web 应用还是原生应用，都可以便捷地采用 Cocos2d-JS 实现“一次开发，全平台运行”。采用 Cocos2d-JS 开发的同一套 JavaScript 游戏代码，可以同时运行在 Mac OS X,  Windows,  iOS,  Android 等原生平台、以及所有现代浏览器上，这将使得我们的开发者轻松覆盖几乎所有发行渠道，带来前所未有的机遇。另一方面，若开发者只想开发一款 Web 轻度休闲游戏，Cocos2d-JS 也专门为此类游戏定制了 Lite Version，直接将 Cocos2d-JS Lite Version 集成到页面中即可使用。

![Cocos2d-JS v3.0 框架][5]

**[Unity3D](http://unity3d.com/cn/)**

Unity3D 是一个跨平台的 3D 游戏引擎，与 Cocos2d 最大的区别在于前者主要面对 2D 游戏开发者，后者主要进行大型 3D 游戏的开发。

# 0x03. JavaScript 语言是坨屎？

- 兼容性
- 性能
- 面向对象
- 深拷贝
- 单线程
- ···

这些都是 JavaScript 的语言缺陷，拿面向对象举例，JavaScript 没有严格意义的类和对象，只能用函数这种奇奇怪怪的方式实现 OOP。这些缺陷也情有可原，因为事实上 JavaScript 在几天（据说为 10 天）的时间内就被 Brendan Eich 设计出来了。很多人都感叹 JavaScript 在这么恶劣的语言和环境中竟能得到这样的成功。正是因为 JavaScript 开发周期短、早期规范缺失、浏览器厂商竞争这些原因导致一些问题迟迟不能解决。

``` javascript
// 工厂模式 常用
function Person(name, gender, age) {
  var obj = Object();
  obj.name = name;
  obj.gender = gender;
  obj.age = age;
  obj.tellAge = function () {
    console.log(this.age);
  };
  return obj;
}

var stephen = new Person('Nika', 'male', '21');
stephen.tellAge();
```

``` javascript
// 构造函数模式
function Person(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.tellAge = function () {
    console.log(this.age);
  };
}

var stephen = new Person('Nika', 'male', '21');
stephen.tellAge();
```

``` javascript
// 原型（+构造函数）模式 很常用
function Person(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Person.prototype.tellAge = function () {
  console.log(this.age);
};

var stephen = new Person('Nika', 'male', '21');
stephen.tellAge();
```

这里举出了常用的三种构造对象的方法，你也会感觉到恶心得要死吧。为了改善 JavaScript 语言本身的不足，微软在 2012 年推出了 [TypeScript](http://www.typescriptlang.org/) 语言，TypeScript 是 JavaScript 的超集，支持强类型和 OOP，最终编译为 JavaScript。当然了 [CoffeeScript](http://coffee-script.org/) 也是一种解决方案。

[ECMAScript](http://baike.baidu.com/view/810176.htm) 经过 4 个版本的迭代之后，终于迎来了第 5 个版本（因为 ES4 流产了）—— ES6。ES6 标准的发布可谓是 JavaScript 历史上最重要的里程碑，它给 JavaScript 带来了诸多语言特性，箭头操作符、类的支持、字符串模板、函数参数默认值、迭代器、for-of 遍历、生成器、Symbols 基本类型等等，这就意味着你可以这样写 JavaScript 了：

``` javascript
// ES6 中启用了关键字 class
class Person {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  tellAge() {
    console.log(this.age);
  }
}

var stephen = new Person('Nika', 'male', '21');
stephen.tellAge();
```

虽然 ES6 带来了很多美妙的特性，让 JavaScript 也可以像其他语言那样优雅地写出健壮的代码，但是 ES5 还会独占市场很久，各浏览器厂商跟进也需要一段时间。然而我们有理由相信，在不久的将来，JavaScript 的另一片美好的天空定会到来。毕竟 JavaScript 是一门年轻但是充满活力、不断进化的语言。

- [Javascript 诞生记](http://www.ruanyifeng.com/blog/2011/06/birth_of_javascript.html)
- [专题：深入浅出 ES6](http://www.infoq.com/cn/es6-in-depth/)
- [《ECMAScript 6入门》](http://es6.ruanyifeng.com/)

# 0x04. JavaScript 统治世界？

JavaScript 固然可以做很多事情，从前端到后端，从桌面到移动，从应用到游戏，仿佛干了所有的事情一样。然而，也正是 JavaScript 固有的语言特性，使其在很多场景并不适用，调用硬件（`nodebots 可以控制硬件`）、大数据、高强度计算等等这些考验性能和执行效率的事情 JavaScript 是~~万万做不到的~~`不太擅长的`；尽管 JavaScript 可以移动开发，然而真正采用 JavaScript 来开发移动端是一个很需要魄力的选择，没有生态支持、没有历史可借鉴，究竟有多少人愿意这样做也是一个问题。细细一想，JavaScript 成熟的应用空间也只剩下了前端、轻量级后端和游戏了吧。然而当 ES6 大量部署的时候，这个世界会是什么样，谁又知道呢？

> JavaScript 统治世界，任重而道远啊！


  [1]: ../../assets/javascript-control-world/react-native-requirements.png
  [2]: ../../assets/javascript-control-world/console.jpg
  [3]: ../../assets/javascript-control-world/legend-javascript.png
  [4]: ../../assets/javascript-control-world/react.jpg
  [5]: ../../assets/javascript-control-world/cocos2d-js.png
