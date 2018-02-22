import React from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

class Chat extends React.Component{
  constructor(props){
    super(props)
    nprogress.start();
  }
  componentDidMount(){
    setTimeout(()=>{
      console.log('its done')
      nprogress.done();
    },2000)
  }
  render(){
    return(
      <h1>Chat Component</h1>
    );
  }

}

export default Chat;
