import React, { useState, useEffect } from "react";
import styled from "styled-components";
import spinner from "../spinner.gif";
import axios from "axios";
import { Link } from "react-router-dom";

const Article = (props) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [authorname, setAuthorname] = useState("");

  useEffect(() => {
    axios
      .get(`/articles/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthorname(res.data.authorname),
      ])
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <MainContainer>
      {!title || !article || !authorname ? (
        <img className="spinner" src={spinner} alt="Loading..." />
      ) : (
        <div className="article-container">
          <h2>{title}</h2>
          <p>{article}</p>
          <p className="badge badge-secondary p-2">{authorname}</p>
          <div>
            <Link
              to={{
                pathname: "/",
              }}
              className="btn btn-primary"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </MainContainer>
  );
};

export default Article;

// Main article container
const MainContainer = styled.div`
  padding: 3rem;
  padding-bottom: 100px;

  h2 {
    color: var(--dark-green);
    margin-bottom: 2rem;
  }

  .article-container {
    width: 80%;
    margin: 0 auto;
  }

  .badge {
    background-color: var(--dark-green) !important;
  }

  .spinner {
    display: block;
    margin: 0 auto;
    width: 10rem;
  }
  .btn-primary {
    margin-top: 2rem;
    background-color: var(--dark-green);
    border: none;
    &:hover {
      background-color: var(--light-green);
    }
  }
`;
