import React, { Component } from 'react'

import { Button } from 'antd'

import ImageModules from './imageModules'
import SideRight from './sideRight'

import styles from './index.module.scss'

class DragRenovation extends Component {
  render () {
    return (
      <div className={`${styles.dragPage}`}>
        <div className={`${styles.pageContainer}`}>
          <div className={`${styles.sideLeftWrap}`}>
            <ImageModules />
          </div>
          <div className={`${styles.previewWrap}`}>
            <div className={`${styles.previewScroll}`}></div>
          </div>
          <div className={`${styles.sideRightWrap}`}>
            <SideRight />
          </div>
        </div>
        <div className={`${styles.pageFooter}`}>
          <Button type='primary'>提交发布</Button>
        </div>
      </div>
    )
  }
}

export default DragRenovation
