import React, { Component } from 'react'

import { Button } from 'antd'

import SideLeft from './sideLeft'
import SideRight from './sideRight'

import styles from './index.module.scss'

class DragRenovation extends Component {
  render () {
    return (
      <div className={`${styles.dragPage}`}>
        <div className={`${styles.pageContainer}`}>
          <div className={`${styles.sideLeftWrap}`}>
            <SideLeft />
          </div>
          <div className={`${styles.previewWrap}`}></div>
          <div className={`${styles.sideRightWrap}`}>
            <SideRight />
          </div>
        </div>
        <div className={`${styles.pageFooter}`}>
          <div>
            <Button type='primary'>提交发布</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default DragRenovation
