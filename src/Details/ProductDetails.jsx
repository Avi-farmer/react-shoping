import React from 'react';
import { products } from '../data/ProductsData';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { Col, Row } from 'react-bootstrap';
import { MdShoppingCart } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { FaStar } from "react-icons/fa6";
function ProductDetails() {
  const { id } = useParams();
  const productDetail = products.find(mobile => mobile.id === Number(id));
  return (
    <div className="container-fluid">
      <Header />
      <Row>
        <Col sm={5}>
          <div className='imagefixed'>
            <img className='productimage' src={productDetail.images} alt={productDetail.brand} />
            <div className='grpbtn'>
              <button className='cartbtn'><MdShoppingCart />Add To Cart</button>
              <button className='buybtn'><ImPower />Buy Now</button>
            </div>
          </div>
        </Col>
        <Col sm={7}>
          <h3>{productDetail.title}</h3>
          <h3><span className='me-3'>Price:</span>₹{productDetail.price}</h3>
          <p className='rating'>{productDetail.rating}<FaStar /></p>
          <dt className='text-success'>Special price</dt>
          <p>{productDetail.description}</p>
          <ul>
            {productDetail.Specifications.map((spec, index) => (
              <li className='index' key={index}>{spec}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>


  );
}

export default ProductDetails;
