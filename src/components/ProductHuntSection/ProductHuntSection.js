import React from 'react';
import { connect } from 'react-redux';
import styles from './ProductHuntSection.scss';
import * as articlesSelectors from '../../store/topics/reducer';
import ProductHuntItems from '../ProductHuntItems/ProductHuntItems';

class ProductHuntSection extends React.Component {

  render () {
    const producthunt = this.props.producthuntData;

    if (!this.props.producthuntData) {
      return <p>Loading...</p>
    }
    
    return (
      <div className={styles.container}>
        <div className={styles.mainPanel}>
          <div>
            <div className={styles.header}>
              <h1>Product Hunt</h1>
            </div>
            <div className={styles.itemList}>
              <ul className={styles.productHuntList}>
                {producthunt.producthuntArray.map((post, key) =>
                  <ProductHuntItems producthunt={post} key={key} />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      )
    }
}

function mapStateToProps(state) {
  const producthuntData = articlesSelectors.getProductHunt(state);
  console.log(producthuntData)
  return {
    producthuntData
  };
}

export default connect(mapStateToProps)(ProductHuntSection);
