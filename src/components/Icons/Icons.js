import _ from 'lodash'
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icons.scss';

const Icons = (props) => {
  const icons = props.icons;
  
  return (
    <ul className={styles.iconContainer}>
      { _.map(icons, (maker, key) =>
        <li className={styles.items} key={key}>
          <img className={styles.image} src={ `${maker.image_url['32px']}` } />
        </li>
      )}
    </ul>
  )
}

Icons.propTypes = {
  icons: PropTypes.array.isRequired
}

export default Icons
