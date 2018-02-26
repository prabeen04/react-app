import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const NewsSearch = (props) => {

    return(
      <AutoComplete hintText="Type anything"
        dataSource={props.news.map(news=>{
          return news.id
        })}
        filter={AutoComplete.caseInsensitiveFilter}
        onNewRequest={(chosenRequest, index)=>{
          console.log(chosenRequest)
          props.filterText(chosenRequest);
        }
        }/>
    );
}

export default NewsSearch;
