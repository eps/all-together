import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as articlesSelectors from '../../store/topics/reducer';
import { fetchPopularReddit } from '../../store/topics/actions';
import styles from './RedditSection.scss';

class RedditSection extends React.Component {
  componentDidMount() {
    this.props.loadReddit();
  }
  render () {
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
                  {_.map(this.props.redditData, (post, key) =>
                    <li className={styles.items} key={key}>
                      <img className={styles.image} src={ `${post.thumbnail}` } />
                        <div className={styles.content}>
                            <span className={styles.title}>
                              <a href={ `${post.url}` }>{post.title}</a>
                            </span>
                            <div className={styles.info}>
                              <span>
                                <a href={ `${post.url}` }>{post.score} points by {post.author} </a>
                              </span>
                              <span className={styles.comment}>
                                <a href={'https://www.reddit.com' + `${post.permalink}`}>{post.num_comments} comments</a>
                              </span>
                            </div>
                          </div>
                      </li>
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
  return {
    page : state.websites.page,
    redditData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadReddit() {
      dispatch(fetchPopularReddit())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditSection);
