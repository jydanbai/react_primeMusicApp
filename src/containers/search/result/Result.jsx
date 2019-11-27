import { Tabs} from 'antd-mobile';
import React,{Component} from 'react'
import './Result.less'
import {search} from '../../../api'
import { HTTP_OK } from '../../../config'

import BScroll from 'better-scroll'
const tabs = [
    { title: '单曲', sub: '1' },
    { title: '歌单', sub: '2' },
   
  ];
  
 
class Result extends Component {
  constructor(props){
    super(props)
    
    this.state={
      songlist:[]
    }
  }
  
  componentDidMount(){
    new BScroll('.wrapperScroll',{
      scrollY: true,
      click: true,
      scrollX: false,
      
     })
     new BScroll('.wrapperScrollTwo',{
      scrollY: true,
      click: true,
      scrollX: false,
      
     })
   }
   
  
  
render(){
        return(
<div>
    <Tabs tabs={tabs}
      initialPage={0}
      onChange={() => {
        
        search(this.props.value,1000).then(res=>{
          if(res.data.code===HTTP_OK){
            this.setState({
              songlist:res.data.result.playlists
            })
          }
        })
      }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
    <div className="wrapperScroll">
      <div style={{  backgroundColor: '#fff' }} >
        {this.props.songs.length>0&&this.props.songs.map((item,index)=>(
           <div className='left-list' key={index}>
            <h2>{item.name}</h2>
            <p>{item.artists[0].name}</p>
          </div>
        )
       
        )}
       
      </div>
    </div>
    <div className="wrapperScrollTwo">
      <div style={{  backgroundColor: '#fff' }} >
        {this.state.songlist.length>0&&this.state.songlist.map((item,index)=>(
           <div className="right-list" key={index}>
           <div className="img">
               <img src={item.coverImgUrl} alt=""/>
               
            </div>
            <div className="context">
             <span>{item.name}</span>
             <p>{item.trackCount}首by{item.creator.nickname}，播放{item.playCount}万次</p>
            </div>
           
        </div>
        ))}
        
      </div>
    </div> 
     
    </Tabs>
    
    
    
  </div>
        )
    }

}

export default Result





