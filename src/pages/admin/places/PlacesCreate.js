import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

import { useNavigate } from "react-router-dom";
// import { articleService } from "../../../_services";
import axios from "axios";

const PlaceCreate = () => {
  const navigate = useNavigate();

  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [image, setImage] = useState("");
  const [adresse, setAdresse] = useState([]);
  const [hours, setHours] = useState([]);
  const [price, setPrice] = useState([]);
  const [slug, setSlug] = useState("");
  const [web_site, setWebSite] = useState("");
  const [category_id, setCategoryId] = useState("");

// Declaration de variable et valeur user_id directemnt dans le useEffect
  const [user_id, setUserId] = useState("");
  useEffect(() => {
    setUserId("1"); 
  }, []);

  const [validationError, setValidationError] = useState({});
  const [places, setPlaces] = useState([]); // State to hold articles

  // Fetch places (categories) from API
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/categories") // Adjust the API endpoint as needed
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  // Gestion de la soumission du formulaire
  const addPlace = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("adresse", adresse);
    formData.append("hours", hours);
    formData.append("price", price);
    formData.append("slug", slug);
    formData.append("web_site", web_site);
    formData.append("category_id", category_id);
    formData.append("user_id", user_id);

    await axios
      .post(`http://127.0.0.1:8000/api/places`, formData)
      .then(navigate("../index"))
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        }
      });
  };

  return (
    <div className="PlaceEdit">
      Place Add
      <form onSubmit={addPlace}>
        <div className="group">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="group">
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div className="group">
          <label htmlFor="adresse">adresse</label>
          <input
            type="text"
            name="adresse"
            onChange={(event) => {
              setAdresse(event.target.value);
            }}
          />
        </div>
        <div className="group">
          <label htmlFor="hours">hours</label>
          <input
            type="text"
            name="hours"
            onChange={(event) => {
              setHours(event.target.value);
            }}
          />
        </div>
        <div className="group">
          <label htmlFor="price">price</label>
          <input
            type="text"
            name="price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>

        <div className="group">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            name="slug"
            onChange={(event) => {
              setSlug(event.target.value);
            }}
          />
        </div>
        <div className="group">
          <label htmlFor="web_site">Web site</label>
          <input
            type="text"
            name="web_site"
            onChange={(event) => {
              setWebSite(event.target.value);
            }}
          />
        </div>

        <div className="group">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" onChange={changeHandler} />
        </div>

        {places.map((place) => (
          <div key={place.id} className="mb-3">
            {place.term_category_id == 1 ? (
              <Form.Check
                inline
                label={place.category_name}
                name="category_id"
                type="radio"
                id={`inline-radio-${place.id}`}
                value={place.id}
                onChange={(event) => setCategoryId(event.target.value)}
              />
            ) : null}
          </div>
        ))}

        {/* champs input invisible pour valider le champs user_id */}
        <div className="group">
          <label htmlFor="user_id"></label>
          <input
            type="hidden"
            name="user_id"
            value={user_id}
          />
        </div>

        <div className="group">
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default PlaceCreate;
