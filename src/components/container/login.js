import { auth } from '../../firebase';
import React from 'react';
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
  error: ''
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class Login extends React.Component{
  constructor(props){
    super(props);
    console.log(auth);
    this.state = {...INITIAL_STATE};
    this.handleSubmit  = this.handleSubmit.bind(this);
  }

handleSubmit = (event) => {
  console.log(event);
  event.preventDefault();
  auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
  .then(authUser => {
    console.log(authUser);
  })
  .catch(error => {
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
       </div>
     </div>
    );
  }
}

export default Login;
