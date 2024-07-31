import React, { Component } from "react";

import Banniere from '../../components/public/Banniere';



export class Home extends Component {
  render() {
    return (
        <div className="text-center">
          <Banniere/>
          <div className="mt-4">
          <h1>J'aime Nantes visite et découverte</h1>
          </div>
          <ul>
            <li>Listing des musées</li>
            <li>Les monuments célèbres de Nantes</li>
            <li>Les visites et sorties incontournables</li>
            <li>Vos boutiques souvenis préférées</li>
          </ul>
        </div>
    );
  }
}
export default Home;
