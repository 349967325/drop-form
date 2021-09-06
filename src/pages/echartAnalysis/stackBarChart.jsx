import React, { Component } from 'react'
import { Card } from 'antd'
import * as echarts from 'echarts'
import { stackBarData } from './localdatas'

export default class StackBarChart extends Component {
  static propTypes = {}
  state = {}

  componentDidMount () {
    this.initEChart()
  }

  initEChart = () => {
    const myChart = echarts.init(document.getElementById('stackBarChart'))

    myChart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      series: stackBarData
    })
  }

  render () {
    return (
      <Card title='堆叠条形图'>
        <div id='stackBarChart' style={{ width: '100%', height: '450px' }}></div>
      </Card>
    )
  }
}
