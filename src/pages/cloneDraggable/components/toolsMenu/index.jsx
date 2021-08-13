import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import styles from './index.module.scss'

function ToolsMenu (props) {
  const { name, list } = props

  return (
    <div className={`${styles.toolMenu}`}>
      <h4 className={`${styles.menuTitle}`}>
        <Icon type='caret-down' /><span className={`${styles.title}`}>{name}</span>
      </h4>

      <Droppable droppableId='droppableTools' isDropDisabled={true}>
        {(droppableProvided, droppableSnapshot) => (
          <div ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {
              list.map((item, i) => (
                <Draggable key={item.id} draggableId={`draggable-${item.id}`} index={i}>
                  {(draggableProvided, draggableSnapshot) => (
                    <div ref={draggableProvided.innerRef} className={`${styles.subbrickItem}`}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <div>
                        <img className={`${styles.pic}`} src={item.imageUrl} />
                        <img className={`${styles.pic} ${styles.hoverPic}`} src={item.hoverImage} />
                        <div className={`${styles.brickName}`}>{item.name}</div>
                      </div>

                      {
                        draggableSnapshot.isDragging && (
                          <div style={{ display: 'none' }}>
                            <img className={`${styles.pic}`} src={item.imageUrl} />
                            <img className={`${styles.pic} ${styles.hoverPic}`} src={item.hoverImage} />
                            <div className={`${styles.brickName}`}>{item.name}</div>
                          </div>
                        )
                      }
                    </div>
                  )}
                </Draggable>

              ))
            }

          </div>
        )}

      </Droppable>

    </div>
  )
}

ToolsMenu.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array
}

export default memo(ToolsMenu)
