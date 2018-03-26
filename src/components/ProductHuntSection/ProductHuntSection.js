import React from 'react';
import { connect } from 'react-redux';
import styles from './ProductHuntSection.scss';
import Icons from '../Icons/Icons';
import { fetchPopularProductHunt } from '../../store/topics/actions';

class ProductHuntSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productHunt: [],
      makers: []
    }
  }
  componentDidMount() {
    this.props.loadProductHunt();
  }

  // componentDidMount() {
  //   const devToken = '4749186aeaf490a8ef0d03677a081245d300de9797c5affeadaed87cc6afc611';
  //
  //   axios.get('https://api.producthunt.com/v1/posts', {
  //     headers: { 'Authorization': 'Bearer'+` ${devToken}` }
  //     })
  //     .then(res => {
  //       const post = res.data.posts;
  //       this.setState({
  //         productHunt : post
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render () {
  return (
    <div className={styles.container}>
      <div className={styles.mainPanel}>
        <ProductHunt productHunt={this.state.productHunt} />
      </div>
    </div>
    )
  }
}

const ProductHunt = (props) => {
  return (
    <div>
      <div className={styles.header}>
        <h1>ProductHunt</h1>
      </div>
      <div className={styles.itemList}>
        <ul>
          {props.productHunt.map((post) =>
            <li className={styles.items} key={post.id}>
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
  )
}

function mapDispatchToProps(dispatch) {
  return {
    loadProductHunt() {
      dispatch(fetchPopularProductHunt())
    }
  }
}


export default connect(null, mapDispatchToProps)(ProductHuntSection);
