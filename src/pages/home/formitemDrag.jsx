import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Form, Input, PageHeader } from 'antd'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import styles from './index.module.scss'

const FormItem = Form.Item

class DragForm extends Component {
  static propTypes = {
    form: PropTypes.object
  }

  state = {
    data: [
      { id: 1000 },
      { id: 1001 },
      { id: 1002 },
      { id: 1003 },
      { id: 1004 }
    ]
  }

  // 点击确定
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('form values===', values)
      }
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
    })
  }

  // 点击修改Input值
  handleChangeInputValue = (val, type) => {
    setTimeout(() => {
      this.props.form.setFieldsValue({ [type]: val })
    }, 20)
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const { data = [] } = this.state

    return (
      <div style={{ width: '1260px', margin: '0px auto' }}>
        <Row>
          <PageHeader title='antd-form拖动' backIcon={false}/>
        </Row>
        <Row>
          <Form>
            {
              <DragDropContext onDragEnd={this.handleChangeDragEnd}>
                <Droppable droppableId="droppableFormItem" direction="vertical">
                {
                  (provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {
                        data.map((item, i) => (
                          <Draggable key={item.id} draggableId={`${item.id}`} index={i}>
                            {
                              (provided, snapshot) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <div className={`${styles.formitemRow}`}>
                                    <FormItem label='名称'>
                                      {
                                        getFieldDecorator(`item[${item.id}].name`, {

                                        })(
                                          <Input placeholder='请输入' autoComplete='off' />
                                        )
                                      }
                                   </FormItem>
                                  </div>

                                  <div className={`${styles.formitemRow}`}>
                                    <FormItem label='链接'>
                                      {
                                        getFieldDecorator(`item[${item.id}].linkUrl`, {

                                        })(
                                          <Input placeholder='请输入' autoComplete='off'/>
                                        )
                                      }
                                    </FormItem>
                                  </div>

                                </div>
                              )
                            }
                          </Draggable>
                        ))
                      }
                    </div>
                  )
                }
                </Droppable>
              </DragDropContext>
            }
          </Form>
        </Row>
      </div>
    )
  }
}

const DragformLand = Form.create()(DragForm)

export default DragformLand
