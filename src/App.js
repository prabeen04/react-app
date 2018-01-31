import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/container/home';
import About from './components/container/about';
import Feed from './components/container/feed';
import NewsDetail from './components/container/news-detail';
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
    console.log(props)
  }


  render() {
    return (
      <MuiThemeProvider>
        <Router basename={process.env.PUBLIC_URL}>

          <div>
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/react-app" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/feed" component={Feed}/>
              <Route exact path="/news-detail" component={NewsDetail}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/chat" component={Chat}/>
              <Route exact path="/gallary" component={Gallary}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route path="*" component={NotFound}/>
            </Switch>
          </div>
        </Router>
    </MuiThemeProvider>
    );
  }
}

export default App;
