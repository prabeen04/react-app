import React from 'react';
import { Redirect } from 'react-router-dom';
import withAuthorization from '../../HOC/withAuthorizationHOC';
import SimpleTable from '../../common-components/table/simple-table';
import HorizontalLinearStepper from '../../common-components/stepper/horizontal-linear-stepper';
import LineChart from '../../utility/chart-js/line-chart';
import PieChart from '../../utility/chart-js/pie-chart';
import BubbleChart from '../../utility/chart-js/bubble-chart';
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
      <Tabs value={this.state.value} onChange={this.handleChange} inkBarStyle={{background: 'tomato'}}>
        <Tab style={{backgroundColor: '#555', selectedBackgroundColor: 'red'}} icon={<FontIcon className = "material-icons" > phone</FontIcon>} label="RECENTS" value="a">
          <div className="flex-container">
            <Paper zDepth={3} className="tab-paper flex-container">
              <BubbleChart />
            </Paper>
          </div>
        </Tab>
        <Tab style={{backgroundColor: '#666'}} icon={<FontIcon className = "material-icons" > favorite</FontIcon>} label="FAVORITES" value="b">
          <div className="flex-container">
            <Paper zDepth={3} className="tab-paper flex-container">
              <PieChart />
            </Paper>
          </div>
        </Tab>
        <Tab style={{backgroundColor: '#555'}} icon={<MapsPersonPin />} label="NEARBY" value="c">
          <div className="flex-container">
          <Paper zDepth={3} className="tab-paper flex-container">
            <LineChart />
          </Paper>
          </div>
        </Tab>
      </Tabs>
      <br/>
      <h1>Material Table</h1>
      <SimpleTable />
      <h1>Horizontal Linear Stepper</h1>
      <HorizontalLinearStepper />
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(About);
