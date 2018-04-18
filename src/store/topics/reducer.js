import * as types from './actionTypes.js'

const initialState = {
  articlesById: null,
  websites: ['reddit', 'product hunt'],
  page: 'home'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.REDDIT_FETCHED:
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
      return {
        ...state,
        articlesById: action.subredditArray,
        productHunt: action.producthuntArray
      }
  }
}

export function getReddit(state) {
  console.log(state)
  return state.websites.articlesById;
}

export function getProductHunt(state) {
  return state.websites.productHunt;
}

export function getAll(state) {
  return state.websites;
}
