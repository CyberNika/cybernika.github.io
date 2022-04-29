---
title: 写一个 Chrome 扩展之 Flat Weibo —— 简洁你的微博世界
date: 2016-03-29 12:48:35
categories: [art]
tags: [Chrome-Extension, front-end]
---

## 0x00. 前言

微博现在也是变得越来越臃肿，广告越来越多，早已不再是“微”博了，这让微博深度用户的我感到十分焦灼。由于之前就尝试写过 Chrome 插件，于是便想到了这样的解决方案。Flat Weibo，简洁你的微博！

## 0x01. 概览

- 去除两边的各种推荐
- 去除部分广告
- 重置顶部导航样式
- 修改背景
- 修改微博流样式
- 其他

![flat-weibo][1]
<!--more-->
## 0x02. 下载 & 安装

### 下载

[Chrome 应用商店](https://chrome.google.com/webstore/detail/flat-weibo/plmimfmefmleomdhkjabaiphhfdnobop)

[百度云](http://pan.baidu.com/s/1miEOqJe)

### 安装

由于 Chrome 目前禁止第三方插件的安装，所以需在 Chrome 里依次点击 **菜单** **更多工具** **扩展程序** 然后打开 **开发者模式**，将插件拖进来然后会自动安装。

安装成功后插件即生效，更多自定义功能稍后便来 ~

## 0x03. 写一个 Chrome 扩展

### 源码

[GitHub - Flat Weibo](https://github.com/PuYart/flat-weibo)

### Chrome 扩展是什么？

Chrome 扩展允许你在 Chrome 中使用 JavaScript 来对网页、浏览器、本地存储等内容进行访问和更改，对应的 Firefox 也有自己的扩展程序。本文章的扩展只针对 Chrome 而言。

Chrome 扩展是一系列文件的集合，这些文件包括 HTML 文件、CSS 样式文件、JavaScript 脚本文件、图片等静态文件以及 manifest.json（清单文件）。

扩展被安装后，Chrome 就会读取扩展中的 manifest.json 文件。这个文件的文件名固定为 manifest.json，内容是按照一定格式描述的扩展相关信息，如扩展名称、版本、更新地址、请求的权限、扩展的 UI 界面入口等等。这样 Chrome 就可以知道在浏览器中如何呈现这个扩展，以及这个扩展如何同用户进行交互。

一般而言，Chrome 扩展会对用户浏览的页面进行相应的 DOM 操作和一些数据传递，本案例 Flat Weibo 的本质是，当用户浏览网页版微博时，Chrome 扩展会向当前页面注入预先写好的 CSS，这样便对微博网页版进行了样式重构。

### manifest.json（清单文件）

每个 Chrome 扩展都包含一个 manifest 文件，Chrome 会从该文件中读取本扩展的相关信息，是扩展的入口。

```javascript
{
  "manifest_version": 2,                  // manifest 版本，当前只能为 2
  "name": "Flat Weibo",                   // 扩展名
  "version": "1.0.0",                     // 扩展版本号
  "description": "简洁你的微博，去除烦人的微博推荐和广告，让微博更加扁平，更加简单明了",  // 扩展描述
  "icons": {                              // 扩展图标
    "16": "img/icon/icon_16.png",
    "48": "img/icon/icon_48.png",
    "128": "img/icon/icon_128.png"
  },
  "browser_action": {                     // 添加图标按钮至 Chrome 工具条
    "default_icon": {                     // 图标
      "19": "img/icon/icon_19.png",
      "38": "img/icon/icon_38.png"
    },
    "default_title": "开启简洁微博世界",     // 按钮标题，鼠标移动至按钮上会显示
    "default_popup": "popup.html"         // 点击按钮呈现的页面
  },
  "content_scripts": [                    // 被注入的脚本
    {
      "matches": [                        // 匹配被注入的条件
        "*://weibo.com/*",
        "*://www.weibo.com/*"
      ],
      "css": [                            // 被注入的 css
        "css/flat-weibo.css"
      ]
    }
  ]
}
```

> 更多关于清单文件的介绍请访问
> - http://open.chrome.360.cn/extension_dev/manifest.html
> - http://www.ituring.com.cn/article/60136

### css

本扩展的核心部分便是被注入到页面中的 CSS，核心思想是分析页面 DOM 结构，编写新样式，进行注入。

![weibo-home.png][2]

如上图所示，两个红框标出了一些我们不愿意看到的东西，我们先分析一下这两部分的 DOM 结构。

![weibo-home-input-ad.png][3]

我们可以看到这个烦人的推荐位所对应的节点为 `.send_weibo .key`，既然拿到了 DOM 节点，就可以这么写：

```css
.send_weibo .key {
  display: none;
}
```

是不是很简单，很机智呢，直接让我们不想看到的东西隐藏就好了！

同样的，我们审查一下右侧推荐位的 DOM 结构。

![weibo-home-rightmod-ad.png][4]

于是

```css
#v6_pl_rightmod_rank {
  display: none;
}
```

处理之后就是这个样子，我们看到 `#v6_pl_rightmod_rank` 的 `Styles` 中出现了一个标有 *injected stylesheet* 的样式（中间红框），这个便是我们在 Chrome 扩展中向页面注入的 CSS。同样的我们看到左边红框和 `#v6_pl_rightmod_rank` 同级有许多 `div` 标签，采用同样的方法就可以让右侧只剩下个人信息了。

![weibo-home-rightmod-after.png][5]


采用这样的方法依次处理所有你不想看到的元素，你的微博便会简洁很多。由于需要更改的样式比较复杂，因此使用了 SASS 进行预处理 CSS，也因此使用了 gulp 来进行自动化构建。

[本例中的 scss 在这里](https://github.com/PuYart/flat-weibo/blob/master/src/scss/flat-weibo.scss)

> SASS 是一个 CSS 预处理器，它允许选择器嵌套、使用一些简单的逻辑运算进行编写 CSS，功能十分强大，但语法也很简单。
> gulp 是一个前端自动化构建工具，有丰富的插件供你使用，本例中便使用 `gulp-sass` 来编译 scss，使用 `gulp-autoprefixer` 给 css 添加浏览器前缀
> [sass 入门](http://www.w3cplus.com/sassguide/)/[gulp.js 入门](http://www.w3cplus.com/sassguide/)

### 开发 & 构建

- 安装依赖
  - `npm install`
- 开发
  - `npm run dev`
- 构建
  - `npm run build`

## 0x04. TODO

- 添加自定义主题色
- 添加更改布局
- 添加模块显示/隐藏选择

## 0x05. 学习参考资料

[Chrome 扩展及应用开发](http://www.ituring.com.cn/minibook/950)
[Chrome 开发文档中文版](http://open.chrome.360.cn/extension_dev/overview.html)


  [1]: https://segmentfault.com/img/bVtUTu
  [2]: https://segmentfault.com/img/bVtUR6
  [3]: https://segmentfault.com/img/bVtUSj
  [4]: https://segmentfault.com/img/bVtUSI
  [5]: https://segmentfault.com/img/bVtUSV
