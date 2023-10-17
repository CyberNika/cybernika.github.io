import * as echarts from 'echarts/core';
import {
  MapChart,
  MapSeriesOption,
  GraphChart,
  GraphSeriesOption,
  ScatterChart,
  ScatterSeriesOption,
} from 'echarts/charts';
import {
  TitleComponent,
  TitleComponentOption,
  GridComponent,
  GridComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  VisualMapComponent,
  VisualMapComponentOption,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
  | MapSeriesOption
  | GraphSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | TooltipComponentOption
  | ScatterSeriesOption
  | VisualMapComponentOption
>;

// 注册必须的组件
echarts.use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  MapChart,
  GraphChart,
  ScatterChart,
  VisualMapComponent,
]);

export default echarts;
