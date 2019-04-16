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
    default:
      return state;
  }
}

export default course;
