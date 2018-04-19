import React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
// import styles from './HomePage.scss';
import { fetchAll } from '../../store/topics/actions';
import * as articlesSelectors from '../../store/topics/reducer';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.loadAll();
  }

  renderPopularReddit() {
    const reddit = this.props.content.reddit;
    let redditSliced = null;
    if (reddit === undefined) {
      return <p>loading...</p>
    } else {
      redditSliced = reddit.slice(0, 11)
      return (
        <ul>
          {_.map(redditSliced, (i, key) => (
            <li key={key}>
              {i.title}
            </li>
          ))}
        </ul>
      )
    }
  }

  render () {
    return (
      <div>
        <h1>HomePage</h1>
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
