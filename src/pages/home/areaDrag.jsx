import React, { Component } from 'react'
import { Row, Col, PageHeader } from 'antd'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

class AreaDrag extends Component {
  static propTypes = {}
  state = {}

  componentDidMount () {}

  render () {
    return (
      <div style={{ width: '1200px', marginTop: '24px' }}>
        <Row>
          <PageHeader title='区间拖动' backIcon={false}/>
        </Row>
        <Row gutter={24}>
          <Col span={6}>
            <Row>待办事项</Row>
            <Row></Row>
          </Col>
          <Col span={6}>
            <Row>已完成事项</Row>
            <Row>
              <DragDropContext onDragEnd={this.handleChangeDragEnd}>
                <Droppable droppableId="droppableArea">

                </Droppable>
              </DragDropContext>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AreaDrag
