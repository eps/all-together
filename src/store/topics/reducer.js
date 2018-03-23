// import {
//   // SET_VISIBILITY_FILTER,
//   VisibilityFilters
// } from '../actions/index'
// //
// const initialState = {
//   // visibilityFilter: VisibilityFilters,
//   websites: ['reddit', 'product hunt'],
//   articlesById: undefined
// }

// const { SHOW_ALL } = VisibilityFilters

// const rootReducer = (state = initialState) => state;


// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }

// function rootReducer(state = initialState, action) {
  // return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//   }
// }

// export default rootReducer;


import * as types from './actionTypes.js'
// import * as _ from 'lodash';

const initialState = {
  articlesById: null,
  websites: ['reddit', 'product hunt']
}

export default function(state = initialState, action) {
  console.log(action.type, state)
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
  return state.articles.articlesById;
}

// export function getReddit(state) {
//   const articlesById = state.articles.articlesById;
//   const articlesIdArray = _.keys(articlesById)
//   return [articlesById, articlesIdArray];
// }
