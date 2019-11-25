import Home from '../containers/home'
import SongList from '../containers/songList'
import RankList from '../containers/rankList'
import Search from '../containers/search'



const routes = [
  {
    path: '/home', // 路由路径
    component: Home // 组件
  },
  {
    path: '/songlist', // 路由路径
    component: SongList // 组件
  },
  {
    path: '/ranklist', // 路由路径
    component: RankList // 组件
  },
  {
    path: '/search', // 路由路径
    component: Search // 组件
  },
  
]

export default routes