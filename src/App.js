import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import Navbar from './components/navbar';
import Flexbox from './components/flexbox';
import Home from './components/container/home';
import About from './components/container/about';
import Feed from './components/container/feed';
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
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/feed" component={Feed}/>
          </div>
        </Router>
    </MuiThemeProvider>
    );
  }
}

export default App;
