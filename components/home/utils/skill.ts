import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GraphChart } from "echarts/charts";
import {} from "echarts/components";

import config from "@/config";
import echarts from "@/utils/chart";

use([CanvasRenderer, GraphChart]);

const SKILLS = config.data.skillGraph.skills;

export const renderSkillGraph = (container: HTMLElement) => {
  const chart = echarts.init(container);

  const data = [];
  const links = [];
  const categories = [];

  for (let i = 0; i < SKILLS.length; i++) {
    const current = SKILLS[i];
    const target = {
      name: current.name,
      category: current.category,
      x: current.x || 0,
      y: current.y || 0,
      symbolSize: current.symbolSize || 10,
    };

    const link = {
      source: current.name,
      target: current.category,
      lineStyle: {},
    };

    if (!current.category) {
      if (categories.length) {
        link.target = categories[categories.length - 1].name;
        link.lineStyle = {
          color: "rgba(128, 128, 128, 0.3)",
        };
      }

      categories.push({ name: current.name });
    }

    data.push(target);
    links.push(link);
  }

  const option = {
    series: [
      {
        name: "技术关键词",
        type: "graph",
        data,
        links,
        categories,
        emphasis: {
          focus: "adjacency",
        },
        label: {
          show: true,
          position: "top",
        },
      },
    ],
  };

  chart.setOption(option);

  return chart;
};
