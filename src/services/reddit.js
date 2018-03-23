// import axios from 'axios';

// const REDDIT_ENDPOINT = 'https://www.reddit.com';
//
// export function getPopularReddit(){
//   console.log('get pop reddit');
//   const url = `${REDDIT_ENDPOINT}/r/popular.json`;
//   axios.get(url)
//     .then(res => {
//       const data = res.data.data.children.map(obj => obj.data);
//       console.log(data)
//       return _.map(data, (subreddit) => {
//       // abstract away the specifics of the reddit API response and take only the fields we care about
//         return {
//           title: _.get(subreddit, 'title'),
//           url: _.get(subreddit, 'url'),
//           author: _.get(subreddit, 'author'),
//           score: _.get(subreddit, 'score'),
//           thumbnail: _.get(subreddit, 'thumbnail'),
//           permalink: _.get(subreddit, 'permalink'),
//           num_comments: _.get(subreddit, 'num_comments')
//         }
//     })
//   })
//     .catch(error => {
//       console.error(error);
//       throw error;
//     });
// }
import * as _ from 'lodash'

const REDDIT_ENDPOINT = 'https://www.reddit.com';

class RedditService {

  async getPopularReddit() {
    const url = `${REDDIT_ENDPOINT}/r/popular.json`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`RedditService getDefaultSubreddits failed, HTTP status ${response.status}`);
    }
    const data = await response.json();
    const children = data.data.children.map(obj => obj.data);
    console.log(children)
    if (!children) {
      throw new Error(`RedditService getDefaultSubreddits failed, children not returned`);
    }
    return _.map(children, (subreddit) => {
      // abstract away the specifics of the reddit API response and take only the fields we care about
      return {
        title: _.get(subreddit, 'title'),
        url: _.get(subreddit, 'url'),
        author: _.get(subreddit, 'author'),
        score: _.get(subreddit, 'score'),
        thumbnail: _.get(subreddit, 'thumbnail'),
        permalink: _.get(subreddit, 'permalink'),
        num_comments: _.get(subreddit, 'num_comments')
      }
    });
  }

}

export default new RedditService();
