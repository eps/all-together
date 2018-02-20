import React from 'react';
import styles from './App.scss';
import LeftPanel from '../../components/LeftPanel/LeftPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sideBarData = [
      {name: 'Reddit' },
      {name: "Hacker News"}
    ];

    return (
      <div>
        <h1 className={styles.caps}>all together</h1>
        <LeftPanel title={sideBarData} />
      </div>
    );
  }
}

export default App;
