import React, { Component } from 'react';
import ReactAplayer from 'react-aplayer';
import  './index.less';

import { getMusicDetail } from '../../api'
import {HTTP_OK } from '../../config'

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:0,//请求回来的歌单数据
      picUrl:'',
      isShow:'none',
      songs:[]
    };
  }
  componentWillReceiveProps(nextProps){
    const {id, picUrl} = nextProps
    this.setState({
      id,
      picUrl,
      isShow:'block',
     
    });
     getMusicDetail(id).then(res=>{
      if(res.data.code === HTTP_OK){
        console.log(id)
        this.setState({
          songs:res.data.data
        })
        // console.log(this.state.songs[0].url)
        
      }
    })
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
  close(){
    this.setState({
      isShow:'none'
    })
  }
  render() {
    const {id,isShow,songs} =this.state
    // const url=songs[0].url
    const props = {
      autoplay:true,
      volume:0.7,
      theme: '#E5473C',
      lrcType: 3,
      audio: [
        {
          name: '光るなら',
          artist: 'Goose house',
          url: 'https://music.163.com/song/media/outer/url?id=66476.mp3',
          cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
          lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
          theme: '#ebd0c2'
        }
      ]
    };
    return (
      
      <div className="playerWrap" style={{display:id?isShow:!isShow}}>
        <ReactAplayer
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
          
        />
        <div className="close" onClick={()=>this.close()}>x</div>
      </div>
    );
  }
}

export default Player;