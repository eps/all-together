import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideBarSection.scss';
import * as _ from 'lodash';
import { connect } from "react-redux";
import { updateCurrentPage } from '../../store/topics/actions';
// import * as articlesSelectors from '../../store/topics/reducer';

class ConnectedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
  }

  toggleLink = (e) => {
    let selected = e.target.getAttribute('name')
    this.props.loadActive(selected);
  }

  toggleNav = () => {
    this.setState({isToggled: !this.state.isToggled})
  }

  render() {
    const { websites } = this.props;

    const links = (
      <ul className={styles.leftPanel}>
        {_.map(websites, (el, key) => (
          <li className={styles.website} key={key} onClick={e => this.toggleLink(e)}>
            <div className={styles.item} name={el}>{el}</div>
          </li>
        ))}
      </ul>
      )


    return (
      <div className={styles.sidebarContainer}>
        <div className={styles.navMenu}>
          { this.state.isToggled ?
          <span className={styles.toggle} onClick={() => this.toggleNav()}>X</span> :
          <span className={styles.toggle} onClick={() => this.toggleNav()}>&#9776;</span>
          }
        </div>
        { this.state.isToggled ? links : null }
      </div>
    )
  }
}

// const navbar = () => {
//   return (
//     <div className={styles.hamburger}>
//       <span className={styles.toggle}>☰</span>
//     </div>
//   )
// }



function mapStateToProps(state) {
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
