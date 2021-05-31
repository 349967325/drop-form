import React, { Component } from 'react'
import { Card } from 'antd'

import { DragDropContext } from 'react-beautiful-dnd'

import styles from './index.module.scss'

class SortableTodo extends Component {
  static propTypes = {}
  state = {
    tableData: []
  }

  componentDidMount () {
    const arr = []

    for (let i = 0; i < 20; i++) {
      arr.push({
        id: i,
        label: `this is item-${i}`
      })
    }

    this.setState({
      tableData: arr
    })
  }

  render () {
    const { tableData = [] } = this.state

    return (
      <div className={`${styles.pageWrap}`}>
        <DragDropContext>
          <div className={`${styles.kanban}`}>
            <div className={`${styles.singleList}`}>
              <h3>待办项目</h3>
              {
                tableData.map((item, i) => (
                  <div key={item.id} className={`${styles.singleItem}`}>
                    <Card>{ item.label }</Card>
                  </div>
                ))
              }
            </div>

            <div className={`${styles.singleList}`}>
              <h3>进行中</h3>
              {
                tableData.map((item, i) => (
                  <div key={item.id} className={`${styles.singleItem}`}>
                    <Card>{ item.label }</Card>
                  </div>
                ))
              }
            </div>

            <div className={`${styles.singleList}`}>
              <h3>已完成</h3>
              {
                tableData.map((item, i) => (
                  <div key={item.id} className={`${styles.singleItem}`}>
                    <Card>{ item.label }</Card>
                  </div>
                ))
              }
            </div>
          </div>
        </DragDropContext>
      </div>
    )
  }
}

export default SortableTodo
