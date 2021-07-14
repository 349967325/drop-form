import React, { Component } from 'react'
import { Button, message } from 'antd'

import PickBillHtm from './billsHtm/pickBillHtm'
import { getLodop } from '@/assets/plugin/LodopFuncs'

export default class LodopPrint extends Component {
  static propTypes = {}
  state = {
    pickData: []
  }

  componentDidMount () {
    const arr = []

    for (let i = 0; i < 5; i++) {
      arr.push({
        name: `罗蒙西裤男商务坠感男裤 2021春季新款男士休闲西装裤直筒西服长裤子 6K229886黑色-${28 + i}`,
        model: `MODEL-6K229886-${i + 1}`,
        itemNumber: `ITEMNUMBER-6K229886-${i + 1}`,
        price: 20 + i,
        num: i + 1
      })
    }

    this.setState({
      pickData: arr
    })
  }

  // 打印拣货单
  lodopPrintPickBillHtm = () => {
    const htmlTemplateObj = document.getElementById('pickBillHtm').innerHTML
    const LODOP = getLodop()
    if (!LODOP) {
      return message.error('请下载打印插件')
    }

    LODOP.PRINT_INIT('初始化打印') // 打印初始化
    LODOP.ADD_PRINT_HTM('10mm', '8mm', '186mm', '270mm', htmlTemplateObj)
    LODOP.PREVIEW()
  }

  render () {
    const { pickData = [] } = this.state

    return (
      <div style={{ width: '1200px', margin: '0px auto', padding: '48px 24px' }}>
        <Button type='primary' onClick={this.lodopPrintPickBillHtm}>打印拣货单</Button>

        <PickBillHtm list={pickData}/>
      </div>
    )
  }
}
