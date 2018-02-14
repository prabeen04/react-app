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
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: ''
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});


class Signup extends React.Component{
  constructor(props){
    super(props)
    this.state = {...INITIAL_STATE}
    console.log(this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    const {
        username,
        email,
        password,
        confirmPassword,
        error,
      } = this.state;
      auth.doCreateUserWithEmailAndPassword(email, password)
        .then((authUser) =>{
          console.log(authUser);
          this.setState(() => ({ ...INITIAL_STATE }));
          this.props.history.push('/about');
        })
        .catch((error) => {
          console.log(error);
          this.setState({error});
        })
        e.preventDefault();
  }
  render(){
    const {
        username,
        email,
        password,
        confirmPassword,
        error,
      } = this.state;
    const isInvalid =
      password !== confirmPassword ||
      password === '' ||
      email === '' ||
      username === '';

    return(
      <div style={style} className="flexbox-container login">
        <div className="login-box">
            <h1>SIgnup</h1>
      <form>
        <TextField
           floatingLabelText="Enter your Username"
           floatingLabelStyle={labelStyle}
           name={this.state.username}
           onChange = {(event) => {
              this.setState(byPropKey('username', event.target.value));
              console.log(event.target.value);
           }}
         /><br />
         <TextField
            floatingLabelText="Enter your email"
            floatingLabelStyle={labelStyle}
             name={this.state.email}
             onChange = {(event) => {
                this.setState(byPropKey('email', event.target.value));
                console.log(event.target.value);
             }}
          /><br />
         <TextField
           floatingLabelText="Password"
           type="password"
           floatingLabelStyle={labelStyle}
            name={this.state.password}
            onChange = {(event) => {
               this.setState(byPropKey('password', event.target.value));
               console.log(event.target.value);
            }}
         /><br />
        <TextField
          floatingLabelText="Confirm Password"
          type="password"
          floatingLabelStyle={labelStyle}
           name={this.state.confirmPassword}
           onChange = {(event) => {
              this.setState(byPropKey('confirmPassword', event.target.value));
              console.log(event.target.value);
           }}
        />
       <br/>
       <RaisedButton
         label="Signup"
         primary={true}
         onClick = {this.handleSubmit}
         disabled={isInvalid}/>
       </form>
       { error && <p>{error.message}</p> }
       </div>
     </div>
    );
  }
}

export default Signup;
