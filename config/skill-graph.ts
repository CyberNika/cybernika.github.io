const skills = [
  /**
     * 一级分类
     */
  { name: '运动', x: 5, y: -2, symbolSize: 14 },
  { name: '服务端', x: 22, y: 1, symbolSize: 14 },
  { name: 'Web 前端', x: 45, y: -3, symbolSize: 14 },
  { name: '客户端', x: 70, y: 0, symbolSize: 14 },
  { name: '游戏', x: 80, y: -3, symbolSize: 14 },
  { name: '艺术', x: 100, y: 2, symbolSize: 14 },

  /**
    * Web 前端
    */
  { name: 'JavaScript', category: 'Web 前端', x: 58, y: 6, symbolSize: 12 },
  { name: 'Node.js', category: 'JavaScript', x: 50, y: 14 },
  { name: 'jQuery', category: 'JavaScript', x: 60, y: -2 },
  { name: 'React', category: 'JavaScript', x: 57, y: 16 },
  { name: 'Vue', category: 'JavaScript', x: 63, y: 13 },
  { name: 'React Native', category: 'JavaScript', x: 68, y: 9 },
  { name: 'Electron', category: 'JavaScript', x: 72, y: 15 },

  { name: 'HTML', category: 'Web 前端', x: 35, y: -10, symbolSize: 12 },
  { name: 'Pug', category: 'HTML', x: 42, y: -15 },

  { name: 'CSS', category: 'Web 前端', x: 37, y: 10, symbolSize: 12 },
  { name: 'SCSS', category: 'CSS', x: 34, y: 16 },
  { name: 'Less', category: 'CSS', x: 30, y: 6 },
  { name: 'Stylus', category: 'CSS', x: 43, y: 8 },
  { name: 'PostCSS', category: 'CSS', x: 30, y: -2 },

  { name: '小程序', category: 'Web 前端', x: 50, y: -12, symbolSize: 12 },
  { name: 'Taro', category: '小程序', x: 58, y: -15 },
  { name: 'mpvue', category: '小程序', x: 56, y: -8 },

  { name: '微前端', category: 'Web 前端', x: 50, y: 8, symbolSize: 12 },

  /**
    * 服务端
    */
  { name: 'Golang', category: '服务端', x: 15, y: -13, symbolSize: 12 },
  { name: 'Java', category: '服务端', x: 25, y: -10, symbolSize: 12 },
  { name: 'PHP', category: '服务端', x: 23, y: 10, symbolSize: 12 },
  { name: 'Python', category: '服务端', x: 14, y: 4, symbolSize: 12 },

  /**
    * 客户端
    */
  { name: 'Flutter', category: '客户端', x: 71, y: -10, symbolSize: 12 },
  { name: 'Kotlin', category: '客户端', x: 82, y: 15, symbolSize: 12 },
  { name: 'Swift', category: '客户端', x: 78, y: 6, symbolSize: 12 },

  /**
    * 游戏
    */
  { name: 'Cocos Creator', category: '游戏', x: 82, y: -8, symbolSize: 12 },
  { name: 'Threejs', category: '游戏', x: 82, y: 3, symbolSize: 12 },

  /**
    * 艺术
    */
  { name: '绘画', category: '艺术', x: 105, y: 6, symbolSize: 12 },
  { name: 'Procreate', category: '绘画', x: 102, y: 15 },

  { name: '摄影', category: '艺术', x: 94, y: -2, symbolSize: 12 },
  { name: '泼辣修图', category: '摄影', x: 98, y: -6 },
  { name: 'Lightroom', category: '摄影', x: 90, y: -12 },

  { name: '设计', category: '艺术', x: 95, y: 10, symbolSize: 12 },
  { name: 'Axure', category: '设计', x: 100, y: 11 },
  { name: 'Sketch', category: '设计', x: 92, y: 15 },
  { name: 'Adobe XD', category: '设计', x: 90, y: 5 },
  { name: 'Figma', category: '设计', x: 86, y: 8 },

  { name: '音乐', category: '艺术', x: 105, y: -5, symbolSize: 12 },
  { name: '口琴', category: '音乐', x: 102, y: -12 },
  { name: '乌克丽丽', category: '音乐', x: 108, y: -14 },

  /**
    * 运动
    */
  { name: '滑雪', category: '运动', x: 3, y: -15, symbolSize: 12 },
  { name: '滑板', category: '运动', x: 13, y: -5, symbolSize: 12 },
  { name: '跑酷', category: '运动', x: 8, y: -9, symbolSize: 12 },
  { name: '游泳', category: '运动', x: 0, y: 5, symbolSize: 12 },
  { name: 'Poppin', category: '运动', x: 0, y: -4, symbolSize: 12 },

  { name: '球类', category: '运动', x: 11, y: 9, symbolSize: 12 },
  { name: '乒乓球', category: '球类', x: 5, y: 9 },
  { name: '保龄球', category: '球类', x: 5, y: 15 },
  { name: '篮球', category: '球类', x: 16, y: 14 },
  { name: '羽毛球', category: '球类', x: 16, y: 8 },
]

const skillGraphOptions = {
  name: '技能关键词',
  skills,
}

export default skillGraphOptions
