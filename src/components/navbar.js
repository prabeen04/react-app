import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import{ auth } from '../firebase';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import Devices from 'material-ui/svg-icons/device/devices';
import Forum from 'material-ui/svg-icons/communication/forum';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Divider from 'material-ui/Divider';
import QuestionAnswer from 'material-ui/svg-icons/action/question-answer';
import Download from 'material-ui/svg-icons/file/file-download';
import Theaters from 'material-ui/svg-icons/action/theaters';
import Input from 'material-ui/svg-icons/action/input';

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
    console.log(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.titleClick = this.titleClick.bind(this);
  }
  titleClick = () =>{
    this.props.history.push('/');
  }
  handleToggle = () =>this.setState({open: !this.state.open})
  handleSignOut = () => {
    this.setState({open: !this.state.open});
    auth.doSignOut()
    .then(() => {
      console.log('signed out successfully');
      this.props.history.push('/login')
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <AppBar
        className="navbar"
        title={this.state.logo}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonClick={ this.handleToggle }
        onTitleClick={this.titleClick}
        titleStyle={{cursor: 'pointer'}}
      />
        <Drawer
          docked={false}
          width={230}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleToggle} primaryText="" leftIcon={<Dashboard />} />
            <Paper style={style.paper}>
              <Menu>
                {
                  this.props.authUser
                  ?(
                    <div>
                    <Link to="/about" onClick={this.handleToggle}>
                       <MenuItem primaryText="About" leftIcon={<Devices />} />
                    </Link>
                    <Link to="/feed" onClick={this.handleToggle}>
                      <MenuItem primaryText="Feed" leftIcon={<Forum />} />
                    </Link>
                    <Link to="/profile" onClick={this.handleToggle}>
                      <MenuItem primaryText="Profile" leftIcon={<AccountCircle />} />
                    </Link>
                    <Link to="/chat" onClick={this.handleToggle}>
                      <MenuItem primaryText="Chat Room" leftIcon={<QuestionAnswer />} />
                    </Link>
                    <Link to="/gallary" onClick={this.handleToggle}>
                      <MenuItem primaryText="Gallary" leftIcon={<Theaters />} />
                    </Link>
                      <MenuItem
                         primaryText="SignOut"
                        leftIcon={<Input />}
                        onClick = {this.handleSignOut}
                        />
                      </div>
                  )
                  :(<div>
                    <Link to="/about" onClick={this.handleToggle}>
                       <MenuItem primaryText="About" leftIcon={<Devices />} />
                    </Link>
                    <Link to="/login" onClick={this.handleToggle}>
                      <MenuItem primaryText="Login" leftIcon={<Input />} />
                    </Link>
                    <Link to="/signup" onClick={this.handleToggle}>
                      <MenuItem primaryText="Signup" leftIcon={<Input />} />
                    </Link>
                  </div>
                  )
                }

              </Menu>
            </Paper>
        </Drawer>
      </div>

    );
  }
}

export default withRouter(Navbar);
