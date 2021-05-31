import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

import styles from './index.module.scss'

class ModTitle extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  state = {}
  render () {
    const { title = '' } = this.props

    return (
      <div className={`${styles.modTitle}`}>
        <span className={`${styles.modSwitcher}`}><Icon type="caret-down" style={{ color: 'rgba(0, 0, 0, 0.4)' }}/></span>
        <span className={`${styles.titTxt}`}>{title}</span>
      </div>
    )
  }
}

export default ModTitle
