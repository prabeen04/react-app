import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Redirect} from 'react-router-dom';
import { firebase } from '../../firebase';
import LoadingContainer from '../common-components/loading-container';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const withAuthorization = (authCondition) => (Component) => {
  console.log('inside withAuthorization...');
  class WithAuthorization extends React.Component {
    constructor(props, context){
        super(props, context);
        console.log(context);
        Nprogress.start();
      }

    componentDidMount() {
      firebase.auth.onAuthStateChanged((authUser) => {
        if (!authCondition(authUser)) {
          this.props.history.push('/login');
          // <Redirect to={ {
          //      pathname: '/login',
          //      // state: {from: renderProps.location}
          //    } } />
        }
      });
      Nprogress.done();
    }
    render() {
      return this.context.authUser ? <Component {...this.props}/> : <LoadingContainer />;
    }

  }
  WithAuthorization.contextTypes = {
    authUser: PropTypes.string
  };

  return withRouter(WithAuthorization);
}

export default withAuthorization;
