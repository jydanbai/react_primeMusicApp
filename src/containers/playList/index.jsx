import React, { Component } from 'react'
import BScroll from 'better-scroll'
import {getPlaylistDetail} from '../../api'
import { HTTP_OK } from "../../config"
import {formatPlayCount} from '../../common/util';
import './index.less'

 class PlayList extends Component {
   constructor(props) {
     super(props)
     this.state = {
       data: {} //请求回来的歌单数据
     }
   }

  async componentDidMount() {
    await getPlaylistDetail(this.props.match.params.id).then(res => {
      if (res.data.code === HTTP_OK) {
        let data = res.data.playlist
        // console.log(data)
        this.setState({
          data
        }) 
      }
    })
    new BScroll('.rankDetail-wrapper', {
      scrollX: false,
      scrollY: true,
      click: true
    })

    getPlaylistDetail(this.props.match.params.id).then(res => {
      if (res.data.code === HTTP_OK) {
        this.setState({
          data: res.data.playlist
        })
        console.log(res.data.playlist)
      }
    })
  }


  render() {
    const {data} = this.state
    const {creator='',tracks=[]} = data
    console.log(tracks)
    return (
      <div>
        <header className="rankDetail-header">
          <div onClick={() => {
            this.props.history.go(-1)
            }}
           className="header-left iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></div>
          <div className="header-title">{data.name}</div>
          <div className="header-right"></div>
        </header>
        <div className="rankDetail-wrapper">
          <div className="rankDetail-content">
            <div className="playList-header">
              <div style={{backgroundImage: `url(${data.coverImgUrl})`}} className="beijingtu"></div>
              <div className="playList-header-wrapper">
                <div className="playList-header-hd" data-play={formatPlayCount(data.playCount)}>
                  <img src={data.coverImgUrl} alt=""/>
                </div>
                <div className="playList-header-bd">
                  <h1>{data.name}</h1>
                  <div className="playList-header-user">
                    <img src={`${creator.avatarUrl}?param=50y50`} alt=""/>
                    <span>{creator.nickname}</span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="song-wrapper">
              {
                tracks.length > 0 && tracks.map((item, index) => {
                  return (
                    <li key={item.id} className="song-item">
                      <div className="song-num">{index+1}</div>
                      <div className="song-info">
                        <h2>{item.name}</h2>
                        <p>
                          <span>{item.ar[0].name}</span>
                          &nbsp;-&nbsp;
                          {item.al.name}
                        </p>
                      </div>
                    </li>
                  )   
                })
              }
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayList
