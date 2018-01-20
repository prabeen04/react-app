import React, { Component } from 'react';
import Profile from './container/profile';
import About from './container/about';
import Form from './container/form';

class Flexbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'wrapper',
      user: {}
    }
  }
  componentWillMount(){
    console.log('componentWillMount rendered ...')
      fetch('https://api.github.com/users/prabeen04')
        .then(response =>  response.json())
        .then(data => {
          console.log(data);
          this.setState({
            user: data
          })
        });
  }
  render() {
    return (
      <div>
        <Profile />
        <div className="flexbox-container">
          <div className="flex-item">
            <Form />
          </div>
          <div className="flex-item">
            <h4>{this.state.user.url}</h4>
          </div>

            <About className="flex-item" about = {"About Props"}/>
          <div className="flex-item">
            <h4>{this.state.title}</h4>
          </div>
          <div className="flex-item">
            <h4>{this.props.flexState}</h4>
          </div>
          <div className="flex-item">
            <h4>third column</h4>
          </div>
          <div className="flex-item">
            <h4>third column</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Flexbox;
