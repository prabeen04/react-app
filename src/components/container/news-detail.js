import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import withAuthorization from '../HOC/withAuthorizationHOC';

import NewsSearch from './news-search';
import LoadingContainer from '../common-components/loading-container';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class NewsDetail extends React.Component{
  constructor(props){
    super(props)
    console.log(props);
    this.state = {
      loading_state: true,
      news_id: this.props.location.state.detail,
      articles: []
    }
    this.fetchNews  = this.fetchNews.bind(this);
  }
fetchNews = ()=>{
    fetch(`https://newsapi.org/v1/articles?source=${this.state.news_id}&sortBy=top&apiKey=d1cfbf5cf1e74757a5fad5cc65fd17eb`)
    .then(res => res.json())
    .then(data => {
      this.setState({articles: data.articles, loading_state: false});
    }).catch((err) => {
      this.setState({articles: [], loading_state: false});
      console.log(err);
    });
  }
  componentDidMount(){
    if(this.state.news_id){
      this.fetchNews();
    }else{
      this.props.history.push({
          pathname: '/feed'
        });
    }
  }
  changeNews = (news_id) =>{
    this.setState({news_id: news_id, loading_state: true}, function(){
        this.fetchNews();
      }
    );
  }
  render(){
    return(<div>
      { this.state.loading_state
        ?<LoadingContainer/>
        :<div> <NewsSearch filterText = {this.changeNews} news={this.props.location.state.news}/>
         <div className="news-container">
            {this.state.articles.map((article, index) => {
              return  <Card
                        className='news-item' key={index}>
                        <CardHeader
                          title={article.author}
                          subtitle={article.publishedAt}
                          avatar={article.urlToImage}
                        />
                        <CardMedia>
                          <img src={article.urlToImage} alt="" />
                        </CardMedia>
                        <CardTitle title={article.title} subtitle={article.publishedAt} />
                        <CardText>{article.description}</CardText>
                        <CardActions>
                         <Link to={article.url} target="_blank"><RaisedButton primary={true} label="View Full News" /></Link>
                          <RaisedButton primary={true} label="Visit SIte" />
                        </CardActions>
                      </Card>
            })}
          </div>
          </div>
      }
</div>
    );
  }
}

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(NewsDetail);
