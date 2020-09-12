import React from 'react';
import './Cart.css';

const Cart = (props) => {

    console.log(props);

    const { cart } = props;

    let totalPrice = 0;

    for (let index = 0; index < cart.length; index++) {
        totalPrice += cart[index].price;
    }

    return (
        <div className="cart-div">
            <h3>Order Summery</h3>
            <h5>total items : {cart.length}</h5>
            <h5>total price : {totalPrice}</h5>
        </div>
    );
};

export default Cart;