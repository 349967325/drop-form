import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import styles from './index.module.scss'

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  backgroundColor: isDragging ? '#E3FCEF' : '#FFFFFF',
  ...draggableStyle
})

const getListStyle = (isDraggingOver) => ({
  backgroundColor: isDraggingOver ? '#FFEFD5' : '#EBECF0',
  padding: 8
})

class SortableTodo extends Component {
  static propTypes = {}
  state = {
    needdata: [],
    donedata: []
  }

  componentDidMount () {
    const arr = []

    for (let i = 0; i < 20; i++) {
      arr.push({
        id: i + 1,
        content: `this is item-${i + 1}`
      })
    }

    this.setState({
      needdata: arr
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
    if (!result.destination) { return false }
    const { source = {}, destination = {} } = result
    const current = [...this.state[source.droppableId]]
    const next = [...this.state[destination.droppableId]]
    const target = current[source.index]

    // 同一个droppable
    if (source.droppableId === destination.droppableId) {
      this.setState({
        [result.source.droppableId]: this.reorder(current, source.index, destination.index)
      })

      return false
    }

    current.splice(source.index, 1)
    next.splice(destination.index, 0, target)

    this.setState({
      [source.droppableId]: current,
      [destination.droppableId]: next
    })
  }

  renderDraggableItem = (dragArray) => {
    let dragElement = null
    dragElement = dragArray.map((item, index) => {
      const dragItem = (
        <Draggable key={item.id}
          draggableId={`draggable-${item.id}`}
          index={index}
        >
          {(provided, snapshot) => (
            <div ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={`${styles.singleItem}`}
              style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
            >
              { item.content }
            </div>
          )}
        </Draggable>
      )
      return dragItem
    })
    return dragElement
  }

  render () {
    const { needdata = [], donedata = [] } = this.state

    return (
      <div className={`${styles.pageWrap}`}>
        <DragDropContext onDragEnd={this.handleDragEnd}>
          <div className={`${styles.kanban}`}>
            <div className={`${styles.singleList}`}>
              <h3>待办项目</h3>
              <Droppable droppableId='needdata' direction='vertical'>
                {(droppableProvided, droppableSnapshot) => (
                  <div ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    style={getListStyle(droppableSnapshot.isDraggingOver)}
                  >
                    { this.renderDraggableItem(needdata) }
                    {droppableProvided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>

            <div className={`${styles.singleList}`}>
              <h3>已完成</h3>
              <Droppable droppableId='donedata'>
                {(droppableProvided, droppableSnapshot) => (
                  <div ref={droppableProvided.innerRef} className={`${styles.singleContent}`}
                    {...droppableProvided.droppableProps}
                    style={getListStyle(droppableSnapshot.isDraggingOver)}
                  >
                    {
                      donedata.length > 0
                        ? this.renderDraggableItem(donedata)
                        : <div style={{ width: '300px', height: '300px', lineHeight: '150px', textAlign: 'center' }}>可放置</div>
                    }
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </DragDropContext>
      </div>
    )
  }
}

export default SortableTodo
