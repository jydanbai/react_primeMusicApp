import React, { Component } from "react";
import "./index.less";
import BScroll from "better-scroll";
import { Link, route } from "react-router-dom";
import { getBanner, getPersonalized } from "../../api";
import { HTTP_OK } from "../../config";
import {formatPlayCount} from '../../common/util';

import Swiper from "swiper";
import "swiper/css/swiper.min.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
      personalized: []
    };
  }
  componentWillUpdate(){
    new BScroll(".scroll-wrap", {
      scrollY: true,
      click: true,
      scrollX: false,
      bounce: false
    });
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
  async componentDidMount() {
    await getBanner().then(res => {
      if (res.data.code === HTTP_OK) {
        this.setState({
          banners: res.data.banners
        });
      }
    });
    await getPersonalized().then(res => {
      if (res.data.code === HTTP_OK) {
        this.setState({
          personalized: res.data.result
        });
      }
    });
    
  }
  render() {
    const { banners, personalized } = this.state;
    console.log(this)
    return (
      <div>
        <div className="headerWrap">
          <div className="headerIcon">
            <i className="iconfont iconziyuan"></i>
          </div>
          <div className="headerIcon">
            <i className="iconfont iconyinfu"></i>
          </div>
          <Link to="/search">
            <div className="headerIcon">
              <i className="iconfont iconsousuo"></i>
            </div>
          </Link>
        </div>
        <div className="scroll-wrap">
          <div className="homeContainer">
            <div className="banner">
              <div className="bannerBgc"></div>
              <div className="carouselWrap">
                <div className="swiper-wrapper">
                  {banners.length > 0 &&
                    banners.map(item => {
                      return (
                        <div className="swiper-slide" key={item.targetId}>
                          <img src={item.imageUrl} alt="" />
                        </div>
                      );
                    })}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="menu">
              <Link to="/songlist">
                <div className="menu-item">
                  <div className="menu-icon">
                    <i className="iconfont icongedan"></i>
                  </div>
                  <p>歌单</p>
                </div>
              </Link>
              <Link to="/ranklist">
                <div className="menu-item">
                  <div className="menu-icon">
                    <i className="iconfont iconpaihangbang1"></i>
                  </div>
                  <p>排行榜</p>
                </div>
              </Link>
            </div>
            <div className="song-list-wrap">
              <div className="title">
                <span>
                  推荐歌单
                  <i className="iconfont iconarrow-right-copy-copy"></i>
                </span>
              </div>
              <ul className="song-list">
                {personalized.length > 0 &&
                  personalized.map(item => {
                    return (
                      <li className="song-list-item" key={item.id}>
                        <div className="item-pic">
                          <img
                            src={item.picUrl}
                            alt=""
                          />
                          <div className="item-lis-num">
                            <i className="iconfont iconerji"></i>
                            <span>{formatPlayCount(item.playCount)}</span>
                          </div>
                        </div>
                        <div className="item-title">
                          <span>{item.name}</span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
