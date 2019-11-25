import React,{Component}from 'react';
import {Router,Switch,Route,Redirect} from 'react-router-dom';

import './App.css';
import routes from './config/routes';
import history from './history';
import Header from './components/header';
import 'antd-mobile/dist/antd-mobile.css';

export default class App extends Component {

  render () {
    return (
      <Router history={history}>
        <Switch> {/* /login/xxx   默认使用不完全匹配 | 使用第一个匹配的路由 */}
          <Redirect from="/" to="/home" exact/>
            <Header>
              <Switch>
                {
                  routes.map(route => <Route {...route} key={route.path}/>)
                }
              </Switch>
            </Header>
        </Switch>
      </Router>
    )
  }
}

