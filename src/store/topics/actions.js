import _ from 'lodash';
import * as types from './actionTypes';
import { getPopularReddit } from '../../services/reddit';

export function fetchPopularReddit() {
  console.log('fetching')
  return dispatch => {
    const reddit = getPopularReddit(); // in real life, this will be a async call
    const articlesById = _.keyBy(reddit
        .map(reddit => _.assignIn({ date: reddit.date.trim() }, reddit)),
        'id');

    dispatch({type: types.ARTICLES_FETCHED, articlesById})
  }
}
