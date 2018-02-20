import * as _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeftPanel.scss';

class LeftPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const websites = _.map(this.props.title, 'name');

    return (
      <div className={styles.leftPanel}>
        {_.map(websites, (title, i) => (
          <ul key={i}>
            <li>
              {title}
            </li>
          </ul>
          )
        )}
      </div>
    );
  }
}

LeftPanel.propTypes = {
  title: PropTypes.array.isRequired
};

export default LeftPanel;
