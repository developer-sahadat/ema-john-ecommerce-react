import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <div className="products-container">
                <h2> <span>Our best selling product</span> </h2>
                <div className="container">
                    <div className='row g-5 row-cols-lg-3'>
                      
                        {
                        products.map(product=><Products
                             product={product}
                            key={product.id} 
                             >

                             </Products>)
                    }
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;