import * as types from './actionTypes';
import redditService from '../../services/reddit';
import productService from '../../services/producthunt';

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

export function fetchPopularProductHunt() {
  return async(dispatch) => {
    try {
      const producthuntArray = await productService.getPopularProduct();
      dispatch({ type: types.PRODUCT_FETCHED, producthuntArray });
    } catch (error) {
      console.error(error);
    }
  }
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

export function fetchAll() {
  return async(dispatch) => {
    try {
      const producthuntArray = await productService.getPopularProduct();
      const subredditArray = await redditService.getPopularReddit();
      dispatch({ type: types.HOMEPAGE_FETCHED, producthuntArray, subredditArray });  
    } catch(error) {
      console.error(error);
    }
  }
}
