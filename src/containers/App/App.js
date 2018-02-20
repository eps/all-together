import React from 'react';
import LeftPanel from '../../components/LeftPanel/LeftPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sideBarData = [
      {name: 'Reddit' },
      {name: "Hacker News"},
      {name: 'Product Hunt' },
      {name: 'Medium' },
      {name: 'Github Trending' }
    ];

    return (
      <div>
        <LeftPanel title={sideBarData} />
      </div>
    );
  }
}

export default App;
