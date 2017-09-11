import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import popular from '../views/popular'
import rangingList from '../views/rankingList'
import singList from '../views/singList'
import hotSinger from '../views/hotSinger'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path:'popular',
          component:popular
        },
        {
          path:'rankingList',
          component:rangingList
        },
        {
          path:'singList',
          component:singList
        },
        {
          path:'hotSinger',
          component:hotSinger
        },
      ]
    },

  ]
})
