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

// which props do we want to inject, given the global store state?

function mapStateToProps(state) {
  const [articlesById, articlesIdArray] = articlesSelectors.getReddit(state);
  return {
    articlesById,
    articlesIdArray
  }
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
