import { Tabs, WhiteSpace, Badge} from 'antd-mobile';
import React,{Component} from 'react'
import './Result.less'
const tabs = [
    { title: '单曲', sub: '1' },
    { title: '歌单', sub: '2' },
   
  ];
  
 
class Result extends Component {
    render(){
        return(
<div>
    <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={{  backgroundColor: '#fff' }}>
       <div class='left-list'>
       <h2>啦啦</h2>
        <p>哈哈哈哈</p>
       </div>
      </div>
      <div style={{  backgroundColor: '#fff' }}>
        <div class="right-list">
           <div class="img">
               <img src="https://p2.music.126.net/d8vFObt1avQD_dyQL0qxXQ==/109951164466973554.jpg?param=70y70" alt=""/>
               
            </div>
            <div class="context">
            <span>不不不不不</span>
            <p>666首 by 皮皮山，播放2我8万次</p>
            </div>
           
        </div>
      </div>
     
    </Tabs>
    
    
    
  </div>
        )
    }

}

export default Result





