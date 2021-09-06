import React, { Component } from 'react'
import { Card } from 'antd'
import * as echarts from 'echarts'

export default class DoughnutChart extends Component {
  static propTypes = {}
  state = {}

  componentDidMount () {
    this.initEChart()
  }

  initEChart = () => {
    const myChart = echarts.init(document.getElementById('doughnutChart'))

    myChart.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ]
        }
      ]
    })
  }

  render () {
    return (
      <Card title='环形图'>
        <div id='doughnutChart' style={{ width: '100%', height: '450px' }}></div>
      </Card>
    )
  }
}
