function course(state = [], action) {
  switch (action.type) {
    case "ADD_COURSE":
      let newState = state;
      newState = state || [];
      console.log('course reduser: ', action)
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
      console.log('edit course reduser: ', action)
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
        console.log('delete course reduser: ', action)
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
