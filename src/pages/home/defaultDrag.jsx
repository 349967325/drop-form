import React, { Component } from 'react'
import { Row, Card, PageHeader } from 'antd'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import mockData from './mock'
import styles from './index.module.scss'

const { mockdata1 = [] } = mockData
const { Meta } = Card

class DefaultDrag extends Component {
  state = {
    data: []
  }

  componentDidMount () {
    this.setState({
      data: mockdata1
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

  handleChangeDragEnd = (result) => {
    if (!result.destination) { return false }

    const items = this.reorder(
      this.state.data,
      result.source.index,
      result.destination.index
    )

    this.setState({
      data: items
    }, () => {
      console.log(this.state.data)
    })
  }

  render () {
    const { data = [] } = this.state

    return (
      <div style={{ width: '1260px', margin: '0px auto', paddingTop: '24px' }}>
        <Row>
          <PageHeader title='横向拖动排序' backIcon={false} />
        </Row>
        <Row>
        <DragDropContext onDragEnd={this.handleChangeDragEnd}>
          <Droppable droppableId="droppableHorizontal" direction="horizontal">
            {
              (provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <div className={`${styles.landWrapper} ${styles.clearfix}`}>
                  {
                    data.map((item, i) => (
                      <Draggable key={item.id} draggableId={`${item.id}`} index={i}>
                        {
                          (provided, snapshot) => (
                            <div className={`${styles.brickItem}`} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <Card hoverable bodyStyle={{ padding: '24px 12px' }}
                                cover={<img style={{ display: 'block' }} src={item.imageUrl}/>}
                              ><Meta title={item.title} description={item.desc}/>
                              </Card>
                            </div>
                          )
                        }
                      </Draggable>
                    ))
                  }
                </div>
                </div>
              )
            }
          </Droppable>

        </DragDropContext>
        </Row>

      </div>
    )
  }
}

export default DefaultDrag
