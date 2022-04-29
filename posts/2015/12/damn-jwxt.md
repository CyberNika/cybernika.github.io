---
title: 论前端工程师如何应对西电教学评估系统
date: 2015-12-02 02:33:23
categories: [art]
tags: [Chrome-Extension, JavaScript]
---
## 0x00. 前言
这几天又要进行教学评估了，本来吧可能出于“*为了教学质量* ”这种神圣重要而高贵的目的(姑且这么认为吧 :))，但是但是你网站做得那么搓就是你的错了。选一个老师的按钮那么小，你是要谁点；选优良中的按钮那么小，你是要谁点，关键是只能点 `radio`，点击文字却是没有用的，这就让人忍不了了。作为一个前端工程师，怎么能够忍受这种“奇耻大辱”，于是决定试一试，没想到还真成功了，也就方便了许多。

PS. 不要问我代码质量为什么这么搓我是不会告诉你这是上个学期用了几个小时从压根没有接触过 Chrome 插件开发到开发成功的后来也就懒得改了（逃。

## 0x01. 快速开始
如果你只是想要快速进行教学评估而不想使用插件或是不想知道原理的话，可以在控制台里执行下面这段代码，你会发现问卷已经自动填写完整，甚至自动提交。

- 控制台
  在浏览器中按 `F12` 会出现下图这样的东西，点击 `console` 进入控制台。
  <!-- more -->

  ![控制台][1]

- 执行
  复制下面的代码，敲击回车便可快速填选。

  ```js
  const radios = window.frames.bottomFrame.frames.mainFrame.document.getElementsByTagName('table')[4].getElementsByTagName('table')[6].getElementsByTagName('table')[0].getElementsByTagName('input')
  const textArea = window.frames.bottomFrame.frames.mainFrame.document.getElementsByTagName('textarea')
  const buttons = window.frames.bottomFrame.frames.mainFrame.document.getElementsByTagName('img')

  for (const i in radios) {
    if (/^[0-9.]{1,}_1$/.test(radios[i].value) && !radios[i].checked)
      radios[i].checked = true

  }

  textArea[0].value = '很好！'
  textArea[1].value = '很好！'

  // 你可以取消下面这段注释，这样在速选之后还能自动提交
  /* for (var i in buttons) {
    if (buttons[i].title == "提交") {
      buttons[i].click();
    }
  } */
  ```
- 声明
  你必须在 **问卷评估** 页才可以成功，也就是下面这个页面。

  ![问卷评估][2]

