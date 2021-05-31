import Home from '@/pages/home/index'
import DragRenovation from '@/pages/dragRenovation/index'
import SortableTodo from '@/pages/sortableTodo/index'

export const routerMaps = [
  {
    path: '/home',
    name: '拖动排序',
    component: Home
  },
  {
    path: '/dragRenovation',
    name: '店铺装修',
    component: DragRenovation
  },
  {
    path: '/sortableTodo',
    name: '拖拽待办事项',
    component: SortableTodo
  }
]
