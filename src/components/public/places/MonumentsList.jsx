import React, { useEffect, useRef, useState } from 'react';

import axios from "axios";

import PlacesCard from "../places/PlacesCard"
import { placeService } from '../../../_services/place.service';

const Places = () => {
  const [Places, setPlaces] = useState([])
  const flag = useRef(false)

  // Récupération de la liste des term categories à l'affichage
  useEffect(() => {
      if(flag.current === false){
          placeService.getAllPlaces()
              .then(res => {
                  // Liste dans le state
                  setPlaces(res.data)
              })
              .catch(err => console.log(err))
      }

      return () => flag.current = true
      
  }, [])

  return (
    <div>
  <div className="row row-cols-1 row-cols-md-3 g-4 m-3 rounded-3 mt-4">
    {Places.map((place, index) => (
      place.category_id ==1 ? (
        <PlacesCard 
          key={index} 
          place={place} 
        />
      ) : null
    ))}
  </div>
</div>

  );
};

export default Places;
