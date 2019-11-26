import React,{Component}from 'react';
import {Router,Switch,Route,Redirect} from 'react-router-dom';

import './App.css';
// import routes from './config/routes';
import history from './history';
import Header from './components/header';
import Home from './containers/home';
import rankList from './containers/rankList';
import search from './containers/search';
import SongList from './containers/songList';
import 'antd-mobile/dist/antd-mobile.css';

export default class App extends Component {

  render () {
    return (
      <Router history={history}>
            <Header/>
            <Switch>
              <Route path='/home' component={Home}></Route>
              <Route path='/ranklist' component={rankList}></Route>
              <Route path='/search' component={search}></Route>
              <Route path='/songlist' component={SongList}></Route>
              <Redirect from="/" to="/home" exact/>
            </Switch>
      </Router>
    )
  }
}

