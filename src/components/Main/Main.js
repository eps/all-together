import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Main.scss';
import RedditSection from '../RedditSection/RedditSection';
import ProductHuntSection from '../ProductHuntSection/ProductHuntSection';


class Main extends React.Component {
  render() {
    const links = this.props.selectedBrowse;
    console.log(links)
    switch(links) {
    case 'reddit':
      return <RedditSection />
    case 'product hunt':
      return <ProductHuntSection />
    default:
      return <div>home</div>
    }
  }
}

Main.propTypes = {
  selectedBrowse: PropTypes.string.isRequired
}

export default Main;
