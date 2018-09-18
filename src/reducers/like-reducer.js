export default (state = {}, action) => {
    switch (action.type) {
        case "LIKE_POST":
            console.log(action);
            let newLikeNumber = state[action.postId].likes + 1;
            let newPost = Object.assign({}, state[action.postId], {
                likes: newLikeNumber
            })
            let newPostByIdStateSlice = Object.assign({}, state, {
                [action.postId]: newPost
            });
            console.log(newPostByIdStateSlice);
            return newPostByIdStateSlice;
        default:
            return state;
    }
};
