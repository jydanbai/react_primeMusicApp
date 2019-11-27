import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BScroll from 'better-scroll'
import './index.css'

import { getPersonalized, getPlaylistDetail } from '../../api'
import { HTTP_OK } from "../../config";
import { formatPlayCount } from '../../common/util';

class SongList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personalized: [],
   
    }
  }
  componentWillUpdate() {

  }

  async componentDidMount() {
  
    new BScroll('.column-content-wrapper', {
      scrollY: true,
      click: true,
      scrollX: false,
    })
    //组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
    // if (new BScroll) {
    //   new BScrollrefresh()
    // }
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
                  <Link to="/playlist" key={index} >
                    <div className="column-item" onClick={()=>{
                      this.props.history.push({
                        pathname:`/playlist/${item.id}`
                      })
                    }}>
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