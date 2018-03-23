// import _ from 'lodash';
import * as types from './actionTypes';
import redditService from '../../services/reddit';

export function fetchPopularReddit() {
  console.log('fetching')
  // return async(dispatch) => {
  //   const reddit = await getPopularReddit(); // in real life, this will be a async call
  //   // const articlesById = _.keyBy(reddit
  //   //     .map(reddit => _.assignIn({ date: reddit.date.trim() }, reddit)),
  //   //     'id');
  //   dispatch({type: types.ARTICLES_FETCHED, reddit})
  //   return reddit
  // }
  return async(dispatch) => {
    try {
      const subredditArray = await redditService.getPopularReddit();
      console.log(subredditArray)
      dispatch({ type: types.ARTICLES_FETCHED, subredditArray });
    } catch (error) {
      console.error(error);
    }
  };
}
