import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoryService } from "../../../_services";
import Form from "react-bootstrap/Form";

const CategoryCreate = () => {
  const [category, setCategory] = useState([]);
  let navigate = useNavigate();

  // Gestion de la modification des champs du formulaire
  const onChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  // Gestion de la soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault();

    categoryService
      .addCategory(category)
      .then((res) => navigate("../index"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="CategoryEdit">
      Category Add
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="nom">Nom</label>
          <input type="text" name="category_name" onChange={onChange} />
        </div>
        <div className="group">
          <label htmlFor="category_description">Description</label>
          <input
            type="textarea"
            name="category_description"
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="category_slug">Slug</label>
          <input type="text" name="category_slug" onChange={onChange} />
        </div>

        {/*A FAIRE POUR AFFICHER LES BTN RADIO AVEC LE NOM DES TERM CAT */
        /* <div className="group">
          {['radio'].map((category) => (
            <div key={`{category.id}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group1"
                type="radio"
                id="inline-radio-1"
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

export default CategoryCreate;
