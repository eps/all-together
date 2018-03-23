import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './TopicsScreen.css';
import { fetchPopularReddit } from '../store/topics/actions';
import * as articlesSelectors from '../store/topics/reducer';
// import * as _ from 'lodash';

class TopicsScreen extends Component {
  componentDidMount() {
    this.props.loadReddit();
  }
  render() {
    return (
      <h2>Where are my topics?</h2>
    );
  }
}

function mapStateToProps(state) {
  const redditData = articlesSelectors.getReddit(state);
  console.log(redditData)
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(TopicsScreen)
//
