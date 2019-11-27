import React, { Component } from 'react'
import BScroll from 'better-scroll'
import {Link} from 'react-router-dom'
import {getRankList} from '../../api'
import { HTTP_OK } from "../../config"
import './index.less'


class RankList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      officalList: [], //官方榜
      globalList: [],  //全球榜
      artistToplist: {}  //
    }
  }
  

  async componentDidMount() {
    await getRankList().then(res => {
      if(res.data.code === HTTP_OK) {
        let officalList = [],
        globalList = [],
        artistToplist = res.data.artistToplist
        res.data.list.forEach(item => {
          if (item.ToplistType) {
            officalList.push({
              id: item.id,
              name: item.name,
              coverImgUrl: item.coverImgUrl,
              updateFrequency: item.updateFrequency,
              tracks: item.tracks,
              ToplistType: item.ToplistType,
              description: item.description
            })
          }else {
            globalList.push({
              id: item.id,
              name: item.name,
              coverImgUrl: item.coverImgUrl,
              description: item.description,
              updateFrequency: item.updateFrequency
            })
          }
        })
        this.setState({
          officalList,
          globalList,
          artistToplist
        })
      }
    })
    
    new BScroll('.rank-wrapper', {
      scrollY: true,
      click: true,
      scrollX: false
    })
  }

  render() {
    const {officalList, globalList, artistToplist} = this.state
    return (
      <div>
        <header className="rank-header">
          <Link to='/home'>
            <div className="header-left iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></div>
          </Link>
          <div className="header-title">排行榜</div>
          <div className="header-right"></div>
        </header>
        <div className="rank-wrapper">
          <div className="rank-content">
            <h1 className="title">官方榜单</h1>
            <ul className="row-list">
              {
                officalList.length > 0 && officalList.map(item => {
                  return (
                    <li onClick={() => {
                      this.props.history.push({
                        pathname: `/playlist/${item.id}`
                        })
                      }} 
                      key={item.id} className="row-item">
                      <div className="item-hd">
                        <img src={`${item.coverImgUrl}?param=150y150`} alt=""/>
                          <p>{item.updateFrequency}</p>
                      </div>
                      <div className="row-item-bd">
                        {
                          item.tracks.map((tracks, index) => {
                            return (
                              <p key={`${item.id}${index}`}>
                                {`${tracks.first}-${tracks.second}`}
                              </p>
                            )
                          })
                        }
                      </div>
                    </li>
                  )
                })
              }
              {
                artistToplist && artistToplist.name && (
                  <li className="row-item">
                    <div className="item-hd">
                      <img src={`${artistToplist.coverUrl}?param=150y150`} alt=""/>
                        <p>{artistToplist.updateFrequency}</p>
                    </div>
                    <div className="row-item-bd">
                      {
                        artistToplist.artists.map((item, index) => {
                          return (
                            <p key={`${item.third}${index}`}>
                              {`${item.first}-${item.third}`}
                            </p>
                          )
                        })
                      }
                    </div>
                  </li>
                )
              }
            </ul>
            <h1 className="title">全球榜</h1>
            <ul className="column-list">
              {
                globalList.length > 0 && globalList.map(item => {
                  return (
                    <li onClick={() => {
                      this.props.history.push({
                        pathname: `/playlist/${item.id}`
                        })
                      }}
                      key={item.id} className="column-item">
                      <div className="item-hd">
                        {/* <img src={item.coverImgUrl} alt=""/> */}
                        <img src={`${item.coverImgUrl}?param=150y150`} alt=""/>
                          <p>{item.updateFrequency}</p>
                      </div>
                      <div className="column-bd">{item.name}</div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RankList;