import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Icon } from 'antd'

import PreviewTemplate from './previewTemplate'

import styles from './index.module.scss'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const copy = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const item = sourceClone[droppableSource.index]

  destClone.splice(droppableDestination.index, 0, { ...item })

  return destClone
}

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  borderColor: isDragging ? '#1E90FF' : '#D9D9D9',
  backgroundColor: isDragging ? 'rgb(0, 191, 255)' : 'rgb(255, 255, 255)',
  color: isDragging ? 'rgb(255, 255, 255)' : 'rgb(255,140,0)',
  ...draggableStyle
})

const setPreviewListStyle = (isDraggingOver) => ({
  userSelect: 'none',
  color: isDraggingOver ? 'rgb(30,144,255)' : 'rgb(255, 255, 255)',
  backgroundColor: isDraggingOver ? '#FFEFD5' : '#FFFFFF'
})

const setPreviewItemStyle = (isDraggingOver, draggableStyle) => ({
  userSelect: 'none',
  backgroundColor: isDraggingOver ? 'rgb(135, 206, 250)' : 'rgb(255, 255, 255)',
  ...draggableStyle
})

class SingleClone extends Component {
  static propTypes = {}
  state = {
    tools: [
      { id: 1000, content: 'Slider', type: 'Slider' },
      { id: 1001, content: 'Select', type: 'Select' },
      { id: 1002, content: 'Input', type: 'Input' },
      { id: 1003, content: 'Radio', type: 'Radio' },
      { id: 1004, content: 'DatePicker', type: 'DatePicker' },
      { id: 1005, content: 'Rate', type: 'Rate' }
    ],
    previews: []
  }

  componentDidMount () {}

  handleDragEnd = (result) => {
    console.log('result===', result)
    if (!result.destination) { return false }

    const { source, destination } = result
    const { tools = [], previews = [] } = this.state

    // 同一个droppable
    if (source.droppableId === destination.droppableId) {
      this.setState({
        [result.source.droppableId]: reorder(previews, source.index, destination.index)
      })

      return false
    }

    this.setState({
      previews: copy(tools, previews, source, destination)
    })
  }

  // 点击删除
  handleDeletePreviewItem = () => {}

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

  renderPreviewDraggableItem = (dragArray) => {
    let dragElement = null
    dragElement = dragArray.map((item, index) => {
      const dragItem = (
        <Draggable key={`previewDraggable-${index}`} draggableId={`previewDraggable-${item.id}-${index}`}
          index={index}
        >
          {(provided, snapshot) => (
            <div ref={provided.innerRef}
              {...provided.draggableProps}
              style={setPreviewItemStyle(snapshot.isDraggingOver, provided.draggableProps.style)}
            >
              <div className={`${styles.previewItem}`}>
                <PreviewTemplate info={item} />

                <div className={`${styles.widgetHandle}`} {...provided.dragHandleProps}>
                  <Icon type='drag' />
                </div>

                <div className={`${styles.widgetAction}`} onClick={() => this.handleDeletePreviewItem()}>
                  <Icon type="delete" />
                </div>
              </div>
            </div>
          )}
        </Draggable>
      )
      return dragItem
    })
    return dragElement
  }

  render () {
    const { tools = [], previews = [] } = this.state

    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <div className={`${styles.pageWrap}`}>
          <div className={`${styles.toolsLand}`}>
            <Droppable droppableId='tools' isDropDisabled={true}>
              {(droppableProvided, droppableSnapshot) => (
                <div ref={droppableProvided.innerRef}
                  {...droppableProvided.droppableProps}
                >
                  { this.renderDraggableItem(tools) }
                  {droppableProvided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className={`${styles.previewLand}`}>
            <div className={`${styles.previewContent}`}>
              <Droppable droppableId='previews'>
                {(droppableProvided, droppableSnapshot) => (
                  <div ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    style={setPreviewListStyle(droppableSnapshot.isDraggingOver)}
                  >
                    {
                      previews.length > 0
                        ? this.renderPreviewDraggableItem(previews)
                        : <div style={{ height: '80px', lineHeight: '80px', userSelect: 'none', textAlign: 'center' }}>可放置区域</div>
                    }
                    {droppableProvided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </div>
        </DragDropContext>
    )
  }
}

export default SingleClone
