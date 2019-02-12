import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
  return (
    <div className="post-cont">
      <h4>{props.post.title}</h4>
      <p>{props.post.contents}</p>
      <div className="button-flex">
        <button
          className="delete-btn"
          onClick={e => props.deletePost(e, props.post.id)}
        >
          Delete
        </button>
        <Link to={`/post-form/${props.post.id}`}>
          <button className="edit-btn">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
