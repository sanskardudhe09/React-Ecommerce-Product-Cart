import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { CartProvider } from './context/CartContext';
import Product from './components/Product';
import Cart from './components/Cart';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Product />}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <ToastContainer 
          position="top-center" 
          autoClose={1500} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
        />
      </Router>
    </CartProvider>
  );
}
export default App;
