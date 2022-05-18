import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardView from '../views/BoardView.vue'
import BoardList from '../components/board/BoardList.vue'
import BoardCreate from '../components/board/BoardCreate.vue'
import BoardUpdate from '../components/board/BoardUpdate.vue'
import BoardDetail from '../components/board/BoardDetail.vue'
import KaKaoMapView from '../views/KaKaoMapView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/board',
    component: BoardView,
    children: [
      {
        path: "",
        name: "boardList",
        component: BoardList
      },
      {
        path: "create",
        name: "boardCreate",
        component: BoardCreate
      },
      {
        path: "update",
        name: "boardUpdate",
        component: BoardUpdate
      },
      {
        path: ":id",
        name: "boardDetail",
        component: BoardDetail
      },
    ]
  },
  {
    path: "/map",
    name: "map",
    component: KaKaoMapView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
