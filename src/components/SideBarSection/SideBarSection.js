import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideBarSection.scss';
import * as _ from 'lodash';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    websites: state.websites
  };
};

const ConnectedList = ({ websites }) => (
  <ul className={styles.leftPanel}>
    {_.map(websites, (el, key) => (
      <li className={styles.website} key={key} onClick={e => toggleLink(e)}>
        <div className={styles.item} name={el}>{el}</div>
      </li>
    ))}
  </ul>
);

const toggleLink = (e) => {
  let selected = e.target.getAttribute('name')
  console.log('clickity', selected)
}


const SideBarSection = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
  websites: PropTypes.array.isRequired
}

export default SideBarSection;
