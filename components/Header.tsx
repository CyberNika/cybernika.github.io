import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const menus = [
    {
      id: "HOME",
      title: t("header.nav.home"),
      link: "/",
      isActive: () => router.pathname === "/",
    },
    // { id: 'BLOG', title: t('header.nav.blog'), link: '/blog', isActive: () => router.pathname.startsWith('/blog') },
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
    <header className="wrapper z-30 bg-light-soft dark:bg-slate-800 bg-opacity-98 dark:bg-opacity-98 flex justify-between items-center">
      <Link
        href="/"
        // lt-sm="whitespace-pre-line leading-none"
        // p="x-2 y-0.5"
        // bg-brand rounded-lg
        // font-bold font-mono
        // text-sm text-white italic
        // hover:opacity-80
        // sm:text-md
        // style="word-spacing: -0.3em;"
        title="t('header.name')"
      >
        {t("header.slogan")}
      </Link>

      <nav className="flex overflow-x-hidden">
        <ul className="ml-5 flex overflow-x-auto whitespace-nowrap items-center">
          {menus.map((item) => (
            <li key={item.id} className="not-last:mr-5">
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="ml-5 flex items-center">
          <li
            className="not-last:mr-5 opacity-50 cursor-pointer hover:opacity-100 hover:font-bold i-carbon-sun dark:i-carbon-moon"
            title={t("header.button.toggle-mode")}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
