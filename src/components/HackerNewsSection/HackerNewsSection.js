import React from 'react';
import { connect } from 'react-redux';
import * as articlesSelectors from '../../store/topics/reducer';

class HackerNewsSection extends React.Component {

  render () {   
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Hacker News</h1>
        </div>
        <div className={styles.itemList}>
          
        </div>
      </div>
      )
    }
}

// function mapStateToProps(state) {
//   const producthuntData = articlesSelectors.getProductHunt(state);
//   console.log(producthuntData)
//   return {
//     producthuntData
//   };
// }

// export default connect(mapStateToProps)(HackerNewsSection);

export default HackerNewsSection;