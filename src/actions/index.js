// action is an object with information about what happened and what needs to change
/*
 * action types
 */
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}