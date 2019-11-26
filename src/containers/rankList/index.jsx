import React, { Component } from 'react';
import './index.less'

class RankList extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header-left"></div>
          <div className="header-title">排行榜</div>
          <div className="header-right"></div>
        </header>
        <div className="rank-wrapper">
          <div className="rank-content">
            <h1 className="title-one">官方榜单</h1>
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

          </div>
        </div>
      </div>
    );
  }
}

export default RankList;