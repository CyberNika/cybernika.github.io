import { MouseEvent } from "react";
import Link from "next/link";
import { DoubleDown } from "@icon-park/react";
import { useTranslation } from "next-i18next";

const HomeHello = () => {
  const { t } = useTranslation("home");

  const goNextPage = (evt: MouseEvent) => {
    evt.preventDefault();
    window.scrollTo({
      top: innerHeight,
    });
  };

  return (
    <div className="home-section h-screen content font-serif">
      <div className="content animate-fade-in animate-count-1 animate-duration-1s">
        <h1 className="font-bold leading-tight text-4xl lg:text-5xl">
          <p>{t("hello.hi-i-am-stephen")}</p>
          <p>
            {t("hello.nice-to-meet-you-here.1")}
            <span className="home-section-title-magic">
              {t("hello.nice-to-meet-you-here.2")}
            </span>
          </p>
        </h1>

        <p className="mt-5 text-xl">{t("hello.who-am-i")}</p>

        <p className="mt-3 text-xl">
          <span>{t("hello.continue-to-next.story-leading")}</span>
          <a className="link" href="" onClick={goNextPage}>
            {t("hello.continue-to-next.story")}
          </a>
          <span>{t("hello.continue-to-next.blog-leading")}</span>
          <Link className="link" href="/blog">
            <span>{t("hello.continue-to-next.blog")}</span>
          </Link>
          <span>{t("hello.continue-to-next.works-leading")}</span>
          <a className="through">{t("hello.continue-to-next.works")}</a>
          <span>{t("hello.continue-to-next.say-hi-leading")}</span>
          <Link className="link" href="/say-hi">
            <span>{t("hello.continue-to-next.say-hi")}</span>
          </Link>
          😉
        </p>
      </div>

      <div
        title={t("hello.learn-more")}
        className="absolute bottom-20 left-2/4 animate-bounce text-lg lg:text-xl px-5 translate-x--1/2 cursor-pointer text-gray-500"
        onClick={goNextPage}
      >
        <DoubleDown theme="outline" size="24" fill="#333" strokeWidth={2} />
      </div>
    </div>
  );
};

export default HomeHello;
