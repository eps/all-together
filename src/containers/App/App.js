import { connect } from 'react-redux';
import React from 'react';
import styles from './App.scss';
import HackerNewsSection from '../../components/HackerNewsSection/HackerNewsSection';
import HomePage from '../../components/HomePage/HomePage';
import ProductHuntSection from '../../components/ProductHuntSection/ProductHuntSection';
import RedditSection from '../../components/RedditSection/RedditSection';
import SideBarSection from '../../components/SideBarSection/SideBarSection';
// import * as articlesSelectors from '../../store/topics/reducer';
// import { fetchPopularReddit } from '../../store/topics/actions';

class App extends React.Component {

  renderSwitch = (props) => {
    switch(props.currentPage) {
      case 'hackernews': 
        return props.visibleSections.hackernews ? <HackerNewsSection /> : null
      case 'reddit':
        return props.visibleSections.reddit ? <RedditSection /> : null
      case 'product hunt':
        return props.visibleSections.producthunt ? <ProductHuntSection /> : null
      default:
        return <HomePage />
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <SideBarSection />
        <div className={styles.contentContainer}>
          {this.renderSwitch(this.props)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    visibleSections: state.websites.visibleSections,
    currentPage : state.websites.currentPage
  };
}

export default connect(mapStateToProps)(App);
