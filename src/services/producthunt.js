import * as _ from 'lodash'

const PRODUCTHUNT_ENDPOINT = 'https://api.producthunt.com';

class ProductHuntService {

  async getPopularProduct() {
    const devToken = '4749186aeaf490a8ef0d03677a081245d300de9797c5affeadaed87cc6afc611';
    const url = `${PRODUCTHUNT_ENDPOINT}/v1/posts`;
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer'+` ${devToken}` }
    });
    if (!response.ok) {
      throw new Error(`RedditService getDefaultSubreddits failed, HTTP status ${response.status}`);
    }
    const data = await response.json();
    const children = data.posts;
    if (!children) {
      throw new Error(`RedditService getDefaultSubreddits failed, children not returned`);
    }
    return _.map(children, (prodhunt) => {
      // abstract away the specifics of the reddit API response and take only the fields we care about
      return {
        name: _.get(prodhunt, 'name'),
        tagline: _.get(prodhunt, 'tagline'),
        votes_count: _.get(prodhunt, 'votes_count'),
        comments_count: _.get(prodhunt, 'comments_count'),
        makers: _.get(prodhunt, 'makers'),
        thumbnail: _.get(prodhunt, 'thumbnail'),
        slug: _.get(prodhunt, 'slug'),
        discussion_url: _.get(prodhunt, 'discussion_url')
      }
    });
  }

}

export default new ProductHuntService();
