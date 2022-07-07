import "./App.css";
import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import CardList from "./components/CardList";
import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
      const posts = await PostService.getAll();
      setPosts(posts);
  }

  return (
    <div className="App">
      <Navigation />
      <Header />
      <CardList posts={posts} />
    </div>
  );
}

export default App;
