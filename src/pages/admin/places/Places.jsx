import React, { useEffect, useRef, useState } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { Link } from 'react-router-dom'
import { placeService } from '../../../_services/place.service';

const Places = () => {
    const [Places, setPlaces] = useState([])
    const flag = useRef(false)

    // Récupération de la liste des articles à l'affichage
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

    // Gestion du bouton de suppression d'un article
    const delPlace = (PlaceId) => {
        placeService.deletePlace(PlaceId)
            .then(res => {
                // Mise à jour du state pour affichage
                setPlaces((current) => current.filter(Place => Place.id !== PlaceId))
            })
            .catch(err => console.log(err))
    }

    return (        
        <div>
            <div className="container mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>id</th>
                        <th>name</th>
                        <th>slug</th>
                        <th>image</th>
                        <th>adresse</th>
                        <th>Id cat</th>
                        <th>Créer le</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Places.map((Place) => (
                            <tr key={Place.id}>
                                <td>{Place.id}</td>
                                <td>{Place.name}</td>
                                <td>{Place.slug}</td>
                                <td>{Place.image}</td>
                                <td>{Place.adresse}</td>
                                <td>{Place.category_id}</td>
                                <td>{Place.created_at}</td>
                                <td>
                                <span className="m-1">
                                    <Button
                                            variant="primary">
                                            <Link className="text-light text-decoration-none"to={`/admin/articles/${Place.id}`}>Voir</Link>
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                    <Button
                                            variant="warning">
                                            <Link className="text-light text-decoration-none"to={`/admin/articles/edit/${Place.id}`}>Edit</Link>
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                        <Button
                                            variant="danger"
                                            onClick={() => delPlace(Place.id)}
                                        >
                                            Supprimer
                                        </Button>
                                    </span>
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            </div>
        </div>
    );
};

export default Places;