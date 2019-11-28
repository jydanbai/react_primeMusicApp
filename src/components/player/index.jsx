import React, { Component } from 'react';
import ReactAplayer from 'react-aplayer';
import  './index.less';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:0,//请求回来的歌单数据
      picUrl:'',
      isShow:'none'
    };
  }
  componentWillReceiveProps(nextProps){
    const {id, picUrl} = nextProps
    this.setState({
      id,
      picUrl
    });
    console.log(id,picUrl);
  }
  
  isShow() {
    if(id){
      this.setState({
        isShow: 'block',
      })
    }
    return isShow
  }
  onPlay = () => {
    console.log('on play');
  };

  onPause = () => {
    console.log('on pause');
  };

  // example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
  };
  render() {
    const {id} =this.state
    const props = {
      autoplay:true,
      volume:0.7,
      theme: '#E5473C',
      lrcType: 3,
      audio: [
        {
          name: '光るなら',
          artist: 'Goose house',
          url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
          cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
          lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
          theme: '#ebd0c2'
        }
      ]
    };
    return (
      
      <div className="playerWrap" style={{display:this.isShow}}>
        <ReactAplayer
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
        <div className="close" style={{display:this.isShow}}>x</div>
      </div>
    );
  }
}

export default Player;