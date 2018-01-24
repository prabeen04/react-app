import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};

class NewsButton extends React.Component{
  constructor(props){
    super(props);

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    // this.props.history.push('/news-detail');
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
                      onClick={this.handleClick} />
        })}
      </div>
    );
  }

}
export default NewsButton;
