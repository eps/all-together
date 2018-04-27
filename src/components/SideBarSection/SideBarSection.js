import React from 'react';
// import PropTypes from 'prop-types';
import styles from './SideBarSection.scss';
import * as _ from 'lodash';
import { connect } from "react-redux";
import { updateCurrentPage } from '../../store/topics/actions';
import SettingsContainer from '../SettingsContainer/SettingsContainer';

class ConnectedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false,
      isActive: null
    };
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  // showVisibleLinks = (props) => {
  //   return (
  //     props.map(el, key) => (
  //       <li className={this.state.isActive === `${el}` ? `${styles.active}` : `${styles.website}`}
  //         key={key}
  //         onClick={e => this.toggleLink(e)}
  //       >
  //         <div className={styles.item} name={el}>{el}</div>
  //       </li>
  //     ))
  // }

  navigationLinks() {
    const { websites, visible } = this.props;
    const updatedLinks = [];
    console.log('nav links', updatedLinks, visible);

    if (!visible['reddit']) {
      const index = websites.indexOf('reddit');
      if (index > -1) {
        websites.splice(index, 1);
        updatedLinks.push(websites.splice(index, 1))
      }
    } else {
      updatedLinks.push('reddit');
    }

    if (!visible['producthunt']) {
      const index = websites.indexOf('product hunt');
      if (index > -1) {
        websites.splice(index, 1);
        updatedLinks.push(websites.splice(index, 1))
      }
    } else {
      updatedLinks.push('product hunt');
    } 
    
    return (
      <ul className={styles.leftPanel}>
        <li className={this.state.isActive === 'home' ? `${styles.active}` : `${styles.website}`} 
          onClick={e => this.toggleLink(e)} 
        >
          <div className={this.props.page === 'home' ? `${styles.active}` : `${styles.website}`} name="home">home</div>
        </li>
        {_.map(updatedLinks, (el, key) => (
          <li className={this.state.isActive === `${el}` ? `${styles.active}` : `${styles.website}`}
            key={key}
            onClick={e => this.toggleLink(e)}
          >
            <div className={styles.item} name={el}>{el}</div>
          </li>
        ))}
      </ul>
    )
  }

  toggleLink = (e) => {
    let selected = e.target.getAttribute('name')
    this.props.loadActive(selected);
    this.setState({isActive: selected})
    console.log(selected)
  }

  renderMobileNav() {
    if(this.state.mobileNavVisible) {
      return this.navigationLinks();
    }
  }

  handleNavClick() {
    if(!this.state.mobileNavVisible) {
      this.setState({mobileNavVisible: true});
    } else {
      this.setState({mobileNavVisible: false});
    }
  }

  renderNavigation() {
  if(this.state.windowWidth <= 768) {
    return [
      <div key={6} className={styles.mobileNav}>
        { this.state.mobileNavVisible ?
          <span className={styles.x} onClick={this.handleNavClick.bind(this)}>X</span> :
          <div className={styles.navbarToggle} onClick={this.handleNavClick.bind(this)}>
            <span className={styles.iconBar}></span>
            <span className={styles.iconBar}></span>
            <span className={styles.iconBar}></span>
          </div>
        }
        {this.renderMobileNav()}
      </div>
    ];
  } else {
    return [
      <div key={7}>
        {this.navigationLinks()}
      </div>
    ];
  }
  }

  render() {
    return (
      <div className={styles.sidebarContainer}>
        {this.renderNavigation()}
        <SettingsContainer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    visible: state.websites.visibleSections,
    page: state.websites.currentPage,
    websites: state.websites.websites
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

export default SideBarSection;
