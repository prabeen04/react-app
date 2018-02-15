import React from 'react';
import PropTypes from 'prop-types'
import {firebase} from '../../firebase';

const withAuthentication = (Component) =>{
  class WithAuthentication extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          authUser: localStorage.getItem('user') || null
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
            console.log(authUser)
            this.setState({authUser: authUser});
            localStorage.setItem('user', authUser);
          } else {
            this.setState({authUser: null});
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

  WithAuthentication.childContextTypes = {
    authUser: PropTypes.string,
  };
  return WithAuthentication;
}
export default withAuthentication;
