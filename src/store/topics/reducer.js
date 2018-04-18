import * as types from './actionTypes.js'

const initialState = {
  reddit: null,
  websites: ['reddit', 'product hunt'],
  currentPage: 'home'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.REDDIT_FETCHED:
      return {
        ...state,
        reddit: action.subredditArray
      }
      case types.PRODUCT_FETCHED:
        return {
          ...state,
          productHunt: action.producthuntArray
        }
    case types.UPDATED_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return {
        ...state,
        reddit: action.subredditArray,
        productHunt: action.producthuntArray
      }
  }
}

export function getReddit(state) {
  console.log(state)
  return state.websites.reddit;
}

export function getProductHunt(state) {
  return state.websites.productHunt;
}

export function getAll(state) {
  return state.websites;
}
