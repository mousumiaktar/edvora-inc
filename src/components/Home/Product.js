import React from 'react';
import Card from 'react-bootstrap/Card';

const Product = ({ product }) => {
  const { product_id, name, selling_price, stock } = product;

  return (
    <div className='col-lg-4'>
      <Card style={{ width: '18rem' }}>
        <Card.Header style={{background:'#1E41BB', color:'white'}}>{name}</Card.Header>
        <Card.Body>
          <Card.Title>selling_price: ${selling_price}</Card.Title>
          <Card.Title>stock: {stock}</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;