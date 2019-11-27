import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BScroll from 'better-scroll'
import './index.css'
class SongList extends Component {
  componentDidMount() {
    new BScroll('.column-content-wrapper', {
      scrollY: true,
      click: true,
      scrollX: false
    })
  }

  render() {
    return (
      <div className="column-wrapper">
        <Link to="/home">
          <i className="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></i>
        </Link>
        <p className="song-list">歌单</p>
        <div className="column-content-wrapper">
          <div className="column-content">
            <Link to="/playlist">
              <div className="column-item">
                <div className="img-wrapper">
                  <i className="iconfont iconerji"></i>
                  <span className="play-num">33035</span>
                  <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
                </div>
                <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
              </div>
            </Link>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
            <div className="column-item">
              <div className="img-wrapper">
                <i className="iconfont iconerji"></i>
                <span className="play-num">33035</span>
                <img className="column-img" src="http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=200y200" alt="" />
              </div>
              <p className="column-title">【迷幻/慢摇】Psychedelic melody</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SongList;