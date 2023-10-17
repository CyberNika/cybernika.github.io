'use client';

import { CSSProperties } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { useTranslations } from 'next-intl';
import classNames from 'classnames';

import { SunOne } from '@icon-park/react';

interface HeaderProps {
  className?: string;
  style?: CSSProperties;
}

const Header = ({ className, style }: HeaderProps) => {
  const pathname = usePathname();
  const t = useTranslations();

  const menus = [
    {
      id: 'HOME',
      title: t('header.nav.home'),
      link: '/',
      isActive: () => pathname === '/',
    },
    {
      id: 'BLOG',
      title: t('header.nav.blog'),
      link: '/blog',
      isActive: () => pathname.startsWith('/blog'),
    },
    {
      id: 'WORKS',
      title: t('header.nav.works'),
      link: '/works',
      isActive: () => pathname.startsWith('/works'),
    },
    {
      id: 'Books',
      title: t('header.nav.books'),
      link: '/books',
      isActive: () => pathname.startsWith('/books'),
    },
    {
      id: 'GALLERY',
      title: t('header.nav.gallery'),
      link: '/gallery',
      isActive: () => pathname === '/gallery',
    },
    {
      id: 'ABOUT',
      title: t('header.nav.about'),
      link: '/about',
      isActive: () => pathname === '/about',
    },
  ] as const;

  return (
    <header
      className={classNames(
        'wrapper flex justify-between items-center',
        'z-50 backdrop-blur bg-light-soft/90',
        'dark:bg-slate-800/90',
        className,
      )}
      style={style}
    >
      <Link
        href="/"
        className={classNames(
          'px-2 py-0.5',
          'bg-brand rounded-lg',
          'font-bold font-mono text-sm text-white italic sm:text-md',
          'hover:opacity-80',
          'max-sm:whitespace-pre-line max-sm:leading-none',
        )}
        title={t('header.name')}
      >
        {t('header.slogan')}
      </Link>

      <nav className="flex overflow-hidden">
        <ul className="ml-5 flex overflow-x-auto whitespace-nowrap items-center">
          {menus.map((item) => (
            <li
              key={item.id}
              className={classNames(
                'mr-5 last:mr-0 opacity-50 hover:opacity-100 hover:font-bold',
                {
                  'font-bold': item.isActive(),
                  'opacity-100': item.isActive(),
                },
              )}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="ml-5 flex items-center">
          <li
            className="last:mr-5 last:mr-0 opacity-50 cursor-pointer hover:opacity-100 hover:font-bold"
            title={t('header.button.toggle-mode')}
          >
            <SunOne theme="outline" size="20" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
