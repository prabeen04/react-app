import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class NewsDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      articles: []
    }
  }
  componentWillMount(){
    fetch(`https://newsapi.org/v1/articles?source=${this.props.location.state.detail}&sortBy=top&apiKey=d1cfbf5cf1e74757a5fad5cc65fd17eb`)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      this.setState({articles: data.articles});
      // console.log(items);
      // let sources = data.sources.map(source => {
      //   return (<NewsButton label={source.name} getNews={this.handleClick}/>)
      // })
      // this.setState({newsFeed: sources})
    }).catch((err) => {
      console.log(err);
    });
  }
  render(){
    return(
      <div className="news-container">
        {this.state.articles.map((article, index) => {
          return  <Card
            className='news-item'>
                    <CardHeader
                      title={article.author}
                      subtitle={article.publishedAt}
                      avatar={article.urlToImage}
                    />
                    <CardMedia
                      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                      <img src={article.urlToImage} alt="" />
                    </CardMedia>
                    <CardTitle title={article.title} subtitle={article.publishedAt} />
                    <CardText>{article.description}</CardText>
                    <CardActions>
                      <FlatButton label="View Full News" />
                      <FlatButton label="Visit SIte" />
                    </CardActions>
                  </Card>
        })}
      </div>
    );
  }
}

export default NewsDetail;
