import React from "react";

import Post from "./Post";

const PostList = props => {
  return (
    <div>
      {props.posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
