import React from 'react';
import { connect } from 'react-redux';
import { fetchPopularReddit } from '../../store/topics/actions';
import * as articlesSelectors from '../../store/topics/reducer';
import RedditSection from '../../components/RedditSection/RedditSection';

class RedditScreen extends React.Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(RedditScreen)
