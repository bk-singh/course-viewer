import {RECEIVE_AUTHORS } from './../actions/actionCreators'

function author(state = [], action) {
  console.log('reducer: state::' , state)
  console.log('reducer: action:: ' , action)
  let newState = state;
    switch (action.type) {
      case RECEIVE_AUTHORS:
      newState = state;
      newState = state || [];
      console.log('authors reducer: ', action)
      if(!action.authors)
        return state;
      newState = action.authors;
      return newState;

      default:
        return state;
    }
  }

  export default author;
