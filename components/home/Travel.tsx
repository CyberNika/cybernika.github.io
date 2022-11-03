import { useState } from "react";
import { TwoTriangles, Planet } from "@icon-park/react";
import cn from "classnames";
import dynamic from "next/dynamic";

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
  const [travelMapType, setTravelMapType] = useState<string>("CHINA");

  return (
    <div className="home-section h-screen text-center">
      <h3 className="home-section-title">
        <p>我想出去走一走</p>
        <p>看看这个大世界</p>
      </h3>

      <div className="mt-6 overflow-hidden whitespace-nowrap h-3/5">
        <TravelChinaMap
          className={cn(
            "inline-block h-full w-full transition-all duration-500",
            travelMapType === "WORLD"
              ? "opacity-0 -translate-x-full"
              : "opacity-1 translate-x-0",
          )}
        />
        <TravelWorldMap
          className={cn(
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
            className={cn(
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
