import React, { useEffect, useRef, useState } from 'react';

import axios from "axios";

import CategoriesCard from "../../../components/public/categories/CategoriesCard"
import { categoryService } from '../../../_services/categories.service';

const Categories = () => {
  const [Categories, setCategories] = useState([])
  const flag = useRef(false)

  // Récupération de la liste des term categories à l'affichage
  useEffect(() => {
      if(flag.current === false){
          categoryService.getAllCategories()
              .then(res => {
                  // Liste dans le state
                  setCategories(res.data)
              })
              .catch(err => console.log(err))
      }

      return () => flag.current = true
      
  }, [])

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3 rounded-3 mt-4">
        {Categories.map((category, index) => (
          <CategoriesCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
