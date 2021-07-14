import Home from '@/pages/home/index'
import DefaultDraggable from '@/pages/deafultDraggable/index'
import CloneDraggable from '@/pages/cloneDraggable/index'
import SortableTodo from '@/pages/sortableTodo/index'
import SingleClone from '@/pages/singleClone/index'
import LodopPrint from '@/pages/lodopPrint/index'

export const routerMaps = [
  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/defaultDraggable',
    name: '默认拖动',
    component: DefaultDraggable
  },
  {
    path: '/cloneDraggable',
    name: '克隆拖动',
    component: CloneDraggable
  },
  {
    path: '/sortableTodo',
    name: '多列表拖动',
    component: SortableTodo
  },
  {
    path: '/singleClone',
    name: '简单克隆',
    component: SingleClone
  },
  {
    path: '/lodopPrint',
    component: LodopPrint
  }
]
