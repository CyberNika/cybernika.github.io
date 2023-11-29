import Image from 'next/image';

import { useTranslations } from 'next-intl';

import classNames from 'classnames';

import config from 'config';
import { useMemo } from 'react';

import './SportBall.css';

const SPORTS = config.data.sportBubble;

const HomeSport = () => {
  const t = useTranslations('home');

  const displaySports = useMemo(() => {
    return SPORTS.sports.filter((item) => !!item.value);
  }, []);

  return (
    <div className="home-section content text-center mb-10">
      <h3 className="home-section-title">
        <p>{t('sport.title')}</p>
        <p>{t('sport.try-sport')}</p>
      </h3>

      <ul
        className={classNames(
          'mt-10 mx-auto max-w-lg',
          'flex justify-center flex-wrap  items-center',
          'animate-sway',
          'text-lg text-center lg:text-xl',
        )}
      >
        {displaySports.map((item) => (
          <li
            className={classNames(
              'flex justify-center items-center',
              'm-1 rounded-full border',
              'text-base',
              'ball bubble',
            )}
            style={{ width: item.value * 10, height: item.value * 10 }}
            key={item.name}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeSport;
