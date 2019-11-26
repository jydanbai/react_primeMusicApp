import React, { Component } from 'react';
import   './index.css'
class SongList extends Component {
  render() {
    return (
      <div className="column-wrapper">
        <p className="song-list">歌单</p>
        <div className="column-item">
         <div className="img-wrapper">
           <i className="iconfont iconerji"></i>
         <span className="play-num">33035</span>
          <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt=""/>
         </div>
          <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
        </div>
        <div className="column-item">
         <div className="img-wrapper">
         <i className="iconfont iconerji"></i>
         <span className="play-num">33035</span>
          <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt=""/>
         </div>
          <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
        </div>
        <div className="column-item">
         <div className="img-wrapper">
         <i className="iconfont iconerji"></i>
         <span className="play-num">33035</span>
          <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt=""/>
         </div>
          <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
        </div>
      </div>
    );
  }
}

export default SongList;