import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './TopicsScreen.css';
import { fetchPopularReddit } from '../store/topics/actions';
import * as articlesSelectors from '../store/topics/reducer';
// import * as _ from 'lodash';
import RedditSection from '../components/RedditSection/RedditSection';

class TopicsScreen extends Component {
  componentDidMount() {
    this.props.loadReddit();
  }
  render() {
    
    return (
      <div>
        <RedditSection
          redditData={this.props.redditData}
       />
     </div>
    );
  }
}

function mapStateToProps(state) {
  const redditData = articlesSelectors.getReddit(state);
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
