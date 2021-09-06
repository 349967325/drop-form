import React, { Component } from 'react'
import { Card } from 'antd'
import * as echarts from 'echarts'
import { lineStackData } from './localdatas'

export default class LineChart extends Component {
  static propTypes = {}
  state = {}

  componentDidMount () {
    this.initEChart()
  }

  initEChart = () => {
    const myChart = echarts.init(document.getElementById('lineChart'))

    myChart.setOption({
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: lineStackData
    })
  }

  render () {
    return (
      <Card title='折线图堆叠'>
        <div id='lineChart' style={{ width: '100%', height: '450px' }} />
      </Card>
    )
  }
}
