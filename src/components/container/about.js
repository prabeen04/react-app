import React from 'react';
import Paper from 'material-ui/Paper';
import Image from '../../assets/images/abstract.jpg';
import ResponsiveImage from '../../assets/images/responsive.png';
import MobileImage from '../../assets/images/mobile-device.png';
import GoogleImage from '../../assets/images/google.png';

const style = {
  padding: 40,
  backgroundImage: `url(${Image})`
}
class About extends React.Component{

  render(){
    return (
      <div>
        <Paper style={style} zDepth={3} className="about-paper">
          <div class="flexbox-container about">
            <h1> Explore the new React App</h1>
            <h3>Material Design is the best</h3>
          </div>
        </Paper>

        <div class="about">
          <div className="flex-basis-about1">
              <img className="desc-img" src={ResponsiveImage} alt="about"/>
          </div>
          <paper style={style} zDepth={4} className="flex-basis-about1">
            <h2> Explore the new React App</h2>
              <p>This is a starter app for react and material it doesn't have anything extra-ordinary but it is going to be soon.</p>
          </paper>
        </div>
        <div class="about">
          <div className="flex-basis-about1">
              <img className="desc-img" src={MobileImage} alt="about"/>
          </div>
          <div className="flex-basis-about1">
            <h2> Explore the new React App</h2>
              <p>This is a starter app for react and material it doesn't have anything extra-ordinary but it is going to be soon.</p>
                <p>This is a starter app for react and material it doesn't have anything extra-ordinary but it is going to be soon.</p>
              <p>This is a starter app for react and material it doesn't have anything extra-ordinary but it is going to be soon.</p>
          </div>
        </div>
        <div class="about">
          <div className="flex-basis-about1">
              <img className="desc-img" src={GoogleImage} alt="about"/>
          </div>
          <div className="flex-basis-about1">
            <h2> Explore the new React App</h2>
              <p>This is a starter app for react and material it doesn't have anything extra-ordinary but it is going to be soon.</p>
          </div>
        </div>
    </div>

    );
  }
}

export default About;
