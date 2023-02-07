import { useState } from "react";
import { TwoTriangles, Planet } from "@icon-park/react";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";

const TravelChinaMap = dynamic(() => import("./TravelChinaMap"), {
  ssr: false,
});
const TravelWorldMap = dynamic(() => import("./TravelWorldMap"), {
  ssr: false,
});

const TRAVEL_MAP_TYPES = [
  { value: "CHINA", title: "中国", icon: TwoTriangles },
  { value: "WORLD", title: "世界", icon: Planet },
];

const HomeTravel = () => {
  const { t } = useTranslation("home");

  const [travelMapType, setTravelMapType] = useState<string>("CHINA");

  return (
    <div className="home-section h-screen text-center">
      <h3 className="home-section-title">
        <p>{t("travel.go-for-a-walk")}</p>
        <p>{t("travel.look-at-the-world")}</p>
      </h3>

      <div className="mt-6 overflow-hidden whitespace-nowrap h-3/5">
        <TravelChinaMap
          className={classNames(
            "inline-block h-full w-full transition-all duration-500",
            travelMapType === "WORLD"
              ? "opacity-0 -translate-x-full"
              : "opacity-1 translate-x-0",
          )}
        />
        <TravelWorldMap
          className={classNames(
            "inline-block h-full w-full transition-all duration-500",
            travelMapType === "WORLD"
              ? "opacity-1  -translate-x-full"
              : "opacity-0 translate-x-0",
          )}
        />
      </div>

      <ul className="mt-2 text-lg text-center lg:text-xl">
        {TRAVEL_MAP_TYPES.map((item) => (
          <li
            key={item.value}
            className={classNames(
              item.value === travelMapType ? "opacity-80" : "opacity-20",
              "p-1 mx-2 inline-block leading-1 cursor-pointer",
              "hover:opacity-80",
            )}
          >
            <item.icon
              title={item.title}
              onClick={() => {
                setTravelMapType(item.value);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeTravel;
