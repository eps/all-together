function selected(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_LINKS':
      return Object.assign({}, state, {
        selected: action.filter
      })
    default:
      return state
  }
}

export default selected;

const initialState = {
  selected: false
}
