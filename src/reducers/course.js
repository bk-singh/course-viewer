import { RECEIVE_COURSES} from './../actions/actionCreators'
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

    case "ADD_COURSE":
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

    case "EDIT_COURSE":
      let newEditState = state;
      newEditState = state || [];
      if(!action.id)
        return state;
      let courseIndex = newEditState.findIndex((c) => c.id === action.id);
      newEditState[courseIndex] =
        {
          ...newEditState[courseIndex],
          id: action.id,
          title: action.title,
          slug: action.slug,
          authorId: action.authorId,
          category: action.category
        };
      return newEditState;

      case "DELETE_COURSE":
        let newDeleteState = state;
        newDeleteState = state || [];
        if(!action.id)
          return state;
        courseIndex = newDeleteState.findIndex((c) => c.id === action.id);
        newDeleteState.splice(courseIndex, 1);
        return newDeleteState;
    default:
      return state;
  }
}

export default course;
