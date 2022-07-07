import "./App.css";
import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import CardList from "./components/CardList";
import PostService from "./API/PostService";
import { LoaderUi } from "./components/UI/loader/LoaderUi";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([]);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

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
