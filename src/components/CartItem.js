import React from 'react';
import { MAX_QTY, MIN_QTY } from '../utils/constants';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({ cartItem }) => {
    const {increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
    //const [message, setMessage] = useState("");

    const handleIncrease = () => {
        if(cartItem.quantity >= MAX_QTY){
            //setMessage(`Maximum ${MAX_QTY} items are allowed`);
            //setTimeout(() => setMessage(""), 1000);
            toast.warning(`Maximum ${MAX_QTY} items are allowed`, { autoClose: 1500 });
            return;
        }
        increaseQuantity(cartItem.id);
    };

    const handleDecrease = () => {
        if(cartItem.quantity <= MIN_QTY){
            //setMessage(`Minimum ${MIN_QTY} items required`);
            //setTimeout(() => setMessage(""), 1000);
            toast.info(`Minimum ${MIN_QTY} items required`, { autoClose: 1500 });
            return;
        }
        decreaseQuantity(cartItem.id);
    };

    const handleRemove = () => {
        if(cartItem.quantity < MIN_QTY){
            window.alert(`Can't Remove Minimum ${MIN_QTY} items needed in cart!`);
            return;
        }
        const isOk = window.confirm(`Remove ${cartItem.name} from Cart?`);
        if(isOk) { 
            removeFromCart(cartItem.id);
            toast.success(`${cartItem.name} removed from cart`, { autoClose: 1500 });
        };
    };

    return (
        <div className='cart-item'>
            <img src={cartItem.image} alt={cartItem.name} />
            <div>
                <div style={{fontWeight: 600}}>{cartItem.name}</div>
                <div>₹{cartItem.price} × {cartItem.quantity} = ₹{cartItem.price * cartItem.quantity}</div>
            </div>
            <div className='cart-btn'>
                <button className='btn btn-secondary' onClick={handleDecrease}>-</button>
                {cartItem.quantity}
                <button className='btn btn-primary' onClick={handleIncrease}>+</button>
            </div>
            <button className='btn btn-primary' onClick={handleRemove}>Remove</button>
        </div>
    )
};
export default CartItem;