import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {

        let message;
        if (cart.length === 0){
            message = <p>Cart is empty</p>
        }
        else {
            message = <p>Boroloxx</p>
        }


    return (
        <div>
            <h2 className={cart.length === 1 ? "blue" : "red"}>Order Summary: {cart.length}</h2>
            {message}
            {cart.length > 2 ? <span>Aro kino</span> : <span>fokira</span>}
            <p className={`red bold ${cart.length === 1 ? "blue" : "yellow"}`}>Sample text</p>

            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                    </p>)
            }
            {
                cart.length === 2 && <p>2ta add hoise</p>
            }
            {
                cart.length === 3 || <h3>3ta hoilo na</h3>
            }
        </div>
    );
};

export default Cart; 