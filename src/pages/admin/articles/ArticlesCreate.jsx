import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { articleService } from "../../../_services";



const ArticleCreate = () => {
  const [article, setArticle] = useState([]);
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState([]); // Ajouter un état pour les catégories
  let navigate = useNavigate();

  // Gestion de la modification des champs du formulaire
  const onChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  // Gestion de la soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    for (const key in article) {
      formData.append(key, article[key]);
    }

    articleService
      .addArticleFormData(formData)
      .then((res) => navigate("../index"))
      .catch((err) => console.log(err));   

      //console.log d'un tableau formData
      for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
      }
  };

  return (
    <div className="ArticleEdit">
      Article Edit
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" onChange={onChange} />
        </div>
        <div className="group">
          <label htmlFor="h1_title">Titre Article</label>
          <input type="text" id="h1_title" name="h1_title" onChange={onChange} />
        </div>
        <div className="group">
          <label htmlFor="content">Contenu</label>
          <input type="textarea" id="content" name="content" onChange={onChange} />
        </div>
        <div className="group">
          <label htmlFor="image">Image</label>
          <input type="file" id="fileInput" name="image" onChange={changeHandler} />
        </div>
        <div className="group">
          <label htmlFor="slug">Slug</label>
          <input type="text" id="slug" name="slug" onChange={onChange} />
        </div>
{/* 
        <div className="group">
          {categories.map((category) => (
            <div key={category.id} className="mb-3">
              <Form.Check
                inline
                label={category.name}
                name="category_id"
                type="radio"
                id={`inline-radio-${category.id}`}
                value={category.id}
                onChange={onChange}
              />
            </div>
          ))}
        </div> */}

        <div className="group">
          <button>Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default ArticleCreate;
