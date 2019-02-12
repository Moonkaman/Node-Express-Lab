import React from "react";
import { Link } from "react-router-dom";

import Post from "./Post";

const PostList = props => {
  return (
    <div>
      {props.posts.map(post => (
        <Post post={post} key={post.id} deletePost={props.deletePost} />
      ))}
      <Link to="/post-form">
        <button>Add Post</button>
      </Link>
    </div>
  );
};

export default PostList;
