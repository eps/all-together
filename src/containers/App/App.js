import { connect } from 'react-redux';
import React from 'react';
import SideBarSection from '../../components/SideBarSection/SideBarSection';
import styles from './App.scss';
import RedditSection from '../../components/RedditSection/RedditSection';
import ProductHuntSection from '../../components/ProductHuntSection/ProductHuntSection';
import HomePage from '../../components/HomePage/HomePage';
// import * as articlesSelectors from '../../store/topics/reducer';
// import { fetchPopularReddit } from '../../store/topics/actions';

class App extends React.Component {

  renderSwitch = (props) => {
    switch(props.currentPage) {
      case 'reddit':
        return props.visibleSections.reddit ? <RedditSection /> : null
      case 'product hunt':
        return props.visibleSections.producthunt ? <ProductHuntSection /> : null
      default:
        return <HomePage />
    }
  }

  render() {
    console.log(this.props.visibleSections);
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
