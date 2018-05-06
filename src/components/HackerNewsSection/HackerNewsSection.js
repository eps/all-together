import React from 'react';
import { connect } from 'react-redux';
import * as articlesSelectors from '../../store/topics/reducer';
import styles from './HackerNewsSection.scss';

class HackerNewsSection extends React.Component {

  render () { 
    console.log(this.props);  
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Hacker News</h1>
        </div>
        <div className={styles.itemList}>
          
        </div>
      </div>
      )
    }
}

function mapStateToProps(state) {
  const hackernewsData = articlesSelectors.getHackerNews(state);
  console.log(hackernewsData)
  return {
    hackernewsData
  };
}

export default connect(mapStateToProps)(HackerNewsSection);