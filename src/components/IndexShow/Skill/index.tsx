import React, { useRef, useEffect } from "react";

import { renderSkillKeywordsChart } from "./utils";

import "./index.less";

const SkillShow = () => {
  const skillChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    renderSkillKeywordsChart(skillChartRef.current!);
  }, []);

  return (
    <div className="container show skill-show">
      <h3 className="show-title serif">
        <p>我热爱编程</p>
        <p>相信优雅的代码和艺术可以改变人们的生活</p>
      </h3>

      <h3 className="show-title serif">
        <p>我钟爱挑战</p>
        <p>认为不断尝试和勇于探险可以让我们成长</p>
      </h3>

      <div className="skill-chart-container">
        <div ref={skillChartRef} className="skill-chart" />
      </div>
    </div>
  );
};

export default SkillShow;
