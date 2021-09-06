import React, { Component } from 'react'
import { Card } from 'antd'

import CollapsePanel from './collapsePanel/index'
import { tableData } from './localdatas'

import styles from './index.module.scss'

export default class ExpandTable extends Component {
  static propTypes = {}
  state = {
    data: tableData
  }

  componentDidMount () {}

  render () {
    const { data = [] } = this.state

    return (
      <div className={`${styles.expandTable}`}>
        <Card bodyStyle={{ padding: '16px', overflow: 'auto' }}>
          <ul className={`${styles.content}`}>
            <li className={`${styles.option}`}>
              <div className={`${styles.cell} ${styles.title}`}><span style={{ visibility: 'hidden' }}>占位</span></div>
              <ul>
                <li className={`${styles.cell}`}>新增激活合作伙伴</li>
                <li className={`${styles.cell}`}>新增库存金额</li>
                <li className={`${styles.cell}`}>新增SKU数量</li>
                <li className={`${styles.cell}`}>新增品牌数量</li>
                <li className={`${styles.cell}`}>与IIA系统实现实时连接的云仓作伙伴总数</li>
                <li className={`${styles.cell}`}>使用IIA提供的第三方ERP的云仓合作伙伴总数</li>
                <li className={`${styles.cell}`}>产生【云仓销售】的合作伙伴家数</li>
                <li className={`${styles.cell}`}>产生【云仓销售】的合作伙伴家数#VS总家数%</li>
                <li className={`${styles.cell}`}>累计合作伙伴总数</li>
                <li className={`${styles.cell}`}>累计云仓库存金额总数</li>
                <li className={`${styles.cell}`}>累计云仓商品型号总数</li>
                <li className={`${styles.cell}`}>累计云仓商品品牌总数</li>
                <li className={`${styles.cell}`}>累计经销商合作伙伴总数</li>
                <li className={`${styles.cell}`}>累计最终厂商合作伙伴总数</li>
              </ul>
            </li>
            {
              data.map((record, n) => (
                <li className={`${styles.option}`} key={`panel-${n}`}>
                  <CollapsePanel data={record} />
                </li>
              ))
            }
          </ul>
        </Card>
      </div>
    )
  }
}
