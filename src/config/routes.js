import Home from '../containers/home'
import SongList from '../containers/songList'
import RankList from '../containers/rankList'
import Search from '../containers/search'
import Skin from '../containers/skin'



const routes = [
  {
    path: '/home', // 路由路径
    component: Home // 主页组件
  },
  {
    path: '/songlist', // 路由路径
    component: SongList // 歌单组件
  },
  {
    path: '/ranklist', // 路由路径
    component: RankList // 排行榜组件
  },
  {
    path: '/search', // 路由路径
    component: Search // 搜索组件
  },
  {
    path: '/skin', // 路由路径
    component: Skin // 皮肤组件
  },
  
]

export default routes