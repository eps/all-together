import * as types from './actionTypes.js'

const initialState = {
  reddit: null,
  websites: ['reddit', 'product hunt', 'hacker news'],
  currentPage: 'home',
  visibleSections: {
    reddit: true,
    producthunt: true,
    hackernews: true
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.REDDIT_FETCHED:
      return {
        reddit: action.subredditArray
      }
      case types.PRODUCT_FETCHED:
        return {
          productHunt: action.producthuntArray
        }
    case types.UPDATED_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    case types.UPDATED_SETTINGS:
    return {
      ...state,
      visibleSections: {
        ...state.visibleSections,
        [action.setting]: !state.visibleSections[action.setting],
      }
    }
    default:
      return {
        ...state,
        hackernews: action.hackernews,
        productHunt: action.producthunt,
        reddit: action.reddit
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