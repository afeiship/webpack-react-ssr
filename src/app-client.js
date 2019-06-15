import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: window.__INITIAL_STATE__
    };
  }

  render() {
    return (
      <div className="i-am-from-client">
        <span>Hello React SSR with!!!</span>
        <em>{JSON.stringify(this.state.rawData, null, 4)}</em>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
