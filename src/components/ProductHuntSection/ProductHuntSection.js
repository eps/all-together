import React from 'react';
import { connect } from 'react-redux';
import styles from './ProductHuntSection.scss';
import Icons from '../Icons/Icons';
import * as articlesSelectors from '../../store/topics/reducer';

class ProductHuntSection extends React.Component {

  render () {
    const producthunt = this.props.producthuntData;

    if (!this.props.producthuntData) {
      return <p>Loading...</p>
    }
    
    return (
      <div className={styles.container}>
        <div className={styles.mainPanel}>
          <div>
            <div className={styles.header}>
              <h1>Product Hunt</h1>
            </div>
            <div className={styles.itemList}>
              <ul className={styles.productHuntList}>
                {producthunt.producthuntArray.map((post, key) =>
                  <li className={styles.items} key={key}>
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
                  )}
                </ul>
            </div>
          </div>
        </div>
      </div>
      )
    }
}

// const ProductHunt = (props) => {
//   return (
//     <div>
//       <div className={styles.header}>
//         <h1>ProductHunt</h1>
//       </div>
//       <div className={styles.itemList}>
//         <ul>
//           {props.productHunt.map((post) =>
//             <li className={styles.items} key={post.id}>
//               <img className={styles.image} src={ `${post.thumbnail.image_url}` } />
//                 <div className={styles.content}>
//                     <span className={styles.title}>
//                       <a href={ `${post.discussion_url}` }>{post.name}</a>
//                     </span>
//                     <span className={styles.tagline}>
//                       <a href={ `${post.discussion_url}` }>{post.tagline}</a>
//                     </span>
//                     <div className={styles.info}>
//                       <span>
//                         <a href={ `${post.discussion_url}` }>{post.votes_count} upvotes</a>
//                       </span>
//                       <span className={styles.comment}>
//                         <a href={'https://www.producthunt.com/posts/' + `${post.slug}`}> {post.comments_count} comments</a>
//                       </span>
//                       <Icons icons={post.makers} />
//                     </div>
//                   </div>
//               </li>
//             )}
//           </ul>
//       </div>
//     </div>
  // )
// }

function mapStateToProps(state) {
  const producthuntData = articlesSelectors.getProductHunt(state);
  console.log(producthuntData)
  return {
    producthuntData
  };
}

export default connect(mapStateToProps)(ProductHuntSection);
