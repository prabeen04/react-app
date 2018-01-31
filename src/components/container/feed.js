import React from 'react';
import NewsSearch from './news-search';
import NewsButton from './news-button';

import { Route, Redirect } from 'react-router-dom';

class Feed extends React.Component{
  constructor(props) {
    super(props);
      console.log('this.props');
      console.log(props.authUser);
    this.state = {
      news: []
    }
    this.navigate = this.navigate.bind(this);
}
    navigate(param){
      console.log(param);
      this.props.history.push({
          pathname: '/news-detail',
          state: { detail: param }
        });
    }
      componentWillMount() {
        fetch('https://newsapi.org/v1/sources').then(res => res.json()).then(data => {
          console.log(data.sources);

          this.setState({news: data.sources});
          // console.log(items);
          // let sources = data.sources.map(source => {
          //   return (<NewsButton label={source.name} getNews={this.handleClick}/>)
          // })
          // this.setState({newsFeed: sources})
        }).catch((err) => {
          console.log(err);
        });
      }
      render() {
        return (<div className="flexbox-container">
            <NewsSearch news={this.state.news} navigate={this.navigate} />
            <NewsButton news={this.state.news} navigate={this.navigate} />
        </div>);
      }

}

export default Feed;
