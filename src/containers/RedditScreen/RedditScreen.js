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
  console.log(this.props)
    return (
      <div>
        <RedditSection
          redditData={this.props.redditData}
          currentPage={this.props.page}
       />
     </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.reddit.page)
  const redditData = articlesSelectors.getReddit(state);
  return {
    page : state.reddit.page,
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
