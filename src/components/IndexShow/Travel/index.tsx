import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { TwoTriangles, Planet } from "@icon-park/react";

import { renderChinaTravelMap, renderWorldTravelMap } from "./utils";

import "./index.less";

const TRAVEL_MAP_TYPES = [
  { value: "CHINA", title: "中国", icon: TwoTriangles },
  { value: "WORLD", title: "世界", icon: Planet },
];

const TravelShow = () => {
  const [travelMapType, setTravelMapType] = useState<string>("CHINA");

  const travelMapChinaRef = useRef<HTMLDivElement>(null);
  const travelMapWorldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    renderChinaTravelMap(travelMapChinaRef.current!);
    renderWorldTravelMap(travelMapWorldRef.current!);
  }, []);

  return (
    <div className="container show travel-show">
      <h3 className="show-title serif">
        <p>我想出去走一走</p>
        <p>看看这个大世界</p>
      </h3>

      <div className="travel-map-wrapper">
        <div
          ref={travelMapChinaRef}
          className={classNames({
            "travel-map-item": true,
            "travel-map-item-active": travelMapType === "CHINA",
            "travel-map-item-translate": travelMapType === "WORLD",
          })}
          style={
            travelMapType === "WORLD"
              ? {
                  opacity: 0,
                  transform: `translateX(-100%)`,
                }
              : undefined
          }
        />
        <div
          ref={travelMapWorldRef}
          className={classNames({
            "travel-map-item": true,
            "travel-map-item-active": travelMapType === "WORLD",
            "travel-map-item-translate": travelMapType === "WORLD",
          })}
        />
      </div>

      <div className="travel-map-switch">
        {TRAVEL_MAP_TYPES.map((item) => (
          <item.icon
            key={item.value}
            title={item.title}
            className={classNames({
              "travel-map-switch-icon": true,
              "travel-map-switch-icon-active": travelMapType === item.value,
            })}
            onClick={() => {
              setTravelMapType(item.value);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TravelShow;
