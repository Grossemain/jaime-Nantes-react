import React, { useEffect, useRef, useState } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { Link } from 'react-router-dom'
import { articleService } from '../../../_services/articles.service';

const Articles = () => {
    const [Articles, setArticles] = useState([])
    const flag = useRef(false)

    // Récupération de la liste des articles à l'affichage
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

    // Gestion du bouton de suppression d'un article
    const delArticle = (ArticleId) => {
        articleService.deleteArticle(ArticleId)
            .then(res => {
                // Mise à jour du state pour affichage
                setArticles((current) => current.filter(Article => Article.id !== ArticleId))
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
                        <th>Title</th>
                        <th>slug</th>
                        <th>image</th>
                        <th>Id term cat</th>
                        <th>Créer le</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Articles.map((Article) => (
                            <tr key={Article.id}>
                                <td>{Article.id}</td>
                                <td>{Article.title}</td>
                                <td>{Article.slug}</td>
                                <td>{Article.image}</td>
                                <td>{Article.term_category_id}</td>
                                <td>{Article.created_at}</td>
                                <td>
                                <span className="m-1">
                                    <Button
                                            variant="primary">
                                            <Link className="text-light text-decoration-none"to={`/admin/articles/${Article.id}`}>Voir</Link>
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                    <Button
                                            variant="warning">
                                            <Link className="text-light text-decoration-none"to={`/admin/articles/edit/${Article.id}`}>Edit</Link>
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                        <Button
                                            variant="danger"
                                            onClick={() => delArticle(Article.id)}
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

export default Articles;