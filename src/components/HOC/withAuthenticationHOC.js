import React from 'react';
import PropTypes from 'prop-types'
import {firebase} from '../../firebase';

const withAuthentication = (Component) =>{
  class withAuthentication extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          authUser: null
        }
    };
    getChildContext(){
      return{
        authUser: this.state.authUser
      }
    }

  componentWillMount() {
      console.log('withAuthentication HOC');
    this.authListener = firebase.auth.onAuthStateChanged(authUser => {
          if (authUser) {
            this.setState({authUser: authUser, loading: false});
            localStorage.setItem('user', authUser);
          } else {
            this.setState({authUser: null, loading: false});
            localStorage.removeItem('user', 1);
          }
        });
    }
    render(){
      return(
        <Component/>
      );
    }

  }

  withAuthentication.childContextTypes = {
    authUser: PropTypes.object,
  };
  return withAuthentication;
}
export default withAuthentication;
