import React, { useState } from "react";
import styled from "styled-components";
import spinner from "../spinner.gif";
import { Link } from "react-router-dom";
import axios from "axios";

const Articles = ({ posts }) => {
  const [article, setArticle] = useState([]);
  // delete article by id
  const deleteArticle = (id) => {
    axios.delete(`/articles/${id}`).then((res) => alert(res.data));
    setArticle(article.filter((elem) => elem._id !== id));
  };

  return (
    <MainContainer>
      <h1>Enjoy reading... </h1>
      {!posts.length ? (
        <img className="spinner" src={spinner} alt="Loading" />
      ) : (
        posts.map((article, key) => (
          <div className="article-container" key={key}>
            <Link
              to={{
                pathname: `/articles/${article._id}`,
              }}
            >
              <h2>{article.title}</h2>
            </Link>
            <p>{article.article}</p>
            <span className="badge badge-secondary p-2">
              {article.authorname}
            </span>
            <div className="row my-3">
              <div className="col-2 col-sm-4">
                <Link
                  to={`/edit-article/${article._id}`}
                  className="btn btn-outline-success"
                >
                  Edit Article
                </Link>
              </div>
              <div className="col-2 col-sm-4">
                <button
                  onClick={() => deleteArticle(article._id)}
                  className="btn btn-outline-danger"
                >
                  Delete Article
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </MainContainer>
  );
};

export default Articles;

// Main container
const MainContainer = styled.div`
  padding: 4rem 6rem;
  padding-bottom: 100px;

  h1 {
    color: var(--dark-green);
  }
  .article-container {
    padding: 2rem 0;
  }
  .badge {
    background-color: var(--dark-green) !important;
  }
  .spinner {
    display: block;
    margin: 0 auto;
    width: 10rem;
  }
`;
