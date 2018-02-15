import React from 'react';
import { Redirect } from 'react-router-dom';
import withAuthorization from '../HOC/withAuthorizationHOC';

class About extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
  }
  render(){
    return (
      <div>
        <h1>About Component</h1>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(About);
