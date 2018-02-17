import { auth, firebase } from '../../firebase';
import React from 'react';
import { Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Image from '../../assets/images/planet.jpg';

const style = {
  backgroundImage: `url(${Image})`
}
const labelStyle = {
  color: 'teal'
}
const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  message: ''
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class Login extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {...INITIAL_STATE};
    this.handleSubmit  = this.handleSubmit.bind(this);
    this.signinWithGoogle = this.signinWithGoogle.bind(this);
  }
componentWillMount(){
  if(this.props.authUser){
    console.log('inside login will mount')
    return (<Redirect to={{
        pathname: '/',
        state: {
          message: 'you are already logged in'
        }
      }}/>);
  }
  if(this.props.location.state){
    this.setState({message: this.props.location.state.message});
  }

}
handleSubmit = (event) => {
  console.log(this.props.location);
   const { from } = this.props.location.state || { from: { pathname: '/' } }
  console.log(event);
  event.preventDefault();
    auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
  .then(authUser => {
    console.log(authUser);
    console.log(this.props);
    this.props.history.push(from)
  })
  .catch(error => {
    console.log(error);
    this.setState({
      error
    })
  });

}
signinWithGoogle = () =>{
  auth.doSignInPopup()
  .then(authUser=>{
    console.log('signin with google successfull')
  })
  .catch(error =>{
    console.log(error);
  });
}
  render(){
    const {
        email,
        password,
        error,
      } = this.state;

    const isInvalid =
      password === '' ||
      email === '';
    return(
      <div style={style} className="flexbox-container login">

        <div className="login-box">
            <h1>Login</h1>
            <button onClick={this.signinWithGoogle}>Sign in with google</button>
          <form onSubmit = {this.handleSubmit}>
            <TextField
               floatingLabelText="Enter your email"
               floatingLabelStyle={labelStyle}
               name = "email"
               onChange={(event =>{
                 this.setState(byPropKey('email', event.target.value));
                 console.log(event.target.value)
               })}
             /><br />
             <TextField
               floatingLabelText="Password"
               type="password"
               floatingLabelStyle={labelStyle}
               name = "password"
               onChange ={(event =>{
                 this.setState(byPropKey('password', event.target.value));
               })}
             />
           <br/>
           <RaisedButton
             label="Login"
              primary={true}
              type = "submit"
              disabled = {isInvalid}
               />
         </form>
         { error && <p>{error.message}</p> }
        {this.props.location.state? <h3>{this.props.location.state.message}</h3>: <h1></h1>}
       </div>
     </div>
    );
  }
}

export default Login;
