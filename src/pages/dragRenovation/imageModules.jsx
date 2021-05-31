import React, { Component } from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import ModTitle from './modTitle'
import SkeImg1 from '@/assets/images/image_module_1.png'
import SkeImg2 from '@/assets/images/image_module_2.png'

import styles from './index.module.scss'

class ImageModules extends Component {
  static propTypes = {}
  state = {
    imageList: [
      { imageUrl: SkeImg1, label: '一行一张' },
      { imageUrl: SkeImg2, label: '一行五张' }
    ]
  }

  componentDidMount () {}

  handleChangeDragEnd = (result) => {
    console.log(result)
  }

  render () {
    const { imageList = [] } = this.state

    return (
      <div className={`${styles.modWrap}`}>
        <ModTitle title='图片组件' />
        <DragDropContext onDragEnd={this.handleChangeDragEnd}>
          <Droppable droppableId="droppableCopy">
            {
              (provided, snapshot) => (
                <div className={`${styles.modContent}`} ref={provided.innerRef} {...provided.droppableProps}>
                  {
                    imageList.map((item, i) => (
                      <Draggable draggableId={`IMAGE-${i}`} key={`IMAGE-${i}`} index={i}>
                        {
                          (provided, snapshot) => (
                            <div className={`${styles.modSource}`} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <img className={`${styles.skeletonPic}`} src={item.imageUrl} />
                              <div className={`${styles.modLabel}`}>{item.label}</div>
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
      </div>
    )
  }
}

export default ImageModules
