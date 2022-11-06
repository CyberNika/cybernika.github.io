import { CSSProperties } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { SunOne } from "@icon-park/react";

interface HeaderProps {
  className?: string;
  style?: CSSProperties;
}

const Header = ({ className, style }: HeaderProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const menus = [
    {
      id: "HOME",
      title: t("header.nav.home"),
      link: "/",
      isActive: () => router.pathname === "/",
    },
    {
      id: "BLOG",
      title: t("header.nav.blog"),
      link: "/blog",
      isActive: () => router.pathname.startsWith("/blog"),
    },
    // { id: 'GALLERY', title: t('header.nav.gallery'), link: '/gallery', isActive: () => router.pathname === '/' },
    {
      id: "ABOUT",
      title: t("header.nav.about"),
      link: "/about",
      isActive: () => router.pathname === "/about",
    },
    // { id: 'SAY_HI', title: t('header.nav.say-hi'), link: '/say-hi', isActive: () => router.pathname === '/say-hi' },
  ] as const;

  return (
    <header
      className={classNames(
        "wrapper flex justify-between items-center",
        "z-50 bg-light-soft bg-opacity-98",
        "dark:bg-slate-800 dark:bg-opacity-98",
        className,
      )}
      style={style}
    >
      <Link
        href="/"
        className={classNames(
          "px-2 py-0.5",
          "bg-brand rounded-lg",
          "font-bold font-mono text-sm text-white italic sm:text-md",
          "hover:opacity-80",
          "max-sm:whitespace-pre-line max-sm:leading-none",
        )}
        title={t("header.name")}
      >
        {t("header.slogan")}
      </Link>

      <nav className="flex overflow-hidden">
        <ul className="ml-5 flex overflow-x-auto whitespace-nowrap items-center">
          {menus.map((item) => (
            <li
              key={item.id}
              className="mr-5 last:mr-0 opacity-50 hover:opacity-100 hover:font-bold"
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="ml-5 flex items-center">
          <li
            className="last:mr-5 last:mr-0 opacity-50 cursor-pointer hover:opacity-100 hover:font-bold"
            title={t("header.button.toggle-mode")}
          >
            <SunOne theme="outline" size="20" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
