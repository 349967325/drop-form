import React, { Component } from 'react'
import { Card } from 'antd'
import * as echarts from 'echarts'
import { activityData } from './localdatas'

export default class MerchantActivityChart extends Component {
  static propTypes = {}
  state = {}

  componentDidMount () {
    this.initEchart()
  }

  initEchart = () => {
    const myChart = echarts.init(document.getElementById('activityChart'))

    myChart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['总计', '活跃', '不活跃']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'value'
        }
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: {
            show: false
          },
          data: ['西部地区', '华东地区', '华北地区']
        }
      ],
      series: activityData
    })
  }

  render () {
    return (
      <Card title='商户活跃统计'>
        <div id='activityChart' style={{ width: '100%', height: '450px' }}></div>
      </Card>
    )
  }
}
