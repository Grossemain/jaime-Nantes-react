import React, { useEffect, useRef, useState } from 'react';

import axios from "axios";

import ArticlesCard from "../../../components/public/articles/ArticlesCard"
import { articleService } from '../../../_services/articles.service';

const Articles = () => {
  const [Articles, setArticles] = useState([])
  const flag = useRef(false)

  // Récupération de la liste des term categories à l'affichage
  useEffect(() => {
      if(flag.current === false){
          articleService.getAllArticles()
              .then(res => {
                  // Liste dans le state
                  setArticles(res.data)
              })
              .catch(err => console.log(err))
      }

      return () => flag.current = true
      
  }, [])

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3 rounded-3 mt-4">
        {Articles.map((article, index) => (
          <ArticlesCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
