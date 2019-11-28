import React, { Component } from "react";
import BScroll from "better-scroll";
import { getPlaylistDetail } from "../../api";
import { HTTP_OK } from "../../config";
import { formatPlayCount } from "../../common/util";
import Player from "../../components/player";
import "./index.less";

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      id:0 ,//请求回来的歌单数据
      picUrl:''
    };
  }

  async componentDidMount() {
    await getPlaylistDetail(this.props.match.params.id).then(res => {
      if (res.data.code === HTTP_OK) {
        let data = res.data.playlist;
        this.setState({
          data
        });
      }
    });
    new BScroll(".rankDetail-wrapper", {
      scrollX: false,
      scrollY: true,
      click: true
    });
  }

  render() {
    const { data,id,picUrl} = this.state;
    const { creator = "", tracks = [] } = data;
    return (
      <div>
        <header className="rankDetail-header">
          <div
            onClick={() => {
              this.props.history.go(-1);
            }}
            className="header-left iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"
          ></div>
          <div className="header-title">{data.name}</div>
          <div className="header-right"></div>
        </header>
        <div className="rankDetail-wrapper">
          <div className="rankDetail-content">
            <div className="playList-header">
              <div
                style={{ backgroundImage: `url(${data.coverImgUrl})` }}
                className="beijingtu"
              ></div>
              <div className="playList-header-wrapper">
                <div
                  className="playList-header-hd"
                  data-play={`${formatPlayCount(data.playCount)}`}
                >
                  <img src={data.coverImgUrl} alt="" />
                </div>
                <div className="playList-header-bd">
                  <h1>{data.name}</h1>
                  <div className="playList-header-user">
                    <img src={`${creator.avatarUrl}?param=50y50`} alt="" />
                    <span>{creator.nickname}</span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="song-wrapper">
              {tracks.length > 0 &&
                tracks.map((item, index) => {
                  return (
                    <li key={item.id} className="song-item" onClick={()=>{
                      this.setState({
                        id:item.id,
                        picUrl:item.al.picUrl
                      })
                    }}>
                      <div className="song-num">{index + 1}</div>
                      <div className="song-info">
                        <h2>{item.name}</h2>
                        <p>
                          <span>{item.ar[0].name}</span>
                          &nbsp;-&nbsp;
                          {item.al.name}
                        </p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <Player id={id} picUrl={picUrl}/>
        </div>
      </div>
    );
  }
}

export default PlayList;
