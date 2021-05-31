import React, { Component } from 'react'
import { Card } from 'antd'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import styles from './index.module.scss'

class Home extends Component {
  static propTypes = {}
  state = {
    unData: [],
    data: [],
    endData: []
  }

  componentDidMount () {
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push({
        id: 1 + i,
        content: `this is item-${i + 1}`
      })
    }

    this.setState({
      unData: arr
    })
  }

  // 重新记录数组顺序
  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    // 删除并记录 删除元素
    const [removed] = result.splice(startIndex, 1)
    // 将原来的元素添加进数组
    result.splice(endIndex, 0, removed)
    return result
  }

  handleDragEnd = (result) => {
    console.log(result)
    if (!result.destination) { return false }

    const items = this.reorder(
      this.state.unData,
      result.source.index,
      result.destination.index
    )

    this.setState({
      unData: items
    })
  }

  renderDragItem = (dragArray) => {
    let dragElement = null
    dragElement = dragArray.map((item, index) => {
      const dragItem = (
        <Draggable
          key={item.id}
          draggableId={`${item.id}`}
          index={index}
        >
          {provided => (
            <div ref={provided.innerRef} className={`${styles.cardwrap}`}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Card>{item.content}</Card>
            </div>
          )}
        </Draggable>
      )
      return dragItem
    })
    return dragElement
  }

  render () {
    const { unData = [] } = this.state

    return (
      <div className={`${styles.container}`}>
        <DragDropContext onDragEnd={this.handleDragEnd}>
          <Droppable droppableId='droppable'>
              {
                provided => (
                  <div ref={provided.innerRef} className={`${styles.kanban}`}
                    {...provided.droppableProps}
                  >
                    <div className={`${styles.single}`}>
                      <h3>待办项目</h3>
                      <div className={`${styles.kanbanContents}`}>
                        {
                          unData.map((item, i) => (
                            <div key={`undata-${i}`}>
                              <Card>{ item.content }</Card>
                            </div>
                          ))
                        }
                      </div>
                    </div>

                    <div className={`${styles.single}`}>
                      <h3>进行中</h3>
                      <div className={`${styles.kanbanContents}`}>
                        <Draggable draggableId={'draggableId'}>
                          {provided => (
                            <div ref={provided.innerRef} className={`${styles.cardwrap}`}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >

                            </div>
                          )}
                        </Draggable>
                      </div>
                    </div>

                    <div className={`${styles.single}`}>
                      <h3>已完成</h3>
                      <div className={`${styles.kanbanContents}`}></div>
                    </div>

                  </div>
                )
              }
          </Droppable>
        </DragDropContext>
      </div>
    )
  }
}

export default Home
