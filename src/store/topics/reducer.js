import * as types from './actionTypes.js'

const initialState = {
  articlesById: null,
  websites: ['reddit', 'product hunt']
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ARTICLES_FETCHED:
      return {
        ...state,
        articlesById: action.subredditArray
      }
    default:
      return initialState
  }
}

export function getReddit(state) {
  return state.reddit.articlesById;
}
