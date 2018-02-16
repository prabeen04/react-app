import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};

class NewsButton extends React.Component{
  constructor(props){
    super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(param){
    console.log('news buttin clicked');
      this.props.navigate(param);
  }
  render(){
    return(

      <div style={style}>
        {this.props.news.map(news =>{
           return <RaisedButton
                      label={news.name}
                      key={news.id}
                      style={style}
                      primary={true}
                      onClick={() => this.handleClick(news.id)} />
        })}
      </div>
    );
  }

}
export default NewsButton;
