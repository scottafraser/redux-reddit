export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_POST":
      const { name, content, time, id, likes, dislikes } = action;
      let newState = Object.assign({}, state, {
        [id]: {
          name: name,
          content: content,
          time: time,
          id: id,
          likes: likes,
          dislikes: dislikes
        }
      });
      return newState;
    // case "LIKE_POST":
    //   console.log("sdfsdf")
    //   let newLikeNumber = state[action.postId].likes + 1;
    //   let newPost = Object.assign({}, state[action.postId], {
    //     likes: newLikeNumber
    //   })
    //   let newPostByIdStateSlice = Object.assign({}, state, {
    //     [action.postId]: newPost
    //   });
    //   console.log(newPostByIdStateSlice);
    //   return newPostByIdStateSlice;
    default:
      return state;
  }
};
