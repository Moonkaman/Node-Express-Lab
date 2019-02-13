import React from "react";
import { Link } from "react-router-dom";

import Post from "./Post";
import SearchBar from "../SearchBar/SearchBar";

import "./Post.css";

const PostList = props => {
  return (
    <div className="post-list-cont">
      <h1>Posts</h1>
      <SearchBar handleChange={props.handleChange} search={props.search} />
      {props.posts.map(post => (
        <Post post={post} key={post.id} deletePost={props.deletePost} />
      ))}
      <Link to="/post-form">
        <button className="add-post-btn">Add Post</button>
      </Link>
    </div>
  );
};

export default PostList;
