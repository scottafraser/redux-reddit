export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_POST":
      const { name, content, time, id } = action;
      let newState = Object.assign({}, state, {
        [id]: {
          name: name,
          content: content,
          time: time,
          id: id
        }
      });
      return newState;
    default:
      return state;
  }
};
