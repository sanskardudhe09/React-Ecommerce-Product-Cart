import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart } = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity) , 0);
    const navigate = useNavigate();

    return (
        <div className='cart'>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <div className='empty-cart'>Your Cart is empty. Add products to it </div>
            ): (
                <>
                  <div className='cart-section'>
                    {cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
                  </div>
                  <div className='cart-checkout'>
                    <div style={{ fontWeight: 600 }}>Total: ₹{totalPrice}</div>
                    <button className='btn btn-primary' onClick={() => alert('Proceed to checkout')}>Checkout</button>
                  </div>
                </>
            )}
            <button className='back-btn' onClick={() => navigate("/")}>Go Back to Products</button>
        </div>
    );
};
export default Cart;