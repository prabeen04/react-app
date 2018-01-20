import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';


const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    width: 230,
     margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};
class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: 'TECHSCRIPT',
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = () =>this.setState({open: !this.state.open})
  render() {
    return (
      <div>
        <AppBar
        className="navbar"
        title={this.state.logo}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonClick={ this.handleToggle }
      />
        <Drawer
          docked={false}
          width={230}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleToggle} primaryText="" leftIcon={<RemoveRedEye />} />
            <Paper style={style.paper}>
              <Menu>
              <Link to="/about" onClick={this.handleToggle}>
                 <MenuItem primaryText="About" leftIcon={<RemoveRedEye />} />
              </Link>
              <Link to="/feed" onClick={this.handleToggle}>
                <MenuItem primaryText="Feed" leftIcon={<PersonAdd />} />
              </Link>
              <Link to="/profile" onClick={this.handleToggle}>
                <MenuItem primaryText="Profile" leftIcon={<ContentLink />} />
              </Link>
                <Divider />
              <Link to="/chat" onClick={this.handleToggle}>
                <MenuItem primaryText="Chat Room" leftIcon={<ContentCopy />} />
              </Link>
              <Link to="/login" onClick={this.handleToggle}>
                <MenuItem primaryText="Login" leftIcon={<Download />} />
              </Link>
                <Divider />
              <Link to="/signup" onClick={this.handleToggle}>
                <MenuItem primaryText="Signup" leftIcon={<Delete />} />
              </Link>
              <Link to="/profile" onClick={this.handleToggle}>
                <MenuItem primaryText="Profile" leftIcon={<Delete />} />
              </Link>
              <Link to="/gallary" onClick={this.handleToggle}>
                <MenuItem primaryText="Gallary" leftIcon={<Delete />} />
              </Link>
              </Menu>
            </Paper>
        </Drawer>
      </div>

    );
  }
}

export default Navbar;
