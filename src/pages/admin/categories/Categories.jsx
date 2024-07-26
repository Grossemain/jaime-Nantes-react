import React, { useEffect, useRef, useState } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { Link } from 'react-router-dom'
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

    // Gestion du bouton de suppression d'un term categorry
    const delCategory = (CategoryId) => {
        categoryService.deleteCategory(CategoryId)
            .then(res => {
                // Mise à jour du state pour affichage
                setCategories((current) => current.filter(Category => Category.id !== CategoryId))
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
                        <th>Description</th>
                        <th>slug</th>
                        <th>term cat ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Categories.map((Category) => (
                            <tr key={Category.id}>
                                <td>{Category.id}</td>
                                <td>{Category.category_name}</td>
                                <td>{Category.category_description}</td>
                                <td>{Category.category_slug}</td>
                                <td>{Category.term_category_id}</td>
                                <td>
                                <span className="m-1">
                                    <Button
                                            variant="primary">
                                            <Link className="text-light text-decoration-none"to={`/admin/categories/${Category.id}`}>Voir</Link>
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                    <Button
                                            variant="warning">
                                            <Link className="text-light text-decoration-none"to={`/admin/categories/edit/${Category.id}`}>Edit</Link>
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                        <Button
                                            variant="danger"
                                            onClick={() => delCategory(Category.id)}
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

export default Categories;