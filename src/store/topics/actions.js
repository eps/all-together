import * as types from './actionTypes';
import redditService from '../../services/reddit';
import productService from '../../services/producthunt';
import hackernewsService from '../../services/hackernews';

// export function fetchPopularReddit() {
//   return async(dispatch) => {
//     try {
//       const subredditArray = await redditService.getPopularReddit();
//       console.log(subredditArray)
//       dispatch({ 
//         type: types.REDDIT_FETCHED, 
//         reddit: {
//           subredditArray
//         }
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }

// export function fetchPopularProductHunt() {
//   return async(dispatch) => {
//     try {
//       const producthuntArray = await productService.getPopularProduct();
//       dispatch({ type: types.PRODUCT_FETCHED, producthuntArray });
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }

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
      const redditArray = await redditService.getPopularReddit();
      const hackernewsArray = await hackernewsService.getHackerNews();
      dispatch({ 
        type: types.HOMEPAGE_FETCHED, 
        producthunt: {
          title: 'product hunt',
          producthuntArray
        }, 
        reddit: {
          title: 'reddit',
          redditArray    
        },
        hackernews: {
          title: 'hackernews',
          hackernewsArray
        }
      });  
    } catch(error) {
      console.error(error);
    }
  }
}

export function updateSettings(setting) {
  return (dispatch) => {
    const action = {
      type: types.UPDATED_SETTINGS,
      setting
    }
    dispatch(action)
  }
}
