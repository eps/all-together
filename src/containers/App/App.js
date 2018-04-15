import { connect } from 'react-redux';
import React from 'react';
import SideBarSection from '../../components/SideBarSection/SideBarSection';
import styles from './App.scss';
import RedditSection from '../../components/RedditSection/RedditSection';
import ProductHuntSection from '../../components/ProductHuntSection/ProductHuntSection';
import * as articlesSelectors from '../../store/topics/reducer';
import { fetchPopularReddit } from '../../store/topics/actions';

class App extends React.Component {

  renderSwitch = (props) => {
    switch(props.page) {
      case 'reddit':
        return <RedditSection />
      case 'product hunt':
        return <ProductHuntSection />
      default:
        return <p>home page</p>
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <SideBarSection />
        {this.renderSwitch(this.props)}
      </div>
    )
  }
}

function mapStateToProps(state) {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
