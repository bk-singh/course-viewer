function course(state = [], action) {
  switch (action.type) {
    case "ADD_COURSE":
      let newState = state;
      newState = state || [];
      newState = newState.concat([
        {
          id: action.id,
          title: action.title
        }
      ]);
      return newState;
    default:
      return state;
  }
}

export default course;
