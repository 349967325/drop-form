import React, { Component } from 'react'
import { Row, Col } from 'antd'

import MerchantTotalChart from './merchantTotalChart'
import MerchantActivityChart from './merchantActivityChart'
import LineChart from './lineChart'
import PieChart from './pieChart'
import DoughnutChart from './doughnutChart'
import RadarChart from './radarChart'
import BaseBarChart from './baseBarChart'
import StackBarChart from './stackBarChart'

export default class EchartAnalysis extends Component {
  static propTypes = {}
  state = {}

  render () {
    return (
      <div style={{ padding: '24px' }}>
        <Row gutter={24}>
          <Col span={12}>
            <MerchantTotalChart />
          </Col>

          <Col span={12}>
            <MerchantActivityChart />
          </Col>
        </Row>

        <Row gutter={24} style={{ marginTop: '24px' }}>
          <Col span={12}>
            <LineChart />
          </Col>

          <Col span={12}>
            <PieChart />
          </Col>
        </Row>

        <Row gutter={24} style={{ marginTop: '24px' }}>
          <Col span={12}>
            <DoughnutChart />
          </Col>

          <Col span={12}>
            <RadarChart />
          </Col>
        </Row>

        <Row gutter={24} style={{ marginTop: '24px' }}>
          <Col span={12}>
            <BaseBarChart />
          </Col>

          <Col span={12}>
            <StackBarChart />
          </Col>
        </Row>
      </div>
    )
  }
}
