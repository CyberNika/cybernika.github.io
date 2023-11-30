import React, { FC, useMemo, useState } from "react";
import { SunOne, Moon } from "@icon-park/react";
import { Link } from "gatsby";

import LOGO from '@/assets/icons/logo.png';

import "./index.less";

const MENUS = [
  { id: "HOME", title: "首页", link: "/", exact: false },
  // { id: "BLOG", title: "博客", link: "/blog" },
  // { id: "GALLERY", title: "作品", link: "/gallery" },
  { id: "ABOUT", title: "关于", link: "/about" },
  { id: "SAY_HI", title: "留言", link: "/#say-hi" },
];

const Layout: FC = ({ location, children }) => {
  const [theme, setTheme] = useState("light");

  const isDark = useMemo(() => theme === "dark", [theme]);

  const switchTheme = () => {
    const targetTheme = isDark ? "light" : "dark";

    setTheme(targetTheme);
    document.documentElement.classList.toggle("dark");
  };

  const origin = typeof window !== "undefined" ? window.location.origin : ""
  const host = typeof window !== "undefined" ? window.location.host : ""

  return (
    <div className="layout">
      <header className="header container">
        <Link to="/" className="header-left">
          <img src={LOGO} className="header-logo" />

          <h3 className="header-title">CYBER NIKA</h3>
        </Link>

        <nav className="header-nav">
          <ul className="header-menus">
            {MENUS.map((item) => (
              <li className="header-menu" key={item.id}>
                <Link
                  className="header-menu-link"
                  activeClassName="header-menu-link-active"
                  to={item.link}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="header-actions">
            <li className="header-action" onClick={switchTheme}>
              {isDark ? <SunOne /> : <Moon />}
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">{children}</main>

      <footer className="footer container">
        <span className="copyright">
          © 2017-2023 | <a href={origin}>{host.toUpperCase()}</a> |&nbsp;
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
            京ICP备18064894号-1
          </a>
        </span>

        <span className="mono author">
          Created with ❤ by{" "}
          <a href="https://github.com/CyberNika" target="__blank">
            Nika
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Layout;
