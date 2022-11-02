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
          className="h-full"
          style={
            travelMapType === "WORLD"
              ? {
                  opacity: 0,
                  transform: `translateX(-100%)`,
                }
              : undefined
          }
        />
        <TravelWorldMap
          className="h-full"
          // style={
          //   travelMapType === "WORLD"
          //     ? {
          //         opacity: 0,
          //         transform: `translateX(-100%)`,
          //       }
          //     : undefined
          // }
        />
      </div>

      <ul className="mt-2 text-lg text-center lg:text-xl">
        {TRAVEL_MAP_TYPES.map((item) => (
          <li key={item.value}>
            <item.icon
              title={item.title}
              className={cn(
                item.value === travelMapType ? "opacity-80" : "opacity-20",
                "p-1 mx-2 inline-block leading-1 cursor-pointer",
                "hover:opacity-80",
              )}
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
