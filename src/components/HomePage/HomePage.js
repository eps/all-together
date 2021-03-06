import React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import styles from './HomePage.scss';
import { fetchAll } from '../../store/topics/actions';
import * as articlesSelectors from '../../store/topics/reducer';
import RedditItems from '../RedditItems/RedditItems';
import ProductHuntItems from '../ProductHuntItems/ProductHuntItems';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.loadAll();
  }

  renderPopularReddit() {
    const reddit = this.props.content.reddit;
    const producthunt = this.props.content.productHunt;
    const visible = this.props.content.visibleSections;
    const combineContent = [];

    for(var i = 0; i < 10; i++) {
      if (visible.reddit) {
        combineContent.push({
          ...reddit.redditArray[i],
          source: 'reddit'
        })
      }

      if (visible.producthunt) {
        combineContent.push({
          ...producthunt.producthuntArray[i],
          source: 'product hunt'
        })
      }
    }

    return (
      <div className={styles.itemList}>
        <ul>
          {_.map(combineContent, (post, key) => (
            post.source === 'reddit' ? 
            <RedditItems reddit={post} key={key} /> : 
            <ProductHuntItems producthunt={post} key={key}/>
          ))}
        </ul>
      </div>
    )
  }

  render () {
    if (this.props.content.reddit === undefined && this.props.content.productHunt === undefined) {
      return <p>loading...</p>
    } 
    return (
      <div>
        <div className={styles.header}>
          <h1>HomePage</h1>
        </div>
        {this.renderPopularReddit()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const content = articlesSelectors.getAll(state)
  console.log(content)
  return {
    content
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadAll() {
      dispatch(fetchAll())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
