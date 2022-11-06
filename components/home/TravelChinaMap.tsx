import { CSSProperties, useEffect, useRef } from "react";
import classNames from "classnames";

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

  return <div ref={mapChartRef} className={classNames(className)} style={style} />;
};

export default ChinaTravelMap;
