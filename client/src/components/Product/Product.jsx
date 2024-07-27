import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Product = ({ product, category }) => {


    let name = product.name;
    let price = product.price;
    let images = product.image;
    let url = product.url;
    return (
        <Col xl={3}>
                    <Card className='product'>
                        <div className='product-img-box'>

                        <Card.Img className='product-img' variant="top" onClick={()=>{window.location.href = `/${category}/${url}`}}  src={images} />
                        </div>
                        <Card.Body className='product-name-box'>
                            <Card.Title className='product-name'> {name} </Card.Title>
                            <Card.Text className='product-price'> $ {price} </Card.Text>
                            {/* <Button variant="dark" href='/product/1' >Add to Cart</Button> */}
                        </Card.Body>
                    </Card>
                   
                </Col>
    )
};


export default Product;