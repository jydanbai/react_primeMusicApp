import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BScroll from 'better-scroll'
import './index.css'

import { getPersonalized } from '../../api'
import { HTTP_OK } from "../../config";
import { formatPlayCount } from '../../common/util';

class SongList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personalized: []
    }
  }
  componentWillUpdate() {
    new BScroll('.column-content-wrapper', {
      scrollY: true,
      click: true,
      scrollX: false
    })
  }

  async componentDidMount() {
    await getPersonalized().then(res => {
      if (res.data.code === HTTP_OK) {
        this.setState({
          personalized: res.data.result
        })
      }
    })
  }

  render() {
    const { personalized } = this.state
    return (
      <div className="column-wrapper">
        <Link to="/home">
          <i className="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></i>
        </Link>
        <p className="song-list">歌单</p>
        <div className="column-content-wrapper">
          <div className="column-content">
            {
              personalized.length > 0 &&
              personalized.map((item, index) => {
                return (
                  <Link to="/playlist" key={index}>
                    <div className="column-item" >
                      <div className="img-wrapper">
                        <i className="iconfont iconerji"></i>
                        <span className="play-num">{formatPlayCount(item.playCount)}</span>
                        <img className="column-img" src={item.picUrl} alt="" />
                      </div>
                      <p className="column-title">{item.name}</p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SongList;