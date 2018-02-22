import React from 'react';
import LeftPanel from '../../components/LeftPanel/LeftPanel';
import MainPanel from '../../components/MainPanel/MainPanel';
import axios from 'axios';
import styles from './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://www.reddit.com/r/popular.json`)
      .then(res => {
        const data = res.data.data.children.map(obj => obj.data);
        this.setState({ posts : data });
      });
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
      <div className={styles.container}>
        <LeftPanel title={sideBarData} />
        <MainPanel subreddit={this.state.posts} />
      </div>
    );
  }
}

export default App;
