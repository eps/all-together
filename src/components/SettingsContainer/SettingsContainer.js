import React from 'react';
import styles from './SettingsContainer.scss';
// import * as articlesSelectors from '../../store/topics/reducer';
import { connect } from 'react-redux';
// import { fetchAll } from '../../store/topics/actions';
import { updateSettings } from '../../store/topics/actions';

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: null,
      checkboxState: true
    };
  }

  toggleLink = () => {
    this.setState({isActive: !this.state.isActive})
  }

  handleChange = (e) => {
    const selected = e.target.value;
    this.props.loadActive(selected);
    console.log('change', e.target.value)
    // this.setState({checkboxState: !this.state.checkboxState})
  }

  // createCheckBoxes = (props) => {
  //   console.log(props.websites)
  //   const websites = props.websites;
  //   websites.map((website) => {
  //     <label htmlFor={website}></label>,
  //     <input 
  //       type="checkbox"
  //       id={website}
  //       value={website}
  //       name={website}
  //     /> 
  //   })
  // }

  render() {
    console.log(this.props);
    const settings = (
      <div className={styles.container}>
        <div>Settings Panel</div>
        <input 
        type="checkbox"
         id='reddit'
         value='reddit'
         name='reddit'
         checked={this.props.websites.visibleSections.reddit}
         onChange={e => this.handleChange(e)}
       /> 
        <label htmlFor='reddit'>reddit</label>
        <input 
         type="checkbox"
         id='product hunt'
         value='producthunt'
         name='product hunt'
         checked={this.props.websites.visibleSections.producthunt}
         onChange={e => this.handleChange(e)}
       /> 
        <label htmlFor='product hunt'>product hunt</label>
      </div>
    )
    return (
      <div className={styles.settings}>
        <span onClick={e => this.toggleLink(e)}>settings</span>
        {this.state.isActive ? settings : null }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadActive(selected) {
      dispatch(updateSettings(selected))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);