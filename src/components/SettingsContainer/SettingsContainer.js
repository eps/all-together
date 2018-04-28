import React from 'react';
import styles from './SettingsContainer.scss';
import { connect } from 'react-redux';
import { updateSettings } from '../../store/topics/actions';
import ReactModal from 'react-modal';

ReactModal.setAppElement(document.getElementById('root'));

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      checkboxState: true
    };
  }

  toggleLink = () => {
    this.setState({isActive: !this.state.isActive})
  }

  handleChange = (e) => {
    const selected = e.target.value;
    this.props.loadActive(selected);
  }

  handleCloseModal() {
    this.setState({isActive: !this.state.isActive});
  }

  render() {
    const settings = (
      <ReactModal
        isOpen={this.state.isActive}
        onRequestClose={this.closeModal}
        className={styles.Modal}
        overlayClassName={styles.Overlay}
        contentLabel="Example Modal"
      >
        <div className={styles.modalHeader}>Settings</div>
        <div className={styles.modalBody}>
          <ul>
            <li>
              <input 
                type="checkbox"
                id='reddit'
                value='reddit'
                name='reddit'
                checked={this.props.websites.visibleSections.reddit}
                onChange={e => this.handleChange(e)}
              /> 
              <label htmlFor='reddit'>reddit</label>
            </li>
            <li>
              <input 
                type="checkbox"
                id='product hunt'
                value='producthunt'
                name='product hunt'
                checked={this.props.websites.visibleSections.producthunt}
                onChange={e => this.handleChange(e)}
              />
            <label htmlFor='product hunt'>product hunt</label>
            </li>
          </ul> 
          <button onClick={e=> this.handleCloseModal(e)}>Close Modal</button>
        </div>
      </ReactModal>
    )
    return (
      <div className='settings'>    
        <li className={this.state.isActive ? `${styles.active}` : 'website'} 
          onClick={e => this.toggleLink(e)}>
          settings</li>
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