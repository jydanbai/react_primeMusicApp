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

// //获取歌单
// export function getPersonalized() {
//   const url = `${URL}/personalized`
//   return axios.get(url)
// }