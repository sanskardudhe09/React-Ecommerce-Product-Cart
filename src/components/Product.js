import React from 'react';
import products from '../data/productData';
import ProductItem from './ProductItem';

const Product = () => {
    return (
        <div className='product-section'>
            <h2>All Products</h2>
            <div className='prod-list'>
                {products.map(product => <ProductItem key={product.id} product={product} />)}
            </div>
        </div>
    );
};
export default Product;