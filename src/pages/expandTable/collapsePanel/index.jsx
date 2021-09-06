import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import styles from './index.module.scss'

export default class CollapsePanel extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  render () {
    const { data } = this.props

    return (
      <div className={`${styles.collapsePanel}`}>
        <div className={`${styles.cell} ${data.level < 2 ? styles.title : ''}`}>
          <span>{data.year}</span>
          { data.level < 2 ? <a className={`${styles.action}`}><Icon type="drag" /></a> : null }
        </div>
        <ul>
          <li className={`${styles.cell}`}>{data.newMerchant}</li>
          <li className={`${styles.cell}`}>&yen;{data.newStockValues}</li>
          <li className={`${styles.cell}`}>{data.newSkuNumber}</li>
          <li className={`${styles.cell}`}>{data.newBrandNumber}</li>
          <li className={`${styles.cell}`}>{ data.cloudConnectNumber }</li>
          <li className={`${styles.cell}`}>{ data.ERPCooperationNumber }</li>
          <li className={`${styles.cell}`}>{ data.customerTotal }</li>
          <li className={`${styles.cell}`}>65%</li>
          <li className={`${styles.cell}`}>599</li>
          <li className={`${styles.cell}`}>&yen;{ data.cloundStockTotal }</li>
          <li className={`${styles.cell}`}>{ data.cloudSkuTotal }</li>
          <li className={`${styles.cell}`}>{ data.cloudBrandTotal }</li>
          <li className={`${styles.cell}`}>{ data.merchantTotal }</li>
          <li className={`${styles.cell}`}>{ data.supplyTotal }</li>
          </ul>
      </div>
    )
  }
}
