import React, { useEffect, useRef, useState } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { Link } from 'react-router-dom'
import { termCategoryService } from '../../../_services/termcategories.service';

const TermCategories = () => {
    const [TermCategories, setTermCategories] = useState([])
    const flag = useRef(false)

    // Récupération de la liste des term categories à l'affichage
    useEffect(() => {
        if(flag.current === false){
            termCategoryService.getAllTermCategories()
                .then(res => {
                    // Liste dans le state
                    setTermCategories(res.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        
    }, [])

    // Gestion du bouton de suppression d'un term categorry
    const delTermCategory = (TermCategoryId) => {
        termCategoryService.deleteTermCategory(TermCategoryId)
            .then(res => {
                // Mise à jour du state pour affichage
                setTermCategories((current) => current.filter(TermCategory => TermCategory.id !== TermCategoryId))
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
                        <th>Nom</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {TermCategories.map((TermCategory) => (
                            <tr key={TermCategory.id}>
                                <td>{TermCategory.id}</td>
                                <td>{TermCategory.term_category_name}</td>
                                <td>
                                    <span className="m-1">
                                    <Button
                                            variant="primary">
                                            <Link className="text-light text-decoration-none"to={`/admin/termcategories/edit/${TermCategory.id}`}>Edit</Link>
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                        <Button
                                            variant="danger"
                                            onClick={() => delTermCategory(TermCategory.id)}
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

export default TermCategories;