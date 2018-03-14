function websites(state = initialState, action) {
  switch(action.type) {
    case 'ADD_ARTICLE' :
      return { ...state, websites: [...state.websites, action.payload] };
    default:
      return state;
  }
}

export default websites;

const initialState = {
  websites: [
    {
      name: 'reddit',
      id: 1
    },
    {
    name: 'product hunt',
    id: 2
    }
  ]
}
