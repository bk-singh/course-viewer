import {
  RECEIVE_COURSES,
  DELETE_COURSE,
  EDIT_COURSE,
  ADD_COURSE,
} from './../actions/actionCreators';

function course(state = [], action) {
  let newState = state;
  switch (action.type) {
    case RECEIVE_COURSES:
      newState = state;
      newState = state || [];
      if(!action.courses)
        return state;
      newState = action.courses;
      return newState;

    case ADD_COURSE:
      newState = state;
      newState = state || [];
      if(!action.id)
        return state;
      newState = newState.concat([
        {
          ...newState[newState.length-1],
          id: action.id,
          title: action.title,
          slug: action.slug,
          authorId: action.authorId,
          category: action.category
        }
      ]);
      return newState;

    case EDIT_COURSE:
      newState = state || [];
      if(!action.id)
        return state;
      let courseIndex = newState.findIndex((c) => c.id === action.id);
      newState[courseIndex] =
        {
          ...newState[courseIndex],
          id: action.id,
          title: action.title,
          slug: action.slug,
          authorId: action.authorId,
          category: action.category
        };
      return newState;

      case DELETE_COURSE:
        newState = state || [];
        if(!action.id)
          return state;
        courseIndex = newState.findIndex((c) => c.id === action.id);
        newState.splice(courseIndex, 1);
        return newState;
    default:
      return state;
  }
}

export default course;
