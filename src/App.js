import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import Navbar from './components/navbar';
import Flexbox from './components/flexbox';
import Home from './components/container/home';
import About from './components/container/about';
import Feed from './components/container/feed';
import Chat from './components/container/chat';
import Profile from './components/container/profile';
import Gallary from './components/container/gallary';
import Login from './components/container/login';
import Signup from './components/container/signup';
import NotFound from './components/container/notfound';

import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      myState: 'this is my state',
    }
  }


  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
          <Navbar/>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL +"/" }component={Home}/>
              <Route exact path={process.env.PUBLIC_URL +"/react-app"} component={Home}/>
              <Route exact path={process.env.PUBLIC_URL +"/about"} component={About}/>
              <Route exact path={process.env.PUBLIC_URL +"/feed"} component={Feed}/>
              <Route exact path={process.env.PUBLIC_URL +"/profile"} component={Profile}/>
              <Route exact path={process.env.PUBLIC_URL +"/chat"} component={Chat}/>
              <Route exact path={process.env.PUBLIC_URL +"/gallary"} component={Gallary}/>
              <Route exact path={process.env.PUBLIC_URL +"/login"} component={Login}/>
              <Route exact path={process.env.PUBLIC_URL +"/signup"} component={Signup}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
    </MuiThemeProvider>
    );
  }
}

export default App;
