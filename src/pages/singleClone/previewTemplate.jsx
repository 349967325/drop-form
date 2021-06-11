import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Slider, Input, Select, Radio, Rate, DatePicker } from 'antd'

import styles from './previewTemplate.module.scss'

const sliderTemplate = (<Slider />)

const inputTemplate = (<Input />)

const selectTemplate = (<Select style={{ width: '100%' }}></Select>)

const radioTemplate = (
  <Radio.Group>
    <Radio value={1}>A</Radio>
    <Radio value={2}>B</Radio>
    <Radio value={3}>C</Radio>
    <Radio value={4}>D</Radio>
  </Radio.Group>
)

const rateTemplate = (<Rate></Rate>)

const datePickerTemplate = (<DatePicker />)

const renderTemplate = (type) => {
  switch (type) {
    case 'Slider':
      return sliderTemplate
    case 'Input':
      return inputTemplate
    case 'Select':
      return selectTemplate
    case 'Radio':
      return radioTemplate
    case 'Rate':
      return rateTemplate
    case 'DatePicker':
      return datePickerTemplate
    default:
      return <div />
  }
}

class PreviewTemplate extends Component {
  static propTypes = {
    info: PropTypes.object
  }

  render () {
    const { info = {} } = this.props
    return (
      <div className={`${styles.formitemRow}`}>
        <div className={`${styles.formitemLabel}`}><label>{ info.content }</label></div>
        <div className={`${styles.formitemControl}`}>{ renderTemplate(info.type) }</div>
      </div>
    )
  }
}

export default PreviewTemplate
