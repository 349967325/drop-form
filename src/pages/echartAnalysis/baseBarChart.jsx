import React, { Component } from 'react'
import { Card } from 'antd'
import * as echarts from 'echarts'

export default class BaseBarChart extends Component {
  static propTypes = {}
  state = {}

  componentDidMount () {
    this.initEChart()
  }

  initEChart = () => {
    const myChart = echarts.init(document.getElementById('baseBarChart'))

    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }]
    })
  }

  render () {
    return (
      <Card title='基础柱状图'>
        <div id='baseBarChart' style={{ width: '100%', height: '450px' }}></div>
      </Card>
    )
  }
}
