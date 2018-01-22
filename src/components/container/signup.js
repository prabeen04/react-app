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

class Signup extends React.Component{

  render(){
    return(
      <div style={style} className="flexbox-container login">
        <div className="login-box">
            <h1>SIgnup</h1>
        <TextField
           floatingLabelText="Enter your Username"
           floatingLabelStyle={labelStyle}
         /><br />
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
       <RaisedButton label="Signup" primary={true} />

       </div>
     </div>
    );
  }
}

export default Signup;
