import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {firebase} from './firebase';
import withAuthentication from './components/HOC/withAuthenticationHOC';

import LoadingContainer from './components/common-components/loading-container';
import Navbar from './components/navbar';
import Home from './components/container/home/home';
import About from './components/container/about/about';
import Feed from './components/container/feed';
import NewsDetail from './components/container/news-detail';
import Chat from './components/container/chat';
import Profile from './components/container/profile';
import Gallary from './components/container/gallary';
import Planner from './components/container/planner/planner';
import Login from './components/container/login';
import Signup from './components/container/signup';
import NotFound from './components/container/notfound';

import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true
    }
    console.log(context);
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
            <Route exact path="/about" render={(props) =><About {...props} />}/>
            <Route exact path="/feed" render={(props) =><Feed {...props} />}/>
            <Route exact path="/news-detail" component={NewsDetail}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/chat" render={(props) =><Chat {...props} />}/>
            <Route exact path="/gallary" render={(props) =><Gallary {...props} />}/>
            <Route exact path="/planner" render={(props) =><Planner {...props} />}/>
            <Route exact path="/login" render={(props) =><Login {...props} />}/>
            <Route exact path="/signup" component={Signup}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>);
  }

}
App.contextTypes = {
  authUser: PropTypes.string,
};

export default withAuthentication(App);
