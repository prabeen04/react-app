import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FilterInput from '../common-components/filter-input';

const style = {
  margin: 12
};

class NewsButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
      this.handleClick = this.handleClick.bind(this);
      this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler = (input) => {
    this.setState({
      input: input
    })
  }
  handleClick(param){
    console.log('news buttin clicked');
      this.props.navigate(param);
  }
  render(){
    return(

      <div style={style}>
      <FilterInput value={this.state.input} type="text" filter={this.onChangeHandler.bind(this)}/>
        {this.props.news
          .filter(news => this.state.input === '' || news.id.includes(this.state.input))
          .map(news =>{
           return <Paper><RaisedButton
                      label={news.name}
                      key={news.id}
                      style={style}
                      primary={true}
                      onClick={() => this.handleClick(news.id)} /></Paper>
        })}
      </div>
    );
  }

}
export default NewsButton;
