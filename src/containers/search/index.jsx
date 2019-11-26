import React, { Component } from 'react';
import './index.less'
class Search extends Component {
  render() {
    return (
      <div class="wrapper">
         <div class="wrapper_header">
           <span class="goback"><i class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></i></span>
           <div class="input">
            <input type="text" class="search" placeholder="搜索你喜欢的"/>
           </div>
           
         </div>
      </div>
    );
  }
}

export default Search;