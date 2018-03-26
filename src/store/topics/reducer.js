import * as types from './actionTypes.js'

const initialState = {
  articlesById: null,
  websites: ['reddit', 'product hunt'],
  page: 'reddit'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ARTICLES_FETCHED:
      return {
        ...state,
        articlesById: action.subredditArray
      }
      case types.PRODUCT_FETCHED:
        return {
          ...state,
          productHunt: action.producthuntArray
        }
    case types.UPDATED_PAGE:
      return {
        ...state,
        page: action.page
      }
    default:
      return state
  }
}

export function getReddit(state) {
  return state.reddit.articlesById;
}

export function getProductHunt(state) {
  return state.reddit.productHunt;
}
