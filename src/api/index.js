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


//获取官方和全球排行榜
export function getRankList() {
  const url = `${URL}/toplist/detail`
  return axios.get(url)
}

//获取歌单详情
export function getPlaylistDetail(id) {
  const url = `${URL}/playlist/detail`
  return axios.get(url, {
    params: {
      id
    }
  })
}

//获取热搜名称
export function searchHot(){
  const url=`${URL}/search/hot`
  return axios.get(url)
}

//搜索
export function search(keywords,type=1){
  
 const url=`${URL}/search`
 return axios.get(url,{
   params:{

    keywords,

    type
     
   }
 })
}

//获取歌曲详情
export function getMusicDetail(id){
  const url = `${URL}/song/url`
  return axios.get(url,{
    params:{
      id
    }
  })
}