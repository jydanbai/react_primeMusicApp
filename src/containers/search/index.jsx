import React, { Component } from 'react';
import './index.less'
import {Link} from 'react-router-dom'
import Result from'./result/Result'
import {searchHot,search} from '../../api'
import { HTTP_OK } from '../../config'

class Search extends Component {
  constructor(props){
    super(props)
    this.state={
      hots:[],
      value:'',
      query:'',
      song:[]
    }
  }
  
  async componentDidMount(){
   await searchHot().then(res=>{
      if(res.data.code===HTTP_OK){
        this.setState({
          hots:res.data.result.hots
        })
      }
    })

  }

  searchChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  
  onEnter=async (e)=>{
    //判断是否点击回车
    if(e.keyCode===13){

     await search(e.target.value).then( res=>{
        
        if(res.data.code === HTTP_OK){
            
           this.setState({
             song:res.data.result.songs
           })
        }
      })
      
      
    }
  }
  render() {
    const {hots,value}=this.state
    return (
      <div className="wrapper" >
         <div className="wrapper_header">
          <Link to='/home'> 
          <span className="goback">
            <i className="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></i>
          </span>
          </Link>
           
           
         </div>
         <div className="input">
            <input type="text" className="search" 
            value={value} 
            placeholder="搜索你喜欢的"
            onChange={this.searchChange}
            onKeyDown={this.onEnter}
            />
         </div>

         <div className="content" style={{display:(value===''?"block":"none")}}>
           <h1>热门搜索</h1>
           <div className="search-list">
             <ul className="list">
               {hots.length>0&&
                hots.map((item,index)=>(
                <li 
                key={index}
                onClick={async ()=>{
                  this.setState({query:item.first,value:item.first})
                  await search(item.first).then(res=>{
                    if(res.data.code === HTTP_OK){
                      console.log(res.data)
                       this.setState({
                         song:res.data.result.songs
                       })
                    }
                  })
                }}
                >{item.first}</li>
                ))
               }
               
               
             </ul>
           </div>
         </div>
         <div className="result" style={{display:(value!==''?"block":"none")}}>
            <Result songs={this.state.song?this.state.song:[]} value={this.state.value}/>
         </div>
      </div>
    );
  }
}

export default Search;