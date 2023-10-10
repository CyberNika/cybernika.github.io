import Image from "next/image";
import cn from "classnames";
import { useTranslation } from "next-i18next";

import config from "@/config";

const PHOTOS = config.data.gallery.homePhotos;

const HomePhoto = () => {
  const { t } = useTranslation("home");

  return (
    <div className="home-section text-center mb-10">
      <h3 className="home-section-title">
        <p>
          {t("photography.title.soul-and-body")}
          <span className="home-section-title-magic">
            {t("photography.title.one-the-way")}
          </span>
        </p>
        <p>{t("photography.title.together")}</p>
      </h3>

      <ul
        className={cn(
          "mt-10 -mx-1",
          "flex justify-center flex-wrap",
          "animation: 4s linear infinite alternate slideFlow;",
          "text-lg text-center lg:text-xl",
        )}
      >
        {PHOTOS.map((item, index) => (
          <li
            key={index}
            className={cn(
              "relative m-1",
              "sm:h-20 md:h-25 h-45",
              "rounded-md overflow-hidden",
            )}
          >
            {/* <Image src={item.thumb} alt={item.name} /> */}
            <img src={item.thumb} alt={item.name} />
            <label
              className="absolute bottom-3 left-4 text-white"
              style={{ textShadow: "0 0 6px #333" }}
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
