import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Product = ({ product }) => {


    let name = product.name;
    let price = product.price;
    let image = product.image;
    let url = product.url;
    return (
        <Col xl={3}>
                    <Card className='product'>
                        <div className='product-img-box'>

                        <Card.Img className='product-img' variant="top" onClick={()=>{window.location.href = '/anemone/CSB'}}  src="https://coralsanonymous.com/cdn/shop/files/PC140981-Copy_b316c012-62f6-43f9-a6e7-a76e6ef3c189_1024x1024.jpg?v=1703901299" />
                        </div>
                        <Card.Body className='product-name-box'>
                            <Card.Title className='product-name'> Chicago Sunburst Anemone </Card.Title>
                            <Card.Text className='product-price'> $400.00 </Card.Text>
                            {/* <Button variant="dark" href='/product/1' >Add to Cart</Button> */}
                        </Card.Body>
                    </Card>
                   
                </Col>
    )
};


export default Product;