import Vue from 'vue'
import Router from 'vue-router'

import Todo from '@/pages/Todo'
import News from '@/pages/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/news/:source',
      name: 'News',
      component: News
    }
  ]
})
