import React from 'react';
import PropTypes from 'prop-types'
import {firebase} from '../../firebase';
import LoadingContainer from '../common-components/loading-container';

const withAuthentication = (Component) =>{
  class WithAuthentication extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          authUser: localStorage.getItem('user') || null,
          loading: true
        }
    };
    getChildContext(){
      return{
        authUser: this.state.authUser
      }
    }

  componentDidMount() {
      console.log('withAuthentication HOC');
    this.authListener = firebase.auth.onAuthStateChanged(authUser => {
          if (authUser) {
            console.log(authUser)
            this.setState({authUser: authUser.uid, loading: false});
            localStorage.setItem('user', authUser.uid);
          } else {
            this.setState({authUser: null, loading: false});
            localStorage.removeItem('user', 1);
          }
        });
    }
    componentWillUnmount() {

      this.authListener();

    }
    render(){
      return !this.state.loading ? <Component/> : <LoadingContainer />
    }

  }

  WithAuthentication.childContextTypes = {
    authUser: PropTypes.string,
  };
  return WithAuthentication;
}
export default withAuthentication;
