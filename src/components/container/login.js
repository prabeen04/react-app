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
const inlineStyle = {
  backgroundColor: 'red',
  color:'red'
}
class Login extends React.Component{

  render(){
    return(
      <div style={style} className="flexbox-container login">
        <div className="login-box">
            <h1>Login</h1>
        <TextField
           floatingLabelText="Enter your email"
           floatingLabelStyle={labelStyle}
         /><br />
         <TextField
           floatingLabelText="Password"
           type="password"
           floatingLabelStyle={labelStyle}
         />
       <br/>
       <RaisedButton label="Login" primary={true} />

       </div>
     </div>
    );
  }
}

export default Login;
