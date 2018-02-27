import React from 'react';
import { Redirect } from 'react-router-dom';
import withAuthorization from '../../HOC/withAuthorizationHOC';
import SimpleTable from '../../common-components/table/simple-table';
import HorizontalLinearStepper from '../../common-components/stepper/horizontal-linear-stepper';
import LineChart from '../../utility/chart-js/line-chart';
import PieChart from '../../utility/chart-js/pie-chart';
import BubbleChart from '../../utility/chart-js/bubble-chart';
import HoverButton from '../../common-components/buttons/hover-button'
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import Devices from 'material-ui/svg-icons/device/devices';
import Forum from 'material-ui/svg-icons/communication/forum';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      heading: 'Bussiness'
    };
  }
  handleChange = (value) => {
    this.setState({ value: value });
  };
  componentDidMount() {
    fetch('http://localhost:8080/api/users')
      .then(res => res.json())
      .then(user => console.log(user))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab style={{ backgroundColor: '#555'}} icon={<Dashboard />} label="RECENTS" value="a">
            <div className="flex-container">
              <PieChart />
            </div>
          </Tab>
          <Tab style={{ backgroundColor: '#666' }} icon={<Devices />} label="FAVORITES" value="b">
            <div className="flex-container">
              <BubbleChart />
            </div>
          </Tab>
          <Tab style={{ backgroundColor: '#555' }} icon={<MapsPersonPin />} label="NEARBY" value="c">
            <div className="flex-container">
              <LineChart />
            </div>
          </Tab>
        </Tabs>
        <br />
        
        <div className="flex-container" style={{padding: '2rem', backgroundColor: '#f4f4f4', flexDirection: 'column'}} >
        <h3>Multistep Form</h3>
          <HorizontalLinearStepper />
        </div>
          <br/>
        <div className="flex-container">
          <h1>Material Table</h1>
          <SimpleTable />
        </div>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(About);
