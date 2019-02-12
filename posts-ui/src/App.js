import React, { useEffect, useState } from "react";
import axios from "axios";

import PostList from "./components/PostList/PostList";

import "./App.css";

const App = props => {
  const [posts, setPosts] = useState([]);

  useEffect(_ => {
    axios
      .get("http://localhost:8000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default App;
