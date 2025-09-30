import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductItem = ({ product }) => {
    const {addToCart} = useCart();
    //const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handleAddCart = () => {
        addToCart(product);
        //setMessage("Product added to cart successfully!");
        //setTimeout(() => setMessage(""), 1000);
        toast.success("Product added to cart successfully!", { autoClose: 1000 })
        setTimeout(() => navigate('/cart'), 1500);
    };
    return (
        <div className='card'>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className='prod-price'>Rs {product.price}</div>
            <button className='btn btn-primary' onClick={handleAddCart}>Add To Cart</button>
        </div>
    );
};
export default ProductItem;