import { registerMap, use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { MapChart, ScatterChart } from "echarts/charts";
import { TooltipComponent, VisualMapComponent } from "echarts/components";

import config from "@/config";
import echarts from "@/utils/chart";

interface CityOption {
  city: string;
  times: number;
  value: number[];
}

use([
  CanvasRenderer,
  ScatterChart,
  MapChart,
  TooltipComponent,
  VisualMapComponent,
]);

const FOOTPRINTS = config.data.travelMap.footprints;

const makeTravelMapOptions = (data: CityOption[], map: string) => ({
  tooltip: {
    trigger: "item",
    formatter(params: { data: CityOption }) {
      return `${params.data.city}：${params.data.times || 0}`;
    },
  },
  visualMap: {
    min: 0,
    max: 25,
    show: false,
    splitNumber: 5,
    color: ["#d94e5d", "#eac736", "#50a3ba"],
    textStyle: {
      color: "#fff",
    },
  },
  geo: {
    map,
    emphasis: {
      itemStyle: {
        areaColor: "rgba(245, 244, 237, 0.9)",
      },
    },
    itemStyle: {
      areaColor: "rgba(255, 254, 247, 0.8)",
    },
  },
  series: [
    {
      name: "旅行足迹",
      type: "scatter",
      coordinateSystem: "geo",
      data,
    },
  ],
});

export const renderChinaTravelMap = (container: HTMLElement) => {
  const chart = echarts.init(container);

  import("./map/china.json").then(({ default: data }) => {
    registerMap("china", data as any);

    const chartData = Object.entries(FOOTPRINTS)
      .filter(([_, v]) => v.country === "China")
      .map(([k, v]) => ({
        value: [...v.geo, v.value],
        times: v.value,
        city: k,
      }));

    chartData.sort((a, b) => a.value[2] - b.value[2]);

    const option = makeTravelMapOptions(chartData, "china");

    chart.setOption(option);
  });

  return chart;
};

export const renderWorldTravelMap = (container: HTMLElement) => {
  const chart = echarts.init(container);

  import("./map/world.json").then(({ default: data }) => {
    registerMap("world", data as any);

    const chartData = Object.entries(FOOTPRINTS).map(([k, v]) => ({
      value: [...v.geo, v.value],
      times: v.value,
      city: k,
    }));

    chartData.sort((a, b) => a.value[2] - b.value[2]);

    const option = makeTravelMapOptions(chartData, "world");

    chart.setOption(option);
  });

  return chart;
};
