import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import CardList from "./components/CardList";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Проверка заголовка 1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium, fugiat id vero enim harum consequatur reiciendis cupiditate quidem consectetur facere totam! Cupiditate fugiat necessitatibus dolores, neque vel tempora tempore! ",
    },
    {
      id: 2,
      title: "Проверка заголовка 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium, fugiat id vero enim harum consequatur reiciendis cupiditate quidem consectetur facere totam! Cupiditate fugiat necessitatibus dolores, neque vel tempora tempore! ",
    },
    {
      id: 3,
      title: "Проверка заголовка 3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium, fugiat id vero enim harum consequatur reiciendis cupiditate quidem consectetur facere totam! Cupiditate fugiat necessitatibus dolores, neque vel tempora tempore! ",
    },
  ]);

  return (
    <div className="App">
      <Navigation />
      <Header />
      <CardList posts={posts} />
    </div>
  );
}

export default App;
