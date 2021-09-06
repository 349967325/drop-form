import React, { Component } from 'react'
import { Card } from 'antd'
import * as echarts from 'echarts'
import { merchantTotalData } from './localdatas'

export default class MerchantTotalChart extends Component {
  static propTypes = {}

  componentDidMount () {
    this.initEchart()
  }

  initEchart = () => {
    const myChart = echarts.init(document.getElementById('merchantTotalChart'))

    // 绘制图表
    myChart.setOption({
      legend: {
        data: ['华东', '华北', '西部', '订单数量']
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '订单金额',
          axisLabel: {
            formatter: '{value} 千元'
          }
        },
        {
          type: 'value',
          name: '订单数量',
          interval: 5,
          axisLabel: {
            formatter: '{value} 千单'
          }
        }
      ],
      series: merchantTotalData
    })
  }

  render () {
    return (
      <Card title='商户数量统计'>
        <div id='merchantTotalChart' style={{ width: '100%', height: '450px' }}></div>
      </Card>
    )
  }
}
