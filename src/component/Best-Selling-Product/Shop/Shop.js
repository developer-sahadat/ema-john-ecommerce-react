import React, { useEffect, useState } from 'react';
import { localStorageData, localStoregeDB } from '../../Database/LocalStoregeDataBas/LocalStoregeDataBas';
import Cart from '../../Product-Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    //products 
        const [products, setProducts]=useState([])
        useEffect(()=>{
            fetch('products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
        },[])

        //local storage get

        useEffect(()=>{
          const localStorage=localStorageData()

          const saveCart=[]
        for(const id in localStorage){
            const dynamicData=products.find(product=>product.id===id)
            
            if(dynamicData){
                dynamicData.quantity=id;
                saveCart.push(dynamicData)
            }

           }

           setCartInfo(saveCart)

        },[products])

    //Offcanvas cart
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const[cartInfo, setCartInfo]=useState([])
       
    //products information
    const productsInfo=(product_info)=>{
        const newCart=[...cartInfo, product_info]
        // console.log(newCart);
       
        setCartInfo(newCart)
        localStoregeDB(product_info.id)
    
    }

    //clear data
    const clearData=()=>{
        localStorage.removeItem('shopping_cart_id')
        setCartInfo([])
    }
    
    

    return (
        <div>
            <div className="products-container">
                <h2> <span>Our best selling product</span> </h2>
                <div className="container">
                    <div className='row g-5 row-cols-lg-3 row-cols-md-2'>
                      
                        {
                        products.map(product=><Products
                             product={product}
                            key={product.id}
                            handleShow={handleShow}
                            productsInfo={productsInfo} 
                             >

                             </Products>)
                    }
                       
                    </div>

                    <div className="cart container ">

                        <Cart show={show}  
                        handleClose={handleClose}
                        clearData={clearData}
                        cartInfo={cartInfo}
                        ></Cart>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Shop;