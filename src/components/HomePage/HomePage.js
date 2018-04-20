import React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
// import styles from './HomePage.scss';
import { fetchAll } from '../../store/topics/actions';
import * as articlesSelectors from '../../store/topics/reducer';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.loadAll();
  }

  renderPopularReddit() {
    const reddit = this.props.content.reddit;
    const producthunt = this.props.content.productHunt;
    const combineContent = [];

    for(var i = 0; i < 10; i++) {
      combineContent.push({
        ...reddit.redditArray[i],
        source: 'reddit'
      })
      combineContent.push({
        ...producthunt.producthuntArray[i],
        source: 'product hunt'
      })
      console.log(combineContent)
    }

    return (
      <ul>
        {_.map(combineContent, (i, key) => (
          <li key={key}>
            {i.source === 'reddit' ? 
              <span>{i.source}{i.title}</span> :
              <span>{i.source}{i.name}</span>
            }
          </li>
        ))}
      </ul>
    )
  }

  renderPost() {

  }

  render () {
    if (this.props.content.reddit === undefined && this.props.content.productHunt === undefined) {
      return <p>loading...</p>
    } 
    return (
      <div>
        <h1>HomePage</h1>
        {this.renderPopularReddit()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const content = articlesSelectors.getAll(state)
  console.log(content)
  return {
    content
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadAll() {
      dispatch(fetchAll())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
