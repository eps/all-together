// import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './RedditSection.scss';
// import SideBarSection from '../SideBarSection/SideBarSection';

class RedditSection extends React.Component {
  render () {
    if (!this.props.redditData) {
      return <div>loading</div>
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
                  {this.props.redditData.map((post) =>
                    <li className={styles.items} key={post.id}>
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

const Reddit = (props) => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Reddit</h1>
      </div>
      <div className={styles.itemList}>
        <ul>
          {props.reddit.map((post) =>
            <li className={styles.items} key={post.id}>
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
  )
}

Reddit.propTypes = {
  reddit: PropTypes.array.isRequired
}

export default RedditSection;
