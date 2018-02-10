import React from 'react';
import {Redirect} from 'react-router-dom';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Image from '../../../assets/images/web.jpg';
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
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      heading: 'Bussiness'
    };
  }

  handleChange = (value) => {
    this.setState({value: value});
  };
  componentDidMount(){

  }
  render() {
    return (<div>
      <Paper style={styles} zDepth={3} className="about-paper">
        <div className=" flex-container">
          <h1 className="landing-heading">Face of your {this.state.heading}</h1>
        </div>
        <div className=" flex-container">
          <p className="landing-text">I strive for two things in design: simplicity and clarity. Great design is born of those two things</p>
        </div>
        <div className=" flex-container">
          <BubbleButton title="Get Started"/>
        </div>

      </Paper>
      <Tabs value={this.state.value} onChange={this.handleChange}>
        <Tab icon={<FontIcon className = "material-icons" > phone</FontIcon>} label="RECENTS" value="a">
          <div className="flex-container">
            <Paper zDepth={3} className="tab-paper">

            </Paper>
          </div>
        </Tab>
        <Tab icon={<FontIcon className = "material-icons" > favorite</FontIcon>} label="FAVORITES" value="b">
          <div className="flex-container">
            <Paper zDepth={3} className="tab-paper">

            </Paper>
          </div>
        </Tab>
        <Tab icon={<MapsPersonPin />} label="NEARBY" value="c">
          <div className="flex-container">
            <Paper zDepth={3} className="tab-paper">

            </Paper>
          </div>
        </Tab>
      </Tabs>
      <Divider /><br/>
      <div className="flex-container">
        <div className="home-card flex-container">
          <i className="fab fa-apple fa-5x home-icon"></i>
          <h3>IOS Developement</h3>
        </div>
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
    </div>);
  }
}

export default Home;
