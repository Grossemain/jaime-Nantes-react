import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const ArticlesCard = ({ article }) => {
    return (
        <Card className="md-6">
                      <Card.Body>
                        <Card.Title><h2>{article.h1_title}</h2></Card.Title> 
                        <Card.Text><strong>{article.category_id	}</strong></Card.Text>
                        <Card.Text><p>{article.content	}</p></Card.Text>
                        <Card.Text><span className='bg-warning rounded-pill p-2'>{article.slug}</span></Card.Text>
                        <Button variant="primary">
                            <Link className="text-light text-decoration-none"to={`/articles/${article.id}`}>Voir</Link>
                        </Button>
                      </Card.Body>
                    </Card>
    );
};
export default ArticlesCard;