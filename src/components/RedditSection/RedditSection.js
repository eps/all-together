import * as _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import styles from './RedditSection.scss';

class RedditSection extends React.Component {
  render () {
    console.log(this.props.currentPage)
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
                <ul>
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

export default RedditSection;
