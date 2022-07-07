import "./App.css";
import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import CardList from "./components/CardList";
import PostService from "./API/PostService";
import { LoaderUi } from "./components/UI/loader/LoaderUi";

function App() {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostLoading] = useState(false);
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsPostLoading(true);
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostLoading(false);
  }

  return (
    <div className="App">
      <Navigation />
      <Header />
      {isPostsLoading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <LoaderUi animation={"border"} variant={"dark"} />
        </div>
      ) : (
        <CardList posts={posts} />
      )}
    </div>
  );
}

export default App;
