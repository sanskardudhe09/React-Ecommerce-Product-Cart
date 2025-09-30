import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = () => {
    if(location.pathname === '/'){
        navigate("/cart");
    }else{
        navigate("/");
    }
  };

  return (
    <header className='header'>
        <h2>React E-commerce Product Cart</h2>
        <button onClick={redirectTo}>
          {location.pathname === "/" ? "Go to Cart" : "Go to Home"}
        </button>
    </header>
  )

};
export default Header;