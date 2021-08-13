import React, { memo } from 'react'

import styles from './index.module.scss'

function DecoraHeader () {
  return (
    <div className={`${styles.headerLand}`}>
      <h3 className={`${styles.title}`}>首页装修</h3>
    </div>
  )
}

export default memo(DecoraHeader)
