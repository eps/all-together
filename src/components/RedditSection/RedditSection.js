import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as articlesSelectors from '../../store/topics/reducer';
// import { fetchPopularReddit } from '../../store/topics/actions';
import styles from './RedditSection.scss';
import RedditItems from '../RedditItems/RedditItems';

class RedditSection extends React.Component {
  componentDidMount() {
    // this.props.loadReddit();
  }
  render () {
    const reddit = this.props.redditData;
    
    if (!this.props.redditData) {
      return <p>Loading...</p>
    }
    
    return (
      <div className={styles.container}>
          <div className={styles.mainPanel}>
            <div>
              <div className={styles.header}>
                <h1>Reddit</h1>
              </div>
              <div className={styles.itemList}>
                <ul className={styles.redditList}>
                  {_.map(reddit.redditArray, (post, key) =>
                    <RedditItems reddit={post} key={key} />
                  )}
                </ul>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const redditData = articlesSelectors.getReddit(state);
  console.log(redditData);
  return {
    page : state.websites.currentPage,
    redditData
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     loadReddit() {
//       dispatch(fetchPopularReddit())
//     }
//   }
// }

export default connect(mapStateToProps)(RedditSection);
