import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import './Cart.css'

const Cart = ({cartInfo,show, handleClose,  clearData}) => {

    let totalPrice=0;
 
    let shopping=0;
    for(const cart of cartInfo){
        totalPrice+=cart.price;
        shopping +=cart.shipping
    }

    const tax=(totalPrice*10/100).toFixed(4)
    const total=totalPrice+shopping+parseFloat(tax)

    return (
        <div>
             <Offcanvas backdropClassName='cart' show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title><h1 className='title'>Add To Cart Products</h1></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className="cart-info">
                                    <h4>Order Summary</h4>
                                    <p>Selected Items: {cartInfo.length}</p>
                                    <p>Total price: {totalPrice}</p>
                                    <p>Total Shipping Charge: ${shopping}</p>
                                    <p>Tax: ${tax}</p>
                                    <h6>Grand Total: ${total}</h6>
                                    <div className='container-btn'>
                                    <button className='clear' onClick={clearData}>Clear Cart</button>
                                    <button className='buy'>Buy Now</button>
                                    </div>
                                    </div>
                                </Offcanvas.Body>
                         </Offcanvas>
        </div>
    );
};

export default Cart;