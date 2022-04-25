import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { GraphChart } from 'echarts/charts'
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components'

use([
  CanvasRenderer,
  GraphChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  VisualMapComponent,
])

const SKILLS = [
  /**
   * 一级分类
   */
  { name: '运动', x: 0, y: -1 },
  { name: '服务端', x: 20, y: 1 },
  { name: 'Web 前端', x: 45, y: -3 },
  { name: '客户端', x: 70, y: 0 },
  { name: '游戏', x: 80, y: -3 },
  { name: '艺术', x: 100, y: 2 },

  /**
   * Web 前端
   */
  { name: 'JavaScript', category: 'Web 前端', x: 58, y: 6 },
  { name: 'Node.js', category: 'JavaScript', x: 50, y: 15 },
  { name: 'jQuery', category: 'JavaScript', x: 60, y: -2 },
  { name: 'React', category: 'JavaScript', x: 57, y: 18 },
  { name: 'Vue', category: 'JavaScript', x: 63, y: 16 },
  { name: 'React Native', category: 'JavaScript', x: 68, y: 9 },
  { name: 'Electron', category: 'JavaScript', x: 72, y: 15 },

  { name: 'HTML', category: 'Web 前端', x: 35, y: -10 },
  { name: 'Pug', category: 'HTML', x: 42, y: -15 },

  { name: 'CSS', category: 'Web 前端', x: 37, y: 10 },
  { name: 'SCSS', category: 'CSS', x: 34, y: 18 },
  { name: 'Less', category: 'CSS', x: 30, y: 6 },
  { name: 'Stylus', category: 'CSS', x: 43, y: 8 },
  { name: 'PostCSS', category: 'CSS', x: 30, y: -2 },

  { name: '小程序', category: 'Web 前端', x: 50, y: -12 },
  { name: 'Taro', category: '小程序', x: 58, y: -15 },
  { name: 'mpvue', category: '小程序', x: 56, y: -8 },

  { name: '微前端', category: 'Web 前端', x: 50, y: 8 },

  /**
   * 服务端
   */
  { name: 'Golang', category: '服务端', x: 15, y: -13 },
  { name: 'Java', category: '服务端', x: 25, y: -10 },
  { name: 'PHP', category: '服务端', x: 23, y: 10 },
  { name: 'Python', category: '服务端', x: 12, y: 4 },

  /**
   * 客户端
   */
  { name: 'Flutter', category: '客户端', x: 71, y: -10 },
  { name: 'Kotlin', category: '客户端', x: 82, y: 15 },
  { name: 'Swift', category: '客户端', x: 78, y: 6 },

  /**
   * 游戏
   */
  { name: 'Cocos Creator', category: '游戏', x: 82, y: -8 },

  /**
   * 艺术
   */
  { name: '绘画', category: '艺术', x: 105, y: 6 },
  { name: 'Procreate', category: '绘画', x: 102, y: 15 },

  { name: '摄影', category: '艺术', x: 94, y: -2 },
  { name: '泼辣修图', category: '摄影', x: 98, y: -6 },
  { name: 'Lightroom', category: '摄影', x: 90, y: -12 },

  { name: '设计', category: '艺术', x: 95, y: 10 },
  { name: 'Axure', category: '设计', x: 100, y: 11 },
  { name: 'Sketch', category: '设计', x: 92, y: 15 },
  { name: 'Adobe XD', category: '设计', x: 90, y: 5 },
  { name: 'Figma', category: '设计', x: 86, y: 8 },

  { name: '音乐', category: '艺术', x: 105, y: -5 },
  { name: '口琴', category: '音乐', x: 102, y: -12 },
  { name: '乌克丽丽', category: '音乐', x: 108, y: -14 },

  /**
   * 运动
   */
  { name: '滑雪', category: '运动', x: 10, y: 10 },
  { name: '滑板', category: '运动', x: 10, y: -5 },
  { name: '跑酷', category: '运动', x: 5, y: -5 },
  { name: 'Poppin', category: '运动', x: 5, y: -15 },
]

export const initSkillGraph = () => {
  const data = []
  const links = []
  const categories = []

  for (let i = 0; i < SKILLS.length; i++) {
    const current = SKILLS[i]
    const target = {
      name: current.name,
      category: current.category,
      x: current.x || 0,
      y: current.y || 0,
      symbolSize: 10,
    }

    const link = {
      source: current.name,
      target: current.category,
      lineStyle: {},
    }

    if (!current.category) {
      if (categories.length) {
        link.target = categories[categories.length - 1].name
        link.lineStyle = {
          color: 'rgba(128, 128, 128, 0.3',
        }
      }

      target.symbolSize = 14

      categories.push({ name: current.name })
    }

    data.push(target)
    links.push(link)
  }

  const option = reactive({
    series: [
      {
        name: '技术关键词',
        type: 'graph',
        symbolSize: 10,
        data,
        links,
        categories,
        emphasis: {
          focus: 'adjacency',
        },
        label: {
          show: true,
          position: 'top',
        },
      },
    ],
  })

  return option
}
