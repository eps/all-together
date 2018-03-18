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
  console.log(websites),
  <ul className={styles.leftPanel}>
    {_.map(websites, (el, key) => (
      <li className="list-group-item" key={key} name={el}>
        {el}
      </li>
    ))}
  </ul>
);

const SideBarSection = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
  websites: PropTypes.array.isRequired
}

export default SideBarSection;
