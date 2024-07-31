import React from 'react';
import Card from 'react-bootstrap/Card';

const CategoriesCard = ({ category }) => {
    return (
        <Card className="md-6">
                      <Card.Body>
                        <Card.Title><h2>{category.category_name}</h2></Card.Title> 
                        <Card.Text><strong>{category.term_category_id	}</strong></Card.Text>
                        <Card.Text><p>{category.category_description	}</p></Card.Text>
                        <Card.Text><span className='bg-warning rounded-pill p-2'>{category.category_slug}</span></Card.Text>
                      </Card.Body>
                    </Card>
    );
};
export default CategoriesCard;