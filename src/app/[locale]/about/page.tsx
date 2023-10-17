'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import classNames from 'classnames';

import './page.css';

const MePage = () => {
  const t = useTranslations('about');

  return (
    <div className="content font-serif pt-header">
      <h1 className="page-title">{t('title')}</h1>

      <div
        className={classNames(
          'content xl:flex',
          'px-5 py-6 lg:px-10 lg:py-8 xl:px-12 xl:py-10',
          'rounded-lg bg-amber-50 dark:bg-slate-700',
        )}
      >
        <div
          className={classNames(
            'sm:float-left md:float-left xl:float-none',
            'w-30 md:w-2/5',
            'mb-3 sm:mr-6 sm:mb-0',
          )}
        >
          <img src="/me.jpg" className="rounded" />
        </div>

        <div className="xl:flex-1 text-lg font-serif">
          {t('profile')
            .split('\n')
            .map((item, index) => (
              <p className="mb-3" key={index}>
                {item}
              </p>
            ))}
          <p>
            <span>{t('contact.sayHiPrefix')}</span>
            <Link className="link" href="/say-hi">
              <span className="through">{t('contact.sayHi')}</span>
            </Link>
            <span>{t('contact.emailPrefix')} </span>
            <a className="link" href={`mailto:${t('contact.email')}`}>
              {t('contact.email')}
            </a>
            <span> {t('contact.emailSuffix')}</span>
          </p>
        </div>
      </div>

      <div className="wrapper-b" />
    </div>
  );
};

export default MePage;
