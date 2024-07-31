import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const PlacesCard = ({ place }) => {
    return (
        <Card className="md-6">
                      <Card.Body>
                        <Card.Title><h2>{place.name}</h2></Card.Title>
                        {/* <Card.Img><img src={`http://localhost:8000/storage/uploads/${place.image}`}></img></Card.Img> */}
                        <Card.Text><strong>{place.adresse}</strong></Card.Text>
                        <Card.Text><em>{place.hours}</em></Card.Text>
                        <Card.Text><h3 className='bg-color-1 rounded-pill p-2'>{place.price}</h3></Card.Text>
                        <Card.Text><p>{place.description}</p></Card.Text>
                        <Card.Text><span className='bg-warning rounded-pill p-2'>{place.slug}</span></Card.Text>
                        <Card.Text>site web : <a href={`${place.web_site}`}>{place.name} </a></Card.Text>
                        <Button variant="primary">
                            <Link className="text-light text-decoration-none"to={`/articles/${place.id}`}>Voir</Link>
                        </Button>
                      </Card.Body>
                    </Card>
    );
};
export default PlacesCard;