import React, { Component } from 'react'

import styles from './index.module.scss'

class SideLeft extends Component {
  render () {
    return (
      <div>
        <div className={`${styles.componentSide}`}>
          <div>
            <div><img /></div>
            <div>一行一张</div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}

export default SideLeft
