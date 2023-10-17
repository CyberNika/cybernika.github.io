import Image from 'next/image';

import { useTranslations } from 'next-intl';

import classNames from 'classnames';

import config from 'config';

const PHOTOS = config.data.gallery.homePhotos;

const HomePhoto = () => {
  const t = useTranslations('home');

  return (
    <div className="home-section content text-center mb-10">
      <h3 className="home-section-title">
        <p>
          {t('photography.title.soul-and-body')}
          <span className="home-section-title-magic">
            {t('photography.title.one-the-way')}
          </span>
        </p>
        <p>{t('photography.title.together')}</p>
      </h3>

      <ul
        className={classNames(
          'mt-10 -mx-1',
          'flex justify-center flex-wrap',
          'animate-sway',
          'text-lg text-center lg:text-xl',
        )}
      >
        {PHOTOS.map((item, index) => (
          <li
            key={index}
            className={classNames(
              'relative m-1',
              'sm:h-24 md:h-32 h-48',
              'rounded overflow-hidden',
            )}
          >
            {/* <Image src={item.thumb} alt={item.name} /> */}
            <img src={item.thumb} alt={item.name} />
            <label
              className="absolute bottom-3 left-4 text-white"
              style={{ textShadow: '0 0 6px #333' }}
            >
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePhoto;
