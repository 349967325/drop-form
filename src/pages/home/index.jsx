import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Divider } from 'antd'

class Home extends Component {
  static propTypes = {}
  state = {
    data: []
  }

  componentDidMount () {

  }

  render () {
    return (
      <div style={{ width: '1200px', margin: '30px auto 0px auto', textAlign: 'center' }}>
        <Link to={{ pathname: '/defaultDraggable' }}>默认拖动</Link>

        <Divider type='vertical' />
        <Link to={{ pathname: '/sortableTodo' }}>多列表拖拽</Link>
        <Divider type='vertical' />

        <Link to={{ pathname: '/cloneDraggable' }}>克隆拖动</Link>
        <Divider type='vertical' />

        <Link to={{ pathname: '/singleClone' }}>简单克隆</Link>
        <Divider type='vertical' />

        <Link to={{ pathname: '/lodopPrint' }}>Lodop打印功能</Link>
      </div>
    )
  }
}

export default Home
