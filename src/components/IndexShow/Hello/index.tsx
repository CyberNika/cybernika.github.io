import React, { MouseEvent } from "react";
import { DoubleDown } from "@icon-park/react";
import { Link } from "gatsby";

import "./index.less";

const HelloShow = () => {
  const goNextPage = (evt: MouseEvent) => {
    evt.preventDefault();

    window.scrollTo({
      top: innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="container hello-show">
      <div className="content animate__animated animate__fadeIn animate__slow">
        <h1 className="title">
          <p>嗨，我是 Stephen</p>
          <p>
            很开心在这里<span className="meet-you">遇见你 🎈</span>
          </p>
        </h1>

        <p className="introduction serif">
          我是一个斜杠青年，现居北京，以软件开发为生。梦想成为一条咸鱼，热爱旅行和摄影，对写作和设计都有很大兴趣。正在为未来的角色转变做些努力，希望有一天可以和她一起带只狗子看看这个世界。
        </p>

        <p className="introduction serif">
          继续往下，了解更多我的
          <a href="" className="anchor" onClick={goNextPage}>
            故事
          </a>
          。也可以访问我的
          <a className="anchor disabled">博客</a>
          ，或者看看我的
          <a className="anchor disabled">作品</a>
          ，或是简单打个
          <Link className="anchor" to="/#say-hi">
            招呼
          </Link>
          &nbsp;😉
        </p>
      </div>

      <div onClick={goNextPage} className="indicator" title="了解更多我的故事">
        <DoubleDown className="indicator-icon" />
      </div>
    </div>
  );
};

export default HelloShow;
