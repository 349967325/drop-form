import React, { memo } from 'react'
import styles from './index.module.scss'

function SideLeftHeader () {
  return (
    <div className={`${styles.sideLeftHeader}`}>
      <h3 className={`${styles.title}`}>开始装修</h3>
      <p className={`${styles.explain}`}>拖拽或点击组件至中间画布的对应位置</p>
    </div>
  )
}

export default memo(SideLeftHeader)
