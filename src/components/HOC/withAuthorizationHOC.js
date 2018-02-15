import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { firebase } from '../../firebase';
import LoadingContainer from '../common-components/loading-container';

const withAuthorization = (authCondition) => (Component) => {
  console.log('inside withAuthorization...');
  class WithAuthorization extends React.Component {
    constructor(props, context){
        super(props, context);
        console.log(context);
      }

    componentDidMount() {
      firebase.auth.onAuthStateChanged((authUser) => {
        if (!authCondition(authUser)) {
          this.props.history.push('/login');
        }
      });
    }
    render() {
      return this.context.authUser ? <Component /> : <LoadingContainer />;
    }

  }
  WithAuthorization.contextTypes = {
    authUser: PropTypes.string
  };

  return withRouter(WithAuthorization);
}

export default withAuthorization;
