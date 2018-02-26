import React from 'react';
import {Redirect, Link} from 'react-router-dom';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Image from '../../../assets/images/web.jpg';
import ResponsiveImage from '../../../assets/images/responsive.png';
import MacbookImage from '../../../assets/images/macbook.png';
import IphoneImage from '../../../assets/images/iphone-x.png';
import BubbleButton from '../../common-components/buttons/bubble-button';
import './home.css';

const styles = {
  padding: 40,
  backgroundImage: `url(${Image})`,
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  },
  cardStyles: {
    width: '400px'
  }
}
const Home  = (props) => {
 
    return (<div>
      <Paper style={styles} zDepth={3} className="about-paper">
        <div className=" flex-container">
          <h1 className="landing-heading">Face of your BUSSINESS</h1>
        </div>
        <div className=" flex-container">
          <p className="landing-text">I strive for two things in design: simplicity and clarity. Great design is born of those two things</p>
        </div>
        <div className=" flex-container">
          <BubbleButton title="Get Started"/>
        </div>
      </Paper>
      <br/>
      <div className="flex-container">
        <Link to="/ios"><div className="home-card flex-container">
          <i className="fab fa-apple fa-5x home-icon"></i>
          <h3>IOS Developement</h3>
        </div>
        </Link>
        <div className="home-card flex-container">
          <i className="fab fa-android fa-5x home-icon"></i>
          <h3>Android Developement</h3>
        </div>
        <div className="home-card flex-container">
          <i className="fab fa-react fa-5x home-icon"></i>
          <h3>React Developement</h3>
        </div>
        <div className="home-card flex-container">
          <i className="fab fa-angular fa-5x home-icon"></i>
          <h3>Angular Developement</h3>
        </div>
        <div className="home-card flex-container">
          <i className="fab fa-node-js fa-5x home-icon"></i>
          <h3>Node js Developement</h3>
        </div>
        <div className="home-card flex-container">
          <i className="fas fa-globe fa-5x home-icon"></i>
          <h3>FrontEnd Developement</h3>
        </div>
      </div>
      <div className="flex-container light-background">
        <div className="flex-image-container">
          <img src={IphoneImage}  className="flex-image"/>
        </div>
        <div className="flex-description">
          <h1 className="heading-color">Explore the latest Design Trendz</h1>
          <p className="text-color">The best and latest App design , Very neat and clear design with intuitive UI/UX design.
          Mobile is not the future, it is the now. Meet your customers in the environment of their choice, not where it's convenient for you.</p>
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-description">
          <h1 className="heading-color">Explore the latest Design Trendz</h1>
          <p className="text-color">The best and latest App design , Very neat and clear design with intuitive UI/UX design.
          Mobile is not the future, it is the now. Meet your customers in the environment of their choice, not where it's convenient for you.</p>
        </div>
        <div className="flex-image-container" style={{padding: '4rem'}}>
          <img src={ResponsiveImage}  className="flex-image"/>
        </div>
      </div>
      <div className="flex-container light-background">
        <div className="flex-image-container" style={{padding: '4rem'}}>
          <img src={MacbookImage}  className="flex-image"/>
        </div>
        <div className="flex-description">
          <h1 className="heading-color">Explore the latest Design Trendz</h1>
          <p className="text-color">The best and latest App design , Very neat and clear design with intuitive UI/UX design.
          Mobile is not the future, it is the now. Meet your customers in the environment of their choice, not where it's convenient for you.</p>
        </div>
      </div>
      <div className="flex-container contact-background">
        <div className="flex-container">
          <h2 className="white-heading" style={{zIndex: 333, fontSize: '2.5rem'}}>Contact Me</h2>
        </div>
        <div className="flex-container" style={{zIndex: 333}}>
          <form id="" target="_blank">
            <input type="text" className="contact-input"/>
          </form>
        </div>
      </div>
      <div className="flex-container" style={{backgroundColor: '#202c56', fontFamily: 'Nanum Brush Script', fontSize: '1.5rem'}}>
        <p className="white-heading">Copyright reserved@2018</p>
      </div>
    </div>);
  }

export default Home;
