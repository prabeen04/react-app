import React from 'react';
import NewsSearch from './news-search';
import NewsButton from './news-button';

class Feed extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      news: []
    }
}
    handleClick(e){
      console.log(e);
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
            <NewsSearch news={this.state.news} />
            <NewsButton news={this.state.news}  />
        </div>);
      }

}

export default Feed;
