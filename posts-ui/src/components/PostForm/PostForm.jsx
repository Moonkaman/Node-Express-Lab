import React, { useEffect, useState } from "react";
import axios from "axios";

import "./PostForm.css";

const PostForm = props => {
  const [postInfo, setPostInfo] = useState({
    title: "",
    contents: ""
  });

  useEffect(_ => {
    if (props.match.params.id !== undefined) {
      axios
        .get(
          `https://nb-post-server.herokuapp.com/api/posts/${
            props.match.params.id
          }`
        )
        .then(res =>
          setPostInfo({
            title: res.data[0].title,
            contents: res.data[0].contents
          })
        )
        .catch(err => console.log(err));
    }
  }, []);

  const handleChange = e => {
    setPostInfo({
      ...postInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="post-form">
      <h2>{props.isUpdating ? "Update Post" : "Add a Post"}</h2>
      <h4>Title</h4>
      <input
        name="title"
        type="text"
        value={postInfo.title}
        onChange={handleChange}
      />
      <h4>Content</h4>
      <textarea
        name="contents"
        id=""
        cols="30"
        rows="10"
        value={postInfo.contents}
        onChange={handleChange}
      />
      <br />
      {props.isUpdating ? (
        <button
          onClick={e => props.updatePost(e, postInfo, props.match.params.id)}
        >
          Update Post
        </button>
      ) : (
        <button onClick={e => props.addPost(e, postInfo)}>Add Post</button>
      )}
    </form>
  );
};

export default PostForm;
