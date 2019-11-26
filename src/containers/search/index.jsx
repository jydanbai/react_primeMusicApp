import React, { Component } from 'react';
import './index.less'
import Result from'./result/Result'
class Search extends Component {
  render() {
    return (
      <div class="wrapper" >
         <div class="wrapper_header">
           <span class="goback"><i class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></i></span>
           
           
         </div>
         <div class="input">
            <input type="text" class="search" placeholder="搜索你喜欢的"/>
         </div>

         <div class="content">
           <h1>热门搜索</h1>
           <div class="search-list">
             <ul class="list">
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
         <div class="result">
            <Result/>
         </div>
      </div>
    );
  }
}

export default Search;