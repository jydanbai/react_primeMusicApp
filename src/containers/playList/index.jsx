import React, { Component } from 'react'
import BScroll from 'better-scroll'
import './index.less'

 class PlayList extends Component {

  componentDidMount() {
    new BScroll('.rankDetail-wrapper', {
      scrollX: false,
      scrollY: true,
      click: true
    })
  }

  render() {
    return (
      <div>
        <header className="rankDetail-header">
          <div onClick={() => {
            this.props.history.go(-1)
            }}
           className="header-left iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></div>
          <div className="header-title">云音乐飙升榜</div>
          <div className="header-right"></div>
        </header>
        <div className="rankDetail-wrapper">
          <div className="rankDetail-content">
            <div className="playList-header">
              <div className="playList-header-wrapper">
                <div className="playList-header-hd" data-play="25.8亿">
                  <img src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt=""/>
                </div>
                <div className="playList-header-bd">
                  <h1>云音乐飙升榜</h1>
                  <div className="playList-header-user">
                    <img src="http://p1.music.126.net/QWMV-Ru_6149AKe0mCBXKg==/1420569024374784.jpg?param=50y50" alt=""/>
                    <span>网易云音乐</span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="song-wrapper">
              <li className="song-item">
                <div className="song-num">1</div>
                <div className="song-info">
                  <h2>吻别</h2>
                  <p>
                    <span>张学友</span>
                    &nbsp;-&nbsp;
                    吻别
                  </p>
                </div>
              </li>
              <li className="song-item">
                <div className="song-num">1</div>
                <div className="song-info">
                  <h2>吻别</h2>
                  <p>
                    <span>张学友</span>
                    &nbsp;-&nbsp;
                    吻别
                  </p>
                </div>
              </li>
              <li className="song-item">
                <div className="song-num">1</div>
                <div className="song-info">
                  <h2>吻别</h2>
                  <p>
                    <span>张学友</span>
                    &nbsp;-&nbsp;
                    吻别
                  </p>
                </div>
              </li>
              <li className="song-item">
                <div className="song-num">1</div>
                <div className="song-info">
                  <h2>吻别</h2>
                  <p>
                    <span>张学友</span>
                    &nbsp;-&nbsp;
                    吻别
                  </p>
                </div>
              </li>
              <li className="song-item">
                <div className="song-num">1</div>
                <div className="song-info">
                  <h2>吻别</h2>
                  <p>
                    <span>张学友</span>
                    &nbsp;-&nbsp;
                    吻别
                  </p>
                </div>
              </li>
              <li className="song-item">
                <div className="song-num">1</div>
                <div className="song-info">
                  <h2>吻别</h2>
                  <p>
                    <span>张学友</span>
                    &nbsp;-&nbsp;
                    吻别
                  </p>
                </div>
              </li>
              <li className="song-item">
                <div className="song-num">1</div>
                <div className="song-info">
                  <h2>吻别</h2>
                  <p>
                    <span>张学友</span>
                    &nbsp;-&nbsp;
                    吻别
                  </p>
                </div>
              </li>
              <li className="song-item">
                <div className="song-num">1</div>
                <div className="song-info">
                  <h2>吻别</h2>
                  <p>
                    <span>张学友</span>
                    &nbsp;-&nbsp;
                    吻别
                  </p>
                </div>
              </li>
              <li className="song-item">
                <div className="song-num">1</div>
                <div className="song-info">
                  <h2>吻别</h2>
                  <p>
                    <span>张学友</span>
                    &nbsp;-&nbsp;
                    吻别
                  </p>
                </div>
              </li>
              <li className="song-item">
                <div className="song-num">1</div>
                <div className="song-info">
                  <h2>吻别</h2>
                  <p>
                    <span>张学友</span>
                    &nbsp;-&nbsp;
                    吻别
                  </p>
                </div>
              </li>
              <li className="song-item">
                <div className="song-num">1</div>
                <div className="song-info">
                  <h2>吻别</h2>
                  <p>
                    <span>张学友</span>
                    &nbsp;-&nbsp;
                    吻别
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayList
