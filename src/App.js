import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {firebase} from './firebase';

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
  constructor(props) {
    super(props);
    this.state = {
      authUser: localStorage.getItem('user') || null
    }
  //  this.authListener = this.authListener.bind(this);
  }
  componentWillMount() {
      console.log('this.fireBaseListener');
    this.authListener = firebase.auth.onAuthStateChanged(authUser => {
          if (authUser) {
            console.log('authUser presents');
            this.setState({authUser: authUser});
            localStorage.setItem('user', authUser);
          //   setTimeout(()=>{
          //   console.log('authUser presents');
          //   this.setState({authUser: authUser});
          //   localStorage.setItem('user', authUser);
          // },5000)
          } else {
              console.log('authUser not presents');
            this.setState({authUser: null});
            localStorage.removeItem('user', 1);
          }
        });
  }

  // authListener() {
  //
  //   //   console.log('inside authlistener');
  //   // firebase.auth.onAuthStateChanged(authUser => {
  //   //   if (authUser) {setTimeout(()=>{
  //   //     console.log('authUser presents');
  //   //     this.setState({authUser: authUser});
  //   //     localStorage.setItem('user', authUser);
  //   //   },5000)
  //   //   } else {
  //   //       console.log('authUser not presents');
  //   //     this.setState({authUser: null});
  //   //     localStorage.removeItem('user', 1);
  //   //   }
  //   // });
  // }

  componentWillUnmount() {
    console.log('this.fireBaseListener');
    this.authListener();
    // this.fireBaseListener && this.fireBaseListener();
    // this.authListener = undefined;
  }
  render() {
    return (<MuiThemeProvider>
      <Router basename={process.env.PUBLIC_URL}>

        <div>
          <Navbar authUser={this.state.authUser}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/react-app" component={Home}/>
            <Route exact path="/about" render={(props) =><About {...props}
              authUser = { this.state.authUser } />}/>
            <Route exact path="/feed" render={(props) =><Feed { ...props }
              authUser = { this.state.authUser } />}/>
            <Route exact path="/news-detail" component={NewsDetail}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/chat" render={(props) =>< Chat {
                ...props
              }
              authUser = {
                this.state.authUser
              } />}/>
            <Route exact path="/gallary" render={(props) =>< Gallary {
                ...props
              }
              authUser = {
                this.state.authUser
              } />}/>
            <Route exact path="/login" render={(props) =><Login {
                ...props
              }
              authUser = {
                this.state.authUser
              } />}/>
            <Route exact path="/signup" component={Signup}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>);
  }
}

export default App;
