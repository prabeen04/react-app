import React from 'react';
import { Redirect } from 'react-router-dom';
import withAuthorization from '../../HOC/withAuthorizationHOC';
import LineChart from '../../utility/chart-js/line-chart';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';


class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 'a',
      heading: 'Bussiness'
    };
  }
  handleChange = (value) => {
    this.setState({value: value});
  };
  render(){
    return (
      <div>
      <Tabs value={this.state.value} onChange={this.handleChange}>
        <Tab style={{backgroundColor: '#444'}} icon={<FontIcon className = "material-icons" > phone</FontIcon>} label="RECENTS" value="a">
          <div className="flex-container">
            <Paper zDepth={3} className="tab-paper flex-container">
              <div>
                <h1>Phone Section</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in totam nostrum facere exercitationem doloremque. Ducimus in facere quaerat praesentium!</p>
              </div>
            </Paper>
          </div>
        </Tab>
        <Tab style={{backgroundColor: '#555'}} icon={<FontIcon className = "material-icons" > favorite</FontIcon>} label="FAVORITES" value="b">
          <div className="flex-container">
            <Paper zDepth={3} className="tab-paper flex-container">
            <div>
              <h1>Favourite Section</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in totam nostrum facere exercitationem doloremque. Ducimus in facere quaerat praesentium!</p>
            </div>
            </Paper>
          </div>
        </Tab>
        <Tab style={{backgroundColor: '#444'}} icon={<MapsPersonPin />} label="NEARBY" value="c">
          <div className="flex-container">
          <Paper zDepth={3} className="tab-paper flex-container">
            <LineChart />
          </Paper>
          </div>
        </Tab>
      </Tabs>
      <br/>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(About);
