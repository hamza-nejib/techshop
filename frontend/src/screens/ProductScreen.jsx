import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';


const ProductScreen = () => {
    const [product, setProduct] = useState([]);

    const { id:productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${productId}`);
            setProduct(data);
        };
          
        fetchProduct();
    }, [productId])

  return (
    <>
        <Link className='btn btn-light my-3' to='/'>Précédent</Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} avis`} />
                    </ListGroup.Item>
                    <ListGroup.Item>Prix: {product.price}€</ListGroup.Item>
                    <ListGroup.Item>Description: {product.description}€</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Prix:</Col>
                                <Col><strong>{product.price}€</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Disponibilité:</Col>
                                <Col><strong>{product.countInStock > 0 ? 'En Stock' : 'Non Disponible'}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button 
                                className='btn-block' 
                                type='button' 
                                disabled={product.countInStock === 0}
                            >
                                Ajouter au Panier
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen