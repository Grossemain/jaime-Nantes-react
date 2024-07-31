import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ArticleCreate = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [h1_title, setH1Title] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [slug, setSlug] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [validationError, setValidationError] = useState({});
  const [articles, setArticles] = useState([]); // State to hold articles

  // Fetch articles (categories) from API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories') // Adjust the API endpoint as needed
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  // Gestion de la soumission du formulaire
  const addArticle = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("h1_title", h1_title);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("slug", slug);
    formData.append("category_id", category_id);

    await axios
      .post(`http://127.0.0.1:8000/api/articles`, formData)
      .then(() => {
        navigate("../index");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        }
      });
  };

  return (
    <div className="ArticleEdit">
      Article Add
      <form onSubmit={addArticle}>
        <div className="group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="h1_title">Titre H1</label>
          <input
            type="text"
            name="h1_title"
            value={h1_title}
            onChange={(event) => setH1Title(event.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="content">Contenu</label>
          <textarea
            name="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            name="slug"
            value={slug}
            onChange={(event) => setSlug(event.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" onChange={changeHandler} />
        </div>
        
        {articles.map((article) => (
          <div key={article.id} className="mb-3">
            {article.term_category_id == 2 ? (
            <Form.Check
              inline
              label={article.category_name}
              name="category_id"
              type="radio"
              id={`inline-radio-${article.id}`}
              value={article.id}
              onChange={(event) => setCategoryId(event.target.value)}
            />
          ) : null}
          </div>
        ))}

        <div className="group">
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default ArticleCreate;
