import { CSSProperties, useEffect, useRef } from "react";
import cn from "classnames";

import { renderWorldTravelMap } from "./utils/travel";

interface WorldTravelMapProps {
  className?: string;
  style?: CSSProperties;
}

const WorldTravelMap = ({ className, style }: WorldTravelMapProps) => {
  const mapChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mapChart = renderWorldTravelMap(mapChartRef.current!);

    const handleResize = () => {
      mapChart.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mapChartRef} className={cn(className)} style={style} />;
};

export default WorldTravelMap;
