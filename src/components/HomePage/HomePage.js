import React from 'react';
import { connect } from 'react-redux';
// import styles from './HomePage.scss';
import { fetchAll } from '../../store/topics/actions';
import * as articlesSelectors from '../../store/topics/reducer';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.loadAll();
  }

  render () {
      const { home } = this.props;
      console.log(home) 
    return (
      <div>
        <h1>HomePage</h1>
      </div>
      )
    }
}

function mapStateToProps(state) {
  const allData = articlesSelectors.getAll(state)
  console.log(allData)
  return {
    allData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadAll() {
      dispatch(fetchAll())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
