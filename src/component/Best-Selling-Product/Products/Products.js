import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'
const Products = ({product}) => {
    const {img,name, price, ratings, seller}=product
    return (
       <div>
            <div className='product-card'>
            <img src={img} alt=""  className='img-fluid' />
            <div className="product-info">
                <h4>{name}</h4>
                <h6>Price: {price}</h6>
                <br/>
                <p>Ratings: {ratings}</p>
                <p>Seller: {seller}</p>
            </div>
            <button className='btn-cart justify-content-center align-items-center d-flex'><p className='pe-3 pt-3'>Add to cart</p>
            <FontAwesomeIcon className='pt-1' icon={faShoppingCart } />
            </button>
        </div>
       </div>
    );
};

export default Products;