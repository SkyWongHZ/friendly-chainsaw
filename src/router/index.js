import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import popular from '../views/popular'
import rangingList from '../views/rankingList'
import singList from '../views/singList'
import hotSinger from '../views/hotSinger'
import playlistDetail from '../views/playlistDetail'
import playerDetail from '../views/playerDetail'


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
    {
      path: '/playlistDetail/:id',
      name: 'playlistDetail',
      component: playlistDetail,
    },
    {
      path: '/playerDetail/:item',
      name: 'playerDetail',
      component: playerDetail,
    },

  ]
})
