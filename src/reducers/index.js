import { VisibilityFilters } from '../actions/index'

const initialState = {
  visibilityFilter: VisibilityFilters,
  websites: ['reddit', 'product hunt']
}

const rootReducer = (state = initialState) => state;

export default rootReducer;
