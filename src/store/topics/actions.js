import * as types from './actionTypes';
import redditService from '../../services/reddit';

export function fetchPopularReddit() {
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

export function updateCurrentPage(page) {
  return (dispatch) => {
    const action = {
      type: types.UPDATED_PAGE,
      page
    }
    dispatch(action)
  }
}
