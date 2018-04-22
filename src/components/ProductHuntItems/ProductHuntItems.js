import React from 'react';
import styles from './ProductHuntItems.scss';
import Icons from '../Icons/Icons';

const ProductHuntItems = (props) => {
  const post = props.producthunt;
  console.log(post);
  return (
    <li className={styles.items} >
        <img className={styles.image} src={ `${post.thumbnail.image_url}` } />
        <div className={styles.content}>
            <span className={styles.title}>
            <a href={ `${post.discussion_url}` }>{post.name}</a>
            </span>
            <span className={styles.tagline}>
            <a href={ `${post.discussion_url}` }>{post.tagline}</a>
            </span>
            <div className={styles.info}>
            <span>
              <a href={ `${post.discussion_url}` }>{post.votes_count} upvotes</a>
            </span>
            <span className={styles.comment}>
              <a href={'https://www.producthunt.com/posts/' + `${post.slug}`}> {post.comments_count} comments</a>
            </span>
            <Icons icons={post.makers} />
          </div>
        </div>
    </li>
  )
}

export default ProductHuntItems;