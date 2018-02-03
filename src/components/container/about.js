import React from 'react';
import { Redirect } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Image from '../../assets/images/abstract.jpg';
import ResponsiveImage from '../../assets/images/responsive.png';
import MobileImage from '../../assets/images/mobile-device.png';


const style = {
  padding: 40,
  backgroundImage: `url(${Image})`
}
class About extends React.Component{
  constructor(props){
    super(props);
    console.log(window.localStorage)
    console.log(props);
  }
  render(){
    if(!this.props.authUser){
      return(<Redirect to={{
        pathname:'/login',
        state: {message: 'please login to view this page'}}}/>);
    }
    return (
      <div>
        <Paper style={style} zDepth={3} className="about-paper">
          <div className="flexbox-container about-heading">
            <h1> Explore the new React App</h1>
            <h3>Material Design is the best</h3>
          </div>
        </Paper>

        <div className="about">
          <div className="flex-basis-about1">
              <img className="desc-img" src={ResponsiveImage} alt="about"/>
          </div>
          <div className="flex-basis-about1">
            <h2> Explore the new React App</h2>
              <p>This is a starter application in React and Material it doesn't have anything extra-ordinary but it is going to be soon.</p>
          </div>
        </div>

        <div className="about">
          <div className="flex-basis-about2">
            <h2> Explore the new React App</h2>
              <p>This is a starter app for react and material it doesn't have anything extra-ordinary but it is going to be soon.</p>
              <p>This is a starter app for react and material it doesn't have anything extra-ordinary but it is going to be soon.</p>
          </div>
          <div className="flex-basis-about1">
              <img className="desc-img" src={MobileImage} alt="about"/>
          </div>
        </div>
    </div>

    );
  }
}

export default About;
