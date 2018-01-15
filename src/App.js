import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/navbar';
import Drawer from './components/drawer';
import Flexbox from './components/flexbox';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      myState: 'this is my state'
    }
  }
  render() {
    return (
      <MuiThemeProvider>
      <Navbar/>
      <Drawer/>
      <Flexbox flexState = {this.state.myState}></Flexbox>
    </MuiThemeProvider>
    );
  }
}

export default App;
