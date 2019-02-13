import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";

import "./App.css";

const App = props => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchRes, setSearchRes] = useState([]);

  const fetchPosts = _ => {
    axios
      .get("http://localhost:8000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(_ => {
    fetchPosts();
  }, []);

  useEffect(_ => {
    handleSearch();
  }, [search, posts])

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const deletePost = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/api/posts/${id}`)
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  };

  const addPost = (e, post) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/posts", post)
      .then(res => {
        setPosts([...posts, res.data[0]]);
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  const updatePost = (e, post, id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/posts/${id}`, post)
      .then(res => {
        setPosts(
          posts.map(post => {
            if (post.id === res.data[0].id) {
              return res.data[0];
            } else {
              return post;
            }
          })
        );
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  const handleSearch = _ => {
    setSearchRes(posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase())));
  }

  return (
    <div className='App'>
      <Route
        exact
        path="/"
        render={props => (
          <PostList {...props} posts={searchRes.length === 0 ? posts : searchRes} deletePost={deletePost} search={search} handleChange={handleChange} />
        )}
      />
      <Route
        exact
        path="/post-form"
        render={props => <PostForm {...props} addPost={addPost} />}
      />
      <Route
        path="/post-form/:id"
        render={props => (
          <PostForm {...props} isUpdating={true} updatePost={updatePost} />
        )}
      />
    </div>
  );
};

export default App;
