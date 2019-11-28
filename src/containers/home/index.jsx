import React, { Component } from "react";
import "./index.less";
import BScroll from "better-scroll";
import { Link, route } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { getBanner, getPersonalized, getPlaylistDetail } from "../../api";
import { HTTP_OK } from "../../config";
import { formatPlayCount } from "../../common/util";

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

  async componentDidMount() {
    await getBanner().then(res => {
      if (res.data.code === HTTP_OK) {
        this.setState({
          banners: res.data.banners
        });
      }
    });
    if (this.state.banners) {
      new Swiper(".carouselWrap", {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
          delay: 2500,
          disableOnInteraction: false //户操作swiper之后，是否禁止autoplay。默认为true：停止。
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击跳转
        },

        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      });
    }
    await getPersonalized().then(res => {
      if (res.data.code === HTTP_OK) {
        this.setState({
          personalized: res.data.result
        });
      }
    });

    new BScroll(".scroll-wrap", {
      scrollY: true,
      click: true,
      scrollX: false,
      bounce: false
    });
    //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
  }
  render() {
    const { banners, personalized } = this.state;
    return (
      <div>
        <div className="headerWrap">
          <div className="headerIcon">
            <Link to='/login'>
            <i className="iconfont iconyonghu"></i>
            </Link>
            
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
                    banners.map((item, index) => {
                      return (
                        <div className="swiper-slide" key={index}>
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
                {personalized.length > 0 ? (
                  personalized.map((item, index) => {
                    return (
                      <LazyLoad once height={240} key={index}>
                        <li
                          className="song-list-item"
                          onClick={() => {
                            this.props.history.push({
                              pathname: `/playlist/${item.id}`
                            });
                          }}
                        >
                          <div className="item-pic">
                            <img src={item.picUrl} alt="" />
                            <div className="item-lis-num">
                              <i className="iconfont iconerji"></i>
                              <span>{formatPlayCount(item.playCount)}</span>
                            </div>
                          </div>
                          <div className="item-title">
                            <span>{item.name}</span>
                          </div>
                        </li>
                      </LazyLoad>
                    );
                  })
                ) : (
                  <img
                    style={{ margin: "100px 0 0 300px" }}
                    src="data:image/gif;base64,R0lGODlhKAAoAIABANM6Mf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2QURFODRFRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2QURFODRGRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZBREU4NENGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZBREU4NERGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJCgABACwAAAAAKAAoAAACeIyPqcvtD6OctNoD8rUZ7Np9VChKZAmdqKOuTOsqcIzMtGHfuaxxfbRrBGu/UfExXCRxxwRsGdg9m0IqpgmVYq1KbnTrMXmnYeAYzCtf1em2E11lf+VkFpxIP+f37td93dfF9zboVwhIaHfItJjoiBd4IzlJWalQAAAh+QQJCgABACwAAAAAKAAoAAACfIyPqcvtD6OctNqLs94WeB55AAiJ5GOeTaoubJu8nBzQGm0zuYF/0l7zIYAxocvIQzqAvVHROVRGoYemgqm0PpfZLjX53YqnV2nVWw5j1ejxkQ1Pc+Nu8FxeD4bJea2uzRf4hidotwJ4RvenmEg42IfoaFioB2N5iZmZUAAAIfkECQoAAQAsAAAAACgAKAAAAn+Mj6nL7Q+jnLRaCPK1GezafVTIaRIJmhE6qpg7sY98wg692g3+egnNm9mAup6C6EslD8hL8zcsGp4I6sI6jS6PWu42EAR3od8wVlyWor1s8m1chV/l2fQ3bm/j33m3n3F2tvfHREdYp1d4p5iIePgYqBbZB2goKIKZqbnJ+VAAACH5BAUKAAEALAAAAAAoACgAAAJ8jI+py+0PIwRUWkbB3Sjz731bKFpkGZ1mJaktm8KX29CT/Ng57ug9XwPeNC/iSLjwBY1DEFKhxDwTLl/0UH1eDVkmlNf9eqng8thqFquX606aTT6/pfJ6OznH5u/cfQBtF8cnSOgWSDcYBmeYqOWniFiod4hSaXmJmWlRAAA7"
                  />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
