import React, { createContext, useContext, useState} from 'react';
import { MAX_QTY, MIN_QTY } from '../utils/constants';
const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prev => {
            const existingProduct = prev.find(item => item.id === product.id);
            if(existingProduct){
                if(existingProduct.quantity >= MAX_QTY) return prev; //Restricts adding quantity more than 10
                return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            }
            return [...prev, {...product, quantity: 1}];
        });
    };

    const increaseQuantity = (id) => {
        setCart(prev => 
            prev.map(item => 
                item.id === id ? {...item, quantity: Math.min(MAX_QTY, item.quantity+1)} : item));
    };

    const decreaseQuantity = (id) => {
        setCart(prev => 
            prev.map(item => 
                item.id === id ? {...item, quantity: Math.max(MIN_QTY, item.quantity-1)} : item));
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};

//Custom hook useCart that returns the cart context to be used globally by any components;
export function useCart(){
    return useContext(CartContext);
}