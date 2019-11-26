import React, { Component } from 'react';
import BScroll from 'better-scroll'
import './index.less'

class RankList extends Component {

  componentDidMount() {
    new BScroll('.rank-wrapper', {
      scrollY: true,
      click: true,
      scrollX: false
    })
  }

  render() {
    return (
      <div>
        <header className="rank-header">
          <div className="header-left iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></div>
          <div className="header-title">排行榜</div>
          <div className="header-right"></div>
        </header>
        <div className="rank-wrapper">
          <div className="rank-content">
            <h1 className="title">官方榜单</h1>
            <ul className="row-list">
              <li className="row-item">
                <div className="item-hd">
                  <img src="https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150" alt=""/>
                  <p>每天更新</p>
                </div>
                <div className="row-item-bd">
                  <p>喜欢你</p>
                  <p>你把我灌醉</p>
                  <p>明天会更好</p>
                </div>
              </li>
              <li className="row-item"></li>
              <li className="row-item"></li>
              <li className="row-item"></li>
              <li className="row-item"></li>
              <li className="row-item"></li>
            </ul>
            <h1 className="title">全球榜</h1>
            <ul className="column-list">
              <li className="column-item">
                <div className="item-hd">
                  <img src="https://p1.music.126.net/y8zyTt4HwXbJqB31aQKz1A==/109951164353220919.jpg?param=150y150" alt=""/>
                  <p>每周五更新</p>
                </div>
                <div className="column-bd">云音乐说唱榜</div>
              </li>
              <li className="column-item"></li>
              <li className="column-item"></li>
              <li className="column-item"></li>
              <li className="column-item"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RankList;