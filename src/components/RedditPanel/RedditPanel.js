import React from 'react';
import PropTypes from 'prop-types';
import styles from './RedditPanel.scss';

const RedditPanel = (props) => {
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

RedditPanel.propTypes = {
  reddit: PropTypes.array.isRequired,
};

export default RedditPanel;
