import * as _ from 'lodash';
import styles from './SideBarSection.scss';
import React from 'react';

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
    const links = ['reddit', 'product hunt', 'medium', 'yahoo'];
    const sidebar = (
      <ul>
        {_.map(links, (link, key) => (
          <li key={key} name={link} onClick={e => this.setLink(e)}>{link}</li>
        ))}
       </ul>
    );
    return (
      <div className={styles.leftPanel}>
        {sidebar}
      </div>
    )
  }
}

export default SideBarSection;
