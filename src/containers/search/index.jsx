import React, { Component } from 'react';
import './index.less'
import Result from'./result/Result'
class Search extends Component {
  render() {
    return (
      <div className="wrapper" >
         <div className="wrapper_header">
           <span className="goback"><i className="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></i></span>
           
           
         </div>
         <div className="input">
            <input type="text" className="search" placeholder="搜索你喜欢的"/>
         </div>

         <div className="content">
           <h1>热门搜索</h1>
           <div className="search-list">
             <ul className="list">
               <li>啦啦啦啦啦啦</li>
               <li>啦啦啦啦啦啦</li>
               <li>啦啦啦啦啦啦</li>
               <li>啦啦啦啦啦啦</li>
               <li>啦啦啦啦啦啦</li>
               <li>啦啦啦啦啦啦</li>
               <li>啦啦啦啦啦啦</li>
               <li>啦啦啦啦啦啦</li>
               <li>啦啦啦啦啦啦</li>
             </ul>
           </div>
         </div>
         <div className="result">
            <Result/>
         </div>
      </div>
    );
  }
}

export default Search;