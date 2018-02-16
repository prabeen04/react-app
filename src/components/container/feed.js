import React from 'react';
import NewsButton from './news-button';
import withAuthorization from '../HOC/withAuthorizationHOC';
import {Route, Redirect} from 'react-router-dom';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
    this.navigate = this.navigate.bind(this);
  }
  navigate(param) {
    console.log(param);
    this.props.history.push({
      pathname: '/news-detail',
      state: {
        news: this.state.news,
        detail: param
      }
    });
  }
  componentDidMount() {
    fetch('https://newsapi.org/v1/sources').then(res => res.json()).then(data => {
      console.log(data.sources);

      this.setState({news: data.sources});
    }).catch((err) => {
      console.log(err);
    });
  }
  render() {
    return (<div>
      <div className="flexbox-container">
        <NewsButton news={this.state.news} navigate={this.navigate}/>
      </div>
    </div>);

  }

}
const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(Feed);
