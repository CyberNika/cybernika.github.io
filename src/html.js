/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <meta
          name="keywords"
          content="CyberNika,博客,前端,JavaScript,旅行,你好世界,Nika"
          id="metakeywords"
        />
        <meta name="description" content="CyberNika 的个人主页" id="metadesc" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>你好 · 世界 | 你好 · 未来</title>
        <link
          rel="stylesheet"
          href="https://cdn.staticfile.org/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.staticfile.org/gitalk/1.7.2/gitalk.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?c3e3b00b16b6ce2420d4483740e67d54";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();`,
          }}
        />
        <script src="https://cdn.staticfile.org/gitalk/1.7.2/gitalk.min.js" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
