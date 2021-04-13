import axios from "axios";

import echarts, { ECOption } from "@/utils/chart";

const MAP_DATA_URLS = {
  china: "https://unpkg.com/echarts@4.9.0/map/json/china.json",
  world: "https://unpkg.com/echarts@4.9.0/map/json/world.json",
};

const TRAVEL_FOOTPRINT = {
  /**
   * 亚洲
   */

  // 中国
  西安: {
    country: "China",
    value: 12,
    geo: [108.948024, 34.263161],
  },
  鄂尔多斯: {
    country: "China",
    value: 1,
    geo: [109.99029, 39.817179],
  },
  丽江: {
    country: "China",
    value: 1,
    geo: [100.233026, 26.872108],
  },
  大理: {
    country: "China",
    value: 1,
    geo: [100.225668, 25.589449],
  },
  迪庆: {
    country: "China",
    value: 1,
    geo: [99.706463, 27.826853],
  },
  杭州: {
    country: "China",
    value: 2,
    geo: [120.153576, 30.287459],
  },
  重庆: {
    country: "China",
    value: 1,
    geo: [106.504962, 29.533155],
  },
  洛阳: {
    country: "China",
    value: 20,
    geo: [112.434468, 34.663041],
  },
  郑州: {
    country: "China",
    value: 4,
    geo: [113.665412, 34.757975],
  },
  武汉: {
    country: "China",
    value: 2,
    geo: [114.298572, 30.584355],
  },
  天津: {
    country: "China",
    value: 4,
    geo: [117.190182, 39.125596],
  },
  秦皇岛: {
    country: "China",
    value: 1,
    geo: [119.586579, 39.942531],
  },
  烟台: {
    country: "China",
    value: 2,
    geo: [121.391382, 37.539297],
  },
  无锡: {
    country: "China",
    value: 1,
    geo: [120.301663, 31.574729],
  },
  金华: {
    country: "China",
    value: 1,
    geo: [119.649506, 29.089524],
  },
  厦门: {
    country: "China",
    value: 1,
    geo: [118.11022, 24.490474],
  },
  深圳: {
    country: "China",
    value: 1,
    geo: [114.085947, 22.547],
  },
  上海: {
    country: "China",
    value: 6,
    geo: [121.472644, 31.231706],
  },

  // 日本
  东京: {
    country: "Japan",
    value: 3,
    geo: [139.669451, 35.799736],
  },
  大阪: {
    country: "Japan",
    value: 1,
    geo: [135.50389, 34.689939],
  },
  京都: {
    country: "Japan",
    value: 1,
    geo: [135.77755, 35.002773],
  },
  奈良: {
    country: "Japan",
    value: 1,
    geo: [135.50389, 34.689939],
  },
  福冈: {
    country: "Japan",
    value: 1,
    geo: [130.405539, 33.590434],
  },
  镰仓: {
    country: "Japan",
    value: 1,
    geo: [139.500703, 35.305921],
  },

  // 新加坡
  新加坡: {
    country: "Singapore",
    value: 1,
    geo: [103.866288, 1.348562],
  },

  // 泰国
  普吉: {
    country: "Thailand",
    value: 1,
    geo: [98.398454, 7.895183],
  },

  // 菲律宾
  马尼拉: {
    country: "Philippines",
    value: 1,
    geo: [121.027129, 14.606398],
  },

  /**
   * 欧洲
   */

  // 俄罗斯
  伊尔库茨克: {
    country: "Russia",
    value: 2,
    geo: [104.245125, 52.298487],
  },

  // 丹麦
  约灵: {
    country: "Denmark",
    value: 1,
    geo: [9.980604, 57.459619],
  },
  奥尔堡: {
    country: "Denmark",
    value: 1,
    geo: [9.925412, 57.040789],
  },
  奥胡斯: {
    country: "Denmark",
    value: 1,
    geo: [10.21057, 56.14252],
  },
  欧登塞: {
    country: "Denmark",
    value: 1,
    geo: [10.394543, 55.390577],
  },
  斯文堡: {
    country: "Denmark",
    value: 1,
    geo: [10.615311, 55.048756],
  },
  哥本哈根: {
    country: "Denmark",
    value: 1,
    geo: [12.429207, 55.66245],
  },

  // 瑞典
  斯德哥尔摩: {
    country: "Sweden",
    value: 1,
    geo: [18.075772, 59.327449],
  },

  // 挪威
  卑尔根: {
    country: "Norway",
    value: 1,
    geo: [5.327851, 60.395009],
  },
  奥达: {
    country: "Norway",
    value: 1,
    geo: [6.546672, 60.065616],
  },
  克里斯蒂安桑: {
    country: "Norway",
    value: 1,
    geo: [8.083405, 58.204513],
  },
  斯塔万格: {
    country: "Norway",
    value: 1,
    geo: [5.729658, 58.967009],
  },
};

const makeTravelMapOptions = (data, map) => ({
  tooltip: {
    trigger: "item",
    formatter(params) {
      return `${params.data.city}：${params.data.times || 0} 次`;
    },
  },
  visualMap: {
    min: 0,
    max: 25,
    show: Boolean(localStorage.getItem("showVisualMap")),
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

export const renderChinaTravelMap = (container: Element) => {
  const chart = echarts.init(container);

  axios.get(MAP_DATA_URLS.china).then(({ data }) => {
    echarts.registerMap("china0", data);

    const chartData = Object.entries(TRAVEL_FOOTPRINT)
      .filter(([_, v]) => v.country === "China")
      .map(([k, v]) => ({
        value: [...v.geo, v.value],
        times: v.value,
        city: k,
      }));

    chartData.sort((a, b) => a.value[2] - b.value[2]);

    const options = makeTravelMapOptions(chartData, "china0");

    chart.setOption(options);
  });

  return chart;
};

export const renderWorldTravelMap = (container: Element) => {
  const chart = echarts.init(container);

  axios.get(MAP_DATA_URLS.world).then(({ data }) => {
    echarts.registerMap("world", data);

    const chartData = Object.entries(TRAVEL_FOOTPRINT).map(([k, v]) => ({
      value: [...v.geo, v.value],
      times: v.value,
      city: k,
    }));

    chartData.sort((a, b) => a.value[2] - b.value[2]);

    const options = makeTravelMapOptions(chartData, "world");

    chart.setOption(options);
  });

  return chart;
};
