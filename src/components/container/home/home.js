import React from 'react';
import {Redirect} from 'react-router-dom';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Image from '../../../assets/images/home-page.jpeg';
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
      value: 'a'
    };
  }

  handleChange = (value) => {
    this.setState({value: value});
  };

  render() {
    return (<div>
      <Paper style={styles} zDepth={3} className="about-paper"></Paper>
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
        <div className="home-card"></div>
        <div className="home-card"></div>
        <div className="home-card"></div>
        <div className="home-card"></div>
        <div className="home-card"></div>
        <div className="home-card"></div>
      </div>
    </div>);
  }
}

export default Home;
