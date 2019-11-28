import React, { Component } from "react";
import ReactAplayer from "react-aplayer";
import "./index.less";

import { getMusicDetail } from "../../api";
import { HTTP_OK } from "../../config";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0, //请求回来的歌单数据
      picUrl: "",
      isShow: "none",
      songs: {}
    };
  }
  async componentWillReceiveProps(nextProps) {
    const { id, picUrl } = nextProps;
    console.log(id);
    this.setState({
      id,
      picUrl,
      isShow: "block"
    });
    await getMusicDetail(id).then(res => {
      if (res.data.code === HTTP_OK) {
        this.setState({
          songs: res.data.data[0]
        });
        console.log(this.state.songs);
      }
    });
  }
  // async componentDidMount() {
  //   const { id, picUrl } = this.props;
  //   console.log(id);
  //   this.setState({
  //     id,
  //     picUrl,
  //     isShow: "block"
  //   });
    
  // }

  onPlay = () => {
    console.log("on play");
  };

  onPause = () => {
    console.log("on pause");
  };

  // example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
  };
  close() {
    this.setState({
      isShow: "none"
    });
    this.ap.pause()
  }
  render() {
    const { id, isShow, songs,picUrl } = this.state;
    console.log(songs);
    const songDetail = {
      volume: 0.7,
      theme: "#E5473C",
      lrcType: 3,
      audio: [
        {
          name: "光るなら",
          artist: "Goose house",
          url: songs.url,
          cover: picUrl,
          theme: "#ebd0c2"
        }
      ]
    };
    return (
      <div className="playerWrap" style={{ display: id ? isShow : !isShow }}>
        <ReactAplayer
          {...songDetail}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
        <div className="close" onClick={() => this.close()}>
          x
        </div>
      </div>
    );
  }
}

export default Player;
