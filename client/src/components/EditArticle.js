import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const EditArticle = (props) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [message, setMessage] = useState("");

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

  const changeOnclick = (e) => {
    e.preventDefault();

    setTitle("");
    setArticle("");
    setAuthorname("");

    axios
      .put(`/articles/update/${props.match.params.id}`, {
        title,
        article,
        authorname,
      })
      .then((res) => {
        setMessage(res.data);
        // window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <AddArticleContainer>
      <div className="container">
        <h1>Edit article</h1>
        <span>{!message ? "" : message}</span>
        <form onSubmit={changeOnclick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="article">Article</label>
            <textarea
              name="article"
              className="form-control"
              id="article"
              rows="5"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="authorname">Author Name</label>
            <input
              name="authorname"
              type="text"
              className="form-control"
              id="authorname"
              placeholder="Author Name"
              value={authorname}
              onChange={(e) => setAuthorname(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </AddArticleContainer>
  );
};

export default EditArticle;

// Main container
const AddArticleContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 31.25rem;

  h1 {
    font-weight: 900;
    color: var(--dark-green);
  }
  .btn-primary {
    margin-top: 2rem;
    background-color: var(--dark-green);
    border: none;
    &:hover {
      background-color: var(--light-green);
    }
  }
  span {
    color: red;
    margin-bottom: 2rem;
  }
`;
