import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './RedditPanel.scss';
import SideBarSection from '../SideBarSection/SideBarSection';

class RedditPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reddit: [],
    };
  }

  componentDidMount() {
    // const devToken = '4749186aeaf490a8ef0d03677a081245d300de9797c5affeadaed87cc6afc611';

    axios.get(`http://www.reddit.com/r/popular.json`)
      .then(res => {
        const data = res.data.data.children.map(obj => obj.data);
        this.setState({ reddit : data });
      })
      .catch(error => console.log(error, "ERROR"))
    //
    // axios.get('https://api.producthunt.com/v1/posts', {
    //   headers: { 'Authorization': 'Bearer'+` ${devToken}` }
    //   })
    //   .then(res => {
    //     const post = res.data.posts;
    //     this.setState({ productHunt : post });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
  render () {
  return (
    <div className={styles.container}>
      <SideBarSection />
        <div className={styles.mainPanel}>
          <Reddit reddit={this.state.reddit} />

      </div>
    </div>
    )
  }
}

const Reddit = (props) => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Reddit</h1>
      </div>
      <div className={styles.itemList}>
        <ul>
          {props.reddit.map((post) =>
            <li className={styles.items} key={post.id}>
              <img className={styles.image} src={ `${post.thumbnail}` } />
                <div className={styles.content}>
                    <span className={styles.title}>
                      <a href={ `${post.url}` }>{post.title}</a>
                    </span>
                    <div className={styles.info}>
                      <span>
                        <a href={ `${post.url}` }>{post.score} points by {post.author} </a>
                      </span>
                      <span className={styles.comment}>
                        <a href={'https://www.reddit.com' + `${post.permalink}`}>{post.num_comments} comments</a>
                      </span>
                    </div>
                  </div>
              </li>
            )}
          </ul>
      </div>
    </div>
  )
}

Reddit.propTypes = {
  reddit: PropTypes.array.isRequired
}

export default RedditPanel;
