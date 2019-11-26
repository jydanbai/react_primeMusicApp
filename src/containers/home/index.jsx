import React, { Component } from "react";
import "./index.less";

import Swiper from "swiper";
import "swiper/css/swiper.min.css";
class Home extends Component {
  componentDidMount() {
    //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
    new Swiper(".carouselWrap", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: {
        //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
        delay: 2500,
        disableOnInteraction: true //户操作swiper之后，是否禁止autoplay。默认为true：停止。
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true // 允许点击跳转
      },

      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
  }
  render() {
    return (
      <div>
        <div className="headerWrap">
          <div className="headerIcon">
            <i className="iconfont iconziyuan"></i>
          </div>
          <div className="headerIcon">
            <i className="iconfont iconyinfu"></i>
          </div>
          <div className="headerIcon">
            <i className="iconfont iconsousuo"></i>
          </div>
        </div>
        <div className="homeContainer">
          <div className="banner">
            <div className="bannerBgc"></div>
            <div className="carouselWrap">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    src="http://p1.music.126.net/BiRE39jAJIAKH_pYrg4PFw==/109951164510964214.jpg"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="http://p1.music.126.net/d9HsVguIpLv-lzNqgdTScg==/109951164510277291.jpg"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="http://p1.music.126.net/3qC9QZG0ZJWiH2fE68LTAg==/109951164510358605.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
          <div className="menu">
            <div className="menu-item">
              <div className="menu-icon">
                <i className="iconfont icongedan"></i>
              </div>
              <p>歌单</p>
            </div>
            <div className="menu-item">
              <div className="menu-icon">
                <i className="iconfont iconpaihangbang1"></i>
              </div>
              <p>排行榜</p>
            </div>
          </div>
          <div className="song-list-wrap">
            <div className="title">
              <span>
                推荐歌单
                <i className="iconfont iconarrow-right-copy-copy"></i>
              </span>
            </div>
            <ul className="song-list">
              <li className="song-list-item">
                <div className="item-pic">
                  <img
                    src="https://p1.music.126.net/IhCKOd8Q1MdSQK7zSAHd9A==/109951164457504558.jpg?param=200y200"
                    alt=""
                  />
                  <div className="item-lis-num">
                    <i className="iconfont iconerji"></i>
                    <span>636万</span>
                  </div>
                </div>
                <div className="item-title">
                  <span>[华语速爆新歌] 最新华语音乐推荐</span>
                </div>
              </li>
              <li className="song-list-item">
                <div className="item-pic">
                  <img
                    src="https://p1.music.126.net/IhCKOd8Q1MdSQK7zSAHd9A==/109951164457504558.jpg?param=200y200"
                    alt=""
                  />
                  <div className="item-lis-num">
                    <i className="iconfont iconerji"></i>
                    <span>636万</span>
                  </div>
                </div>
                <div className="item-title">
                  <span>[华语速爆新歌] 最新华语音乐推荐</span>
                </div>
              </li>
              <li className="song-list-item">
                <div className="item-pic">
                  <img
                    src="https://p1.music.126.net/IhCKOd8Q1MdSQK7zSAHd9A==/109951164457504558.jpg?param=200y200"
                    alt=""
                  />
                  <div className="item-lis-num">
                    <i className="iconfont iconerji"></i>
                    <span>636万</span>
                  </div>
                </div>
                <div className="item-title">
                  <span>[华语速爆新歌] 最新华语音乐推荐</span>
                </div>
              </li>
              <li className="song-list-item">
                <div className="item-pic">
                  <img
                    src="https://p1.music.126.net/IhCKOd8Q1MdSQK7zSAHd9A==/109951164457504558.jpg?param=200y200"
                    alt=""
                  />
                  <div className="item-lis-num">
                    <i className="iconfont iconerji"></i>
                    <span>636万</span>
                  </div>
                </div>
                <div className="item-title">
                  <span>[华语速爆新歌] 最新华语音乐推荐</span>
                </div>
              </li>
              <li className="song-list-item">
                <div className="item-pic">
                  <img
                    src="https://p1.music.126.net/IhCKOd8Q1MdSQK7zSAHd9A==/109951164457504558.jpg?param=200y200"
                    alt=""
                  />
                  <div className="item-lis-num">
                    <i className="iconfont iconerji"></i>
                    <span>636万</span>
                  </div>
                </div>
                <div className="item-title">
                  <span>[华语速爆新歌] 最新华语音乐推荐</span>
                </div>
              </li>
              <li className="song-list-item">
                <div className="item-pic">
                  <img
                    src="https://p1.music.126.net/IhCKOd8Q1MdSQK7zSAHd9A==/109951164457504558.jpg?param=200y200"
                    alt=""
                  />
                  <div className="item-lis-num">
                    <i className="iconfont iconerji"></i>
                    <span>636万</span>
                  </div>
                </div>
                <div className="item-title">
                  <span>[华语速爆新歌] 最新华语音乐推荐</span>
                </div>
              </li>
              <li className="song-list-item">
                <div className="item-pic">
                  <img
                    src="https://p1.music.126.net/IhCKOd8Q1MdSQK7zSAHd9A==/109951164457504558.jpg?param=200y200"
                    alt=""
                  />
                  <div className="item-lis-num">
                    <i className="iconfont iconerji"></i>
                    <span>636万</span>
                  </div>
                </div>
                <div className="item-title">
                  <span>[华语速爆新歌] 最新华语音乐推荐</span>
                </div>
              </li>
              <li className="song-list-item">
                <div className="item-pic">
                  <img
                    src="https://p1.music.126.net/IhCKOd8Q1MdSQK7zSAHd9A==/109951164457504558.jpg?param=200y200"
                    alt=""
                  />
                  <div className="item-lis-num">
                    <i className="iconfont iconerji"></i>
                    <span>636万</span>
                  </div>
                </div>
                <div className="item-title">
                  <span>[华语速爆新歌] 最新华语音乐推荐</span>
                </div>
              </li>
              <li className="song-list-item">
                <div className="item-pic">
                  <img
                    src="https://p1.music.126.net/IhCKOd8Q1MdSQK7zSAHd9A==/109951164457504558.jpg?param=200y200"
                    alt=""
                  />
                  <div className="item-lis-num">
                    <i className="iconfont iconerji"></i>
                    <span>636万</span>
                  </div>
                </div>
                <div className="item-title">
                  <span>[华语速爆新歌] 最新华语音乐推荐</span>
                </div>
              </li>
              <li className="song-list-item">
                <div className="item-pic">
                  <img
                    src="https://p1.music.126.net/IhCKOd8Q1MdSQK7zSAHd9A==/109951164457504558.jpg?param=200y200"
                    alt=""
                  />
                  <div className="item-lis-num">
                    <i className="iconfont iconerji"></i>
                    <span>636万</span>
                  </div>
                </div>
                <div className="item-title">
                  <span>[华语速爆新歌] 最新华语音乐推荐</span>
                </div>
              </li>
              <li className="song-list-item">
                <div className="item-pic">
                  <img
                    src="https://p1.music.126.net/IhCKOd8Q1MdSQK7zSAHd9A==/109951164457504558.jpg?param=200y200"
                    alt=""
                  />
                  <div className="item-lis-num">
                    <i className="iconfont iconerji"></i>
                    <span>636万</span>
                  </div>
                </div>
                <div className="item-title">
                  <span>[华语速爆新歌] 最新华语音乐推荐</span>
                </div>
              </li>
              <li className="song-list-item">
                <div className="item-pic">
                  <img
                    src="https://p1.music.126.net/IhCKOd8Q1MdSQK7zSAHd9A==/109951164457504558.jpg?param=200y200"
                    alt=""
                  />
                  <div className="item-lis-num">
                    <i className="iconfont iconerji"></i>
                    <span>636万</span>
                  </div>
                </div>
                <div className="item-title">
                  <span>[华语速爆新歌] 最新华语音乐推荐</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
