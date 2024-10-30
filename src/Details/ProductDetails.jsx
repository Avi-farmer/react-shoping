import React from 'react';
import { products } from '../data/ProductsData';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { Col, Row } from 'react-bootstrap';
import { MdShoppingCart } from "react-icons/md";
import { ImPower } from "react-icons/im";
function ProductDetails() {
  const { id } = useParams();
  const productDetail = products.find(mobile => mobile.id === Number(id));
  return (
    <div className="container-fluid">
      <Header />
      <Row>
        <Col sm={5}>
          <img className='productimage' src={productDetail.images} alt={productDetail.brand} />
          <div className='grpbtn'>
            <button className='cartbtn'><MdShoppingCart />Add To Cart</button>
            <button className='buybtn'><ImPower />Buy Now</button>
          </div>
        </Col>
        <Col sm={7}>
          <h1>{productDetail.brand}</h1>
          <h5>Price: {productDetail.price}/-</h5>
          <p>{productDetail.description}</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {productDetail.Specifications.map((spec, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>{spec}</li>
            ))}
          </ul>

        </Col>
      </Row>
    </div>


  );
}

export default ProductDetails;
