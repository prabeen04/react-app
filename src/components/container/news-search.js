import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class NewsSearch extends React.Component{
  constructor(props){
    super(props);
    console.log(props)
  }

  render(){
    return(
      <AutoComplete hintText="Type anything"
        dataSource={this.props.news.map(news=>{
          return news.id
        })}
        filter={AutoComplete.caseInsensitiveFilter}
        onNewRequest={(chosenRequest: string, index: number)=>{
          console.log(chosenRequest)
          this.props.filterText(chosenRequest);
        }
        }/>
    );
  }
}

export default NewsSearch;
