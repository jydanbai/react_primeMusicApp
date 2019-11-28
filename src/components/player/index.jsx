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
          url: "http://m8.music.126.net/20191128203855/308978b00cdd0b84947c625444c76fd1/ymusic/0259/035b/545f/530ae60b9041df525b98c52ba196512e.mp3",
          cover: 'https://p2.music.126.net/6A_QXhLcshjeQwet-NheAQ==/109951164500651279.jpg',
          theme: "#ebd0c2"
        }
      ]
    };
    console.log(songs.url);
    // songDetail.audio[0].url=songs.url
    // songDetail.audio[0].cover=songs.picUrl
    console.log('songDetail',songDetail);
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
