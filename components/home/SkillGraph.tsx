import { CSSProperties, useEffect, useRef } from "react";
import cn from "classnames";

import { renderSkillGraph } from "./utils/skill";

interface ChinaTravelMapProps {
  className?: string;
  style?: CSSProperties;
}

const ChinaTravelMap = ({ className, style }: ChinaTravelMapProps) => {
  const skillGraphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillGraph = renderSkillGraph(skillGraphRef.current!);

    const handleResize = () => {
      skillGraph.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={skillGraphRef} className={cn(className)} style={style} />;
};

export default ChinaTravelMap;
