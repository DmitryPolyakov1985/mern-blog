import React, { useState, useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Articles from "./components/Articles";
import Article from "./components/Article";
import AddArticle from "./components/AddArticle";
import EditArticle from "./components/EditArticle";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/articles")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <Articles posts={posts} />} />
      <Route
        path="/articles/:id"
        render={(props) => <Article {...props} posts={posts} />}
      />
      <Route
        path="/edit-article/:id"
        render={(props) => <EditArticle {...props} posts={posts} />}
      />
      <Route path="/add-article" component={AddArticle} />
      <Footer />
    </div>
  );
}

export default App;
