import React from 'react';
import LoadingContainer from './loading-container';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initital_state: true
    }
  }

  render() {

    return (<div>
      {
        this.state.initital_state
          ? <h1>Home Component</h1>
          : <LoadingContainer style={{
                height: 500
              }}/>
      }
    </div>);
  }
}
export default Home;
