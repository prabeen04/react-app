import React from 'react';
import NewsSearch from './news-search';
import NewsButton from './news-button';

import {Route, Redirect} from 'react-router-dom';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
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
    if (!this.props.authUser) {
      return (<Redirect to={{
          pathname: '/login',
          state: {
            message: 'please login to view this page'
          }
        }}/>);
    }
    return (<div>
      <div className="flexbox-container">
        <NewsSearch news={this.state.news} navigate={this.navigate}/>
        <NewsButton news={this.state.news} navigate={this.navigate}/>
      </div>
    </div>);

  }

}

export default Feed;
