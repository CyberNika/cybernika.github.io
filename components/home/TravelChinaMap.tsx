import { CSSProperties, useEffect, useRef } from "react";
import cn from "classnames";

import { renderChinaTravelMap } from "./utils/travel";

interface ChinaTravelMapProps {
  className?: string;
  style?: CSSProperties;
}

const ChinaTravelMap = ({ className, style }: ChinaTravelMapProps) => {
  const mapChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mapChart = renderChinaTravelMap(mapChartRef.current!);

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

export default ChinaTravelMap;
