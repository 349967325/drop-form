import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

import styles from './index.module.scss'

export default class UploadThumbnail extends Component {
  static propTypes = {
    imageUrl: PropTypes.string,
    onDelete: PropTypes.func
  }

  state = {}

  componentDidMount () {}

  render () {
    const { imageUrl = '' } = this.props

    return (
      <div className={`${styles.thumbnailWrap}`}>
        <div className={`${styles.thumbnailInfo}`}>
          <img className={`${styles.thumbnailPic}`} src={imageUrl} />

          <span className={`${styles.previewActions}`}>
            <a onClick={() => this.props.onDelete()}><Icon type='delete' style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.85)' }} /></a>
          </span>
        </div>
      </div>
    )
  }
}
