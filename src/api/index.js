import axios from 'axios'

import { URL, defaultLimit } from '../config'

//获取轮播
export function getBanner() {
  const url = `${URL}/banner`
  return axios.get(url)
}


//获取推荐歌单
export function getPersonalized() {
  const url = `${URL}/personalized`
  return axios.get(url)
}

// //获取歌单
// export function getPersonalized() {
//   const url = `${URL}/personalized`
//   return axios.get(url)
// }

//获取官方和全球排行榜
export function getRankList() {
  const url = `${URL}/toplist/detail`
  return axios.get(url)
}

//根据传入的id获取歌单详情
export function getPlayList(id) {
  const url = `${URL}/playlist/detail`
  return axios.get(
    url,
    id
  )
}