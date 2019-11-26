import React, { Component } from 'react'
import './index.css'
export default class SongListDetail extends Component {
  render() {
    return (
      <div className="detail-wrapper">
         <i className="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></i>
        <p className="songlist-title">【迷幻/慢摇】Psychedelic melody</p>
        <div className="songlist-wrapper">
          <div className="songlist-content">
            <div className="songlist-header">
            <div className="img-wrapper">
              <div className="play-detail">
              <i className="iconfont iconerji"></i>
              <span className="play-num">42万</span>
              </div>
              <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt=""/>
            </div>
            <div className="right-detail">
            <h1>【迷幻/慢摇】Psychedelic melody</h1>
              <img src="" alt=""/>
              <p>一只喵喵喵星人</p>
            </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
