import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  padding: 40
}
class About extends React.Component{
    constructor(props){
      super(props)
    }
  render(){
    return (
      <div>
        <Paper style={style} zDepth={5}>
          <h2> About Component</h2>
          <h3> Props Received: {this.props.about}</h3>
        </Paper>
    </div>

    );
  }
}

export default About;
