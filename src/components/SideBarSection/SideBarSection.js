import * as _ from 'lodash';
import styles from './SideBarSection.scss';
import React from 'react';
import Main from '../Main/Main';
import PropTypes from 'prop-types';

class SideBarSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBrowse: ''
    };
  }

  setLink(e) {
    let selected = e.target.getAttribute('name')
    console.log(selected);
    this.setState({
      selectedBrowse: selected
    })
  }

  render() {
    const links = this.props.content;
    const sidebar = (
      <ul>
        {_.map(links, (link, key) => (
          <li key={key} name={link} onClick={e => this.setLink(e)}>{link}</li>
        ))}
       </ul>
    );

    return (
      <div className={styles.container}>
        <div className={styles.leftPanel}>
          {sidebar}
        </div>
        <div className={styles.mainPanel}>
          <Main selectedBrowse={this.state.selectedBrowse} />
        </div>
      </div>
    )
  }
}

SideBarSection.propTypes = {
  content: PropTypes.array.isRequired
}

export default SideBarSection;
