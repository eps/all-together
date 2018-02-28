
import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPanel.scss';
import RedditPanel from '../RedditPanel/RedditPanel';

const MainPanel = (props) => {
  const { reddit, productHunt } = props;
  console.log('product-hunt', productHunt);
    return (
      <div className={styles.mainPanel}>
        <RedditPanel reddit={reddit} />
      </div>
  )
};

MainPanel.propTypes = {
  reddit: PropTypes.array.isRequired,
  productHunt: PropTypes.array.isRequired
};

export default MainPanel;
