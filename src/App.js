import React,{Component,Suspense}from 'react';
import {Router,Switch,Route,Redirect} from 'react-router-dom';

import './App.css';
import Loading from './components/loading'

import History from './history';
import Header from './components/header';
import Login from './containers/login'
import Home from 'lazy!./containers/home';
import RankList from 'lazy!./containers/rankList';
import Search from 'lazy!./containers/search';
import SongList from 'lazy!./containers/songList';
import PlayList from 'lazy!./containers/playList';
import Skin from 'lazy!./containers/skin';
import 'antd-mobile/dist/antd-mobile.css';

export default class App extends Component {
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
  render () {
    return (
      <Router history={History}>
        <Header/>
        <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/playList/:id' component={PlayList}></Route>
          <Route path='/ranklist' component={RankList}></Route>
          <Route path='/search' component={Search}></Route>
          <Route path='/skin' component={Skin}></Route>
          <Route path='/songlist' component={SongList}></Route>
          <Redirect from="/" to="/home" exact/>
        </Switch>
        </Suspense>
      </Router>
    )
  }
}

