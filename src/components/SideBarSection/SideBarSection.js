import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideBarSection.scss';
import * as _ from 'lodash';
import { connect } from "react-redux";
import { updateCurrentPage } from '../../store/topics/actions';
// import * as articlesSelectors from '../../store/topics/reducer';

class ConnectedList extends React.Component {
  
  toggleLink = (e) => {
    let selected = e.target.getAttribute('name')
    this.props.loadActive(selected);
  }

  render() {
    const { websites } = this.props;
    return (
      <ul className={styles.leftPanel}>
        {_.map(websites, (el, key) => (
          <li className={styles.website} key={key} onClick={e => this.toggleLink(e)}>
            <div className={styles.item} name={el}>{el}</div>
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  console.log('sidebar', state.reddit.page)
  return {
    page: state.reddit.page,
    websites: state.reddit.websites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadActive(page) {
      dispatch(updateCurrentPage(page))
    }
  }
}

const SideBarSection = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

ConnectedList.propTypes = {
  websites: PropTypes.array.isRequired
}

export default SideBarSection;
