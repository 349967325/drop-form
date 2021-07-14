import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PickBillHtm extends Component {
  static propTypes = {
    list: PropTypes.array
  }

  render () {
    const { list = [] } = this.props

    return (
      <div id='pickBillHtm' style={{ display: 'none' }}>
        {/* 单据头部 */}
        <div style={{ marginBottom: '12px', height: '30px', lineHeight: '30px', fontSize: '16pt', fontWeight: 'bold', textAlign: 'center' }}>
          拣货单
        </div>
        <table width='100%' style={{ marginBottom: '15px', fontSize: '10pt' }}>
          <tbody>
            <tr>
              <td width='33.33%'><p style={{ marginBottom: '6px' }}>订单号：</p></td>
              <td width='33.33%'><p style={{ marginBottom: '6px' }}>订单日期：</p></td>
              <td width='33.33%'><p style={{ marginBottom: '6px' }}>出库单号：</p></td>
              </tr>
            <tr>
              <td colSpan='3'><p>客户名称：萨斯云科技（上海）有限责任公司</p></td>
            </tr>
          </tbody>
        </table>

        {/* 单据内容 */}
        <table border='1' cellSpacing='0' cellPadding='2' width='100%' style={{ fontSize: '10pt', borderColor: '#333333', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead>
            <tr>
              <td width='5%' style={{ fontWeight: '500' }}>序号</td>
              <td width='30%' style={{ fontWeight: '500' }}>产品信息</td>
              <td width='20%' style={{ fontWeight: '500' }}>型号</td>
              <td width='20%' style={{ fontWeight: '500' }}>订货号</td>
              <td width='10%' style={{ fontWeight: '500' }}>拣货数量</td>
              <td width='15%' style={{ fontWeight: '500' }}>单价</td>
            </tr>
          </thead>
          <tbody>
            {
              list && list.map((item, i) => (
                <tr key={`pickProduct-${i}`}>
                  <td style={{ textAlign: 'center' }}>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.model}</td>
                  <td>{item.itemNumber}</td>
                  <td>{item.num}</td>
                  <td>{item.price}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <table width='100%' style={{ marginTop: '1.5em' }}>
          <tbody>
            <tr>
              <td width='25%'><p style={{ fontSize: '10pt' }}>拣货员：</p></td>
              <td width='25%'><p style={{ fontSize: '10pt' }}>清点员：</p></td>
              <td width='25%'><p style={{ fontSize: '10pt' }}>复核员：</p></td>
              <td width='25%'><p style={{ fontSize: '10pt' }}>打包员：</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
