// 商户数量统计
export const merchantTotalData = [
  {
    name: '华东',
    type: 'bar',
    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7]
  },
  {
    name: '华北',
    type: 'bar',
    data: [135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
  },
  {
    name: '西部',
    type: 'bar',
    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7]
  },
  {
    name: '订单数量',
    type: 'line',
    yAxisIndex: 1,
    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2]
  }
]

// 商户活跃统计
export const activityData = [
  {
    name: '总计',
    type: 'bar',
    label: {
      show: true,
      position: 'inside'
    },
    emphasis: {
      focus: 'series'
    },
    data: [320, 302, 341, 374, 390, 450, 420]
  },
  {
    name: '活跃',
    type: 'bar',
    stack: '总量',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [200, 170, 240, 244, 200, 220, 210]
  },
  {
    name: '不活跃',
    type: 'bar',
    stack: '总量',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [-120, -132, -101, -134, -190, -230, -210]
  }
]

// 折线图堆叠
export const lineStackData = [
  {
    name: '邮件营销',
    type: 'line',
    stack: '总量',
    data: [120, 132, 101, 134, 90, 230, 210]
  },
  {
    name: '联盟广告',
    type: 'line',
    stack: '总量',
    data: [220, 182, 191, 234, 290, 330, 310]
  },
  {
    name: '视频广告',
    type: 'line',
    stack: '总量',
    data: [150, 232, 201, 154, 190, 330, 410]
  },
  {
    name: '直接访问',
    type: 'line',
    stack: '总量',
    data: [320, 332, 301, 334, 390, 330, 320]
  },
  {
    name: '搜索引擎',
    type: 'line',
    stack: '总量',
    data: [820, 932, 901, 934, 1290, 1330, 1320]
  }
]

// 堆叠条形图
export const stackBarData = [
  {
    name: 'Direct',
    type: 'bar',
    stack: 'total',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [320, 302, 301, 334, 390, 330, 320]
  },
  {
    name: 'Mail Ad',
    type: 'bar',
    stack: 'total',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [120, 132, 101, 134, 90, 230, 210]
  },
  {
    name: 'Affiliate Ad',
    type: 'bar',
    stack: 'total',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [220, 182, 191, 234, 290, 330, 310]
  },
  {
    name: 'Video Ad',
    type: 'bar',
    stack: 'total',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [150, 212, 201, 154, 190, 330, 410]
  },
  {
    name: 'Search Engine',
    type: 'bar',
    stack: 'total',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [820, 832, 901, 934, 1290, 1330, 1320]
  }
]
