import React from 'react';
import NewsButton from './news-button';
import withAuthorization from '../HOC/withAuthorizationHOC';
import { Route, Redirect } from 'react-router-dom';
import LoadingContainer from '../common-components/loading-container';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
    this.navigate = this.navigate.bind(this);
  }
  navigate(param) {
    this.props.history.push({
      pathname: '/news-detail',
      state: {
        news: this.state.news,
        detail: param
      }
    });
  }
  componentDidMount() {
    Nprogress.start();
    fetch('https://newsapi.org/v1/sources').then(res => res.json()).then(data => {
      this.setState({ news: data.sources });
      Nprogress.done();
    }).catch((err) => {
      console.log(err);
    });
  }
  render() {
    if (this.state.news.length == 0) {
      return <LoadingContainer />;
    }
    return (<div>
      <div className="flexbox-container">
        <NewsButton news={this.state.news} navigate={this.navigate} />
      </div>
    </div>);

  }

}
const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(Feed);
