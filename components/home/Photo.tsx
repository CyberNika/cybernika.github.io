import Image from "next/image";
import classNames from "classnames";

import config from "@/config";

const PHOTOS = config.data.gallery.homePhotos;

const HomePhoto = () => {
  return (
    <div className="home-section h-screen text-center">
      <h3 className="home-section-title">
        <p>
          灵魂和身体
          <span className="home-section-title-magic">总有一个要在路上</span>
        </p>
        <p>而我，更想让它们相伴而行</p>
      </h3>

      <ul
        className={classNames(
          "mt-10 -mx-1",
          "flex justify-center flex-wrap",
          "animation: 4s linear infinite alternate slideFlow;",
          "text-lg text-center lg:text-xl",
        )}
      >
        {PHOTOS.map((item, index) => (
          <li
            key={index}
            className={classNames(
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
