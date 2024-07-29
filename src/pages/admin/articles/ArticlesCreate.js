import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { articleService } from "../../../_services";

// import ImageUpload from '../../../components/admin/ImageUpload';

const ArticleCreate = () => {
  const [article, setArticle] = useState([]);
  let navigate = useNavigate();

  // Gestion de la modification des champs du formulaire
  const onChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  // Gestion de la soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault();

    articleService
      .addArticle(article)
      .then((res) => navigate("../index"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="ArticleEdit">
      Article Add
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="nom">Title</label>
          <input type="text" name="title" onChange={onChange} />
        </div>
        <div className="group">
          <label htmlFor="nom">Titre H1</label>
          <input type="text" name="h1_title" onChange={onChange} />
        </div>
        <div className="group">
          <label htmlFor="article_description">Contenu</label>
          <input type="textarea" name="content" onChange={onChange} />
        </div>
        <div className="group">
          <label htmlFor="slug">Slug</label>
          <input type="text" name="slug" onChange={onChange} />
        </div>
        <div className="group">
          <label htmlFor="image">Image</label>
          <input type="text" name="image" onChange={onChange} />
        </div>

        {/* <div className="m-4 bg-primary"><ImageUpload /></div> */}

        <div className="group">
          <button>Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default ArticleCreate;
