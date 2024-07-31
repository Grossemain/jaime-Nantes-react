import React, { useEffect, useRef, useState } from 'react';

import axios from "axios";

import ArticlesCard from "../articles/ArticlesCard"
import { articleService } from '../../../_services/articles.service';

const SortirList = () => {
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
      article.category_id ==4 ? (
        <ArticlesCard 
          key={index} 
          article={article} 
        />
      ) : null
    ))}
  </div>
</div>

  );
};

export default SortirList;
