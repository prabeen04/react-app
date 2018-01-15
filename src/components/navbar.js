import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

class Navbar extends Component {
  render() {
    return (
      <AppBar
      className="navbar"
      title="Prabeen"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonClick={
        () => {
          console.log('this is clicked!!!')
        }
      }
    />
    );
  }
}

export default Navbar;