## 0x02. Chrome 插件
- 获取
  [点这里下载插件](http://puyart.net/static/damn-jwxt.crx)
- 使用

 ![插件预览][3]

 由于 Chrome 目前禁止第三方插件的安装，所以你需要在 Chrome 里依次点击 `菜单` `更多工具` `扩展程序` 然后打开 `开发者模式`，将插件拖进来然后会自动安装。

 进入 **问卷评估** 页，点击那个 luffy 的头像，打开插件。你可以填选优良中的比例和评价内容，点击 *pikachuu* 即可。过程参见下图。

 ![使用过程][4]

- 源码
 [GitHub - PuYart/flavor-chrome:damn-jwxt](https://github.com/PuYart/flavor-chrome/tree/master/damn-jwxt)
- 目录
 ```
 damn-jwxt/
├── css/
├── icon/
├── js/
├── manifest.json
└── popup.html
 ```
  - `popup.html`
  插件中的弹窗，也就是打开插件是看到的那个页面。
  - `popup.js`
  插件弹出层的逻辑，获取数据并开始注入
  ```js
  document.addEventListener('DOMContentLoaded', () => { // 监听 DOM 加载
    // 不要问我为什么是 Object 而不是 Array，说实话我也不知道（逃
    const rate = {}; const comment = {}; const req = {}; let reqStr

    // 预置评价内容
    const comments = [
      '课程内容很充实，教师教学很风趣。',
      '老师很好！教得贼棒了!',
      '不错不错',
      '好老师',
      '真是一门好课啊！很喜欢呢~',
      '希望加油！'
    ]

    // 两个评价框
    const eleComment1 = document.getElementsByName('comment-1')[0]
    const eleComment2 = document.getElementsByName('comment-2')[0]

    // 从预置评价内容中随机抽取并赋值
    eleComment1.value = comments[parseInt(Math.random() * comments.length)]
    eleComment2.value = comments[parseInt(Math.random() * comments.length)]

    // pikachuu 按钮的点击事件
    document.getElementById('go').onclick = function() {
      // 获取四个选项的比例，这个地方写的是在是太挫了。。。
      rate[0] = document.getElementsByName('a')[0].value
      rate[1] = document.getElementsByName('b')[0].value
      rate[2] = document.getElementsByName('c')[0].value
      rate[3] = document.getElementsByName('d')[0].value

      // 获取评价内容
      comment[0] = eleComment1.value
      comment[1] = eleComment2.value

      // 打包数据
      req[0] = rate
      req[1] = comment
      reqStr = JSON.stringify(req)

      // 页面注入脚本，调用的是 aHa.js 中的 fastChoose()
      chrome.tabs.executeScript(null, {
        code: `fastChoose(${reqStr});`
      })
    }
  })
  ```
  - `aHa.js`
  Content Scrip，被注入到页面中的核心逻辑，也是真正执行的代码
  ```js
  function fastChoose(data) {
    const rate = data[0]
    const comments = data[1]

    // 获取各种元素
    const mainFrame = window.frames.bottomFrame.frames.mainFrame
    const textArea = mainFrame.document.getElementsByTagName('textarea')
    const radiosTable = mainFrame.document.getElementsByTagName('table')[4].getElementsByTagName('table')[6].getElementsByTagName('table')[0]
    const buttons = mainFrame.document.getElementsByTagName('img')

    for (var i = 0, rateSum = 0; i < 4; i++)
      rateSum += parseInt(rate[i])

    radioChoose(radiosTable, rateSum, rate) // 选择优良中差
    textAreaFill(textArea, comments) // 填写评价
    formSubmit(buttons) // 提交
  }

  // 单选选择
  function radioChoose(radiosTable, rateSum, rate) {
    const trs = radiosTable.getElementsByTagName('tr')
    let radios, random

    // 这里是核心代码，根据比例选择
    for (let i = 0; i < trs.length; i++) {
      var index
      if (!trs[i].hasAttribute('align')) {
        radios = trs[i].getElementsByTagName('input')
        if (!radios.length)
          continue

        random = Math.ceil(Math.random() * rateSum)
        if (random <= parseInt(rate[0]))
          index = 0

        else if (random <= parseInt(rate[0]) + parseInt(rate[1]))
          index = 1

        else if (random <= parseInt(rate[0]) + parseInt(rate[1]) + parseInt(rate[2]))
          index = 2

        else
          index = 3

        radios[index].checked = true
      }
    }
  }

  // 填充评价内容
  function textAreaFill(textArea, comments) {
    for (let i = 0; i < 2; i++)
      textArea[i].value = comments[i]

  }

  // 提交
  function formSubmit(buttons) {
    for (const i in buttons) {
      if (buttons[i].title == '提交')
        buttons[i].click()

    }
  }
  ```
  - `background.js`
  这是直接 copy 别人的，应该是用于通信和注入的
  ```js
  /**
 * 注册标签页更新时的事件
 * 这里调用了initialize()事件，把func.js注入当前标签页中
 */
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    initialize(tabId)
  })

  /**
   * 注册切换标签页时的事件
   * 这里调用了initialize()事件，把func.js注入当前标签页中
   */
  chrome.tabs.onSelectionChanged.addListener((tabId, selectInfo) => {
    initialize(tabId)
  })

  /**
   * 初始化方法 ，注入func.js事件
   * @param {Object} tabId
   */
  function initialize(tabId) {
    chrome.tabs.executeScript(tabId, { file: 'js/aHa.js' })
  }

  /**
   * 启动一个chrome.extension.onRequest事件监听器用来处理消息
   */
  chrome.extension.onRequest.addListener(
    (request, sender, sendResponse) => {
      chrome.tabs.executeScript(null, { code: `fastChoose(${request});` })
    })
  ```
- TODO/问题
  - 提高代码质量
  - 应该可以在教师列表页进行一键评教的，这样就不用一个个点选老师了

- 参考
  [Chrome 插件开发文档](http://open.chrome.360.cn/extension_dev/overview.html)

[1]: ../../assets/damn-jwxt/console.png
[2]: ../../assets/damn-jwxt/wjpg.png
[3]: ../../assets/damn-jwxt/damn-jwxt.png
[4]: ../../assets/damn-jwxt/example.gif
