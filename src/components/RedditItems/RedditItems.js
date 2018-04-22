import React from 'react';
import styles from './RedditItems.scss';

const RedditItems = (props) => {
  const post = props.reddit;
  return (
    <li className={styles.items}>
      <img className={styles.image} src={ `${post.thumbnail}` } />
      <div className={styles.content}>
        <span className={styles.title}>
          <a href={ `${post.url}` }>{post.title}</a>
        </span>
        <div className={styles.info}>
        <span className={styles.source}>
          {post.source}
        </span>
          <span>
            <a href={ `${post.url}` }>{post.score} points by {post.author} </a>
          </span>
          <span className={styles.comment}>
            <a href={'https://www.reddit.com' + `${post.permalink}`}>{post.num_comments} comments</a>
          </span>
        </div>
      </div>
    </li>
  )
}
  
export default RedditItems;
