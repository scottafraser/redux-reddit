import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function Feed(props) {
  console.log(props)
  return (
    <div>
      <hr />
      {Object.keys(props.feed).map(function(postId) {
        var post = props.feed[postId];
        return (
          <Post
            name={post.name}
            content={post.content}
            time={post.time}
            key={postId}
            postId={postId}
            likes={post.likes}
            dislikes={post.dislikes}
          />
        );
      })}
    </div>
  );
}

Feed.propTypes = {
  feed: PropTypes.object
};

export default Feed;
