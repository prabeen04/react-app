import React from 'react';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

class Chat extends React.Component{
  constructor(props){
    super(props)
    Nprogress.start();
  }
  componentDidMount(){
    setTimeout(()=>{
      console.log('its done')
      Nprogress.done();
    },2000)
  }
  render(){
    return(
      <h1>Chat Component</h1>
    );
  }

}

export default Chat;
