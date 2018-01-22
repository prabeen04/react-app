import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
  backgroundColor: 'red'
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      newsFeed: []
    }
  }

  componentWillMount() {
    //   var request = new Request('https://api.github.com/users/prabeen04', {
    // 	method: 'GET',
    // 	mode: 'cors',
    // 	redirect: 'follow',
    // 	headers: new Headers({
    //     'Access-Control-Allow-Origin':'',
    // 		'Content-Type': 'text/plain'
    // 	})
    // });
    //
    //  Now use it!
    // fetch(request)
    fetch('https://newsapi.org/v1/sources').then(res => res.json()).then(data => {
      console.log(data.sources);

      let items = [];
      data.sources.map(source => {
        items.push(source.name)
      });
      this.setState({news: items});
      console.log(items);
      let sources = data.sources.map(source => {
        return (<RaisedButton label={source.name} primary={true} style={style}/>)
      })
      this.setState({newsFeed: sources})
    }).catch((err) => {
      console.log(err);
    });
  }
  render() {
    return (<div className="flexbox-container">
      <AutoComplete hintText="Type anything"
        dataSource={this.state.news}
        filter={AutoComplete.caseInsensitiveFilter}/>
       {this.state.newsFeed}

    </div>);
  }

}

export default Home;
