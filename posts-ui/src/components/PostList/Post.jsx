import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
  return (
    <div>
      <h4>{props.post.title}</h4>
      <p>{props.post.contents}</p>
      <button onClick={e => props.deletePost(e, props.post.id)}>Delete</button>
      <Link to={`/post-form/${props.post.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default Post;
