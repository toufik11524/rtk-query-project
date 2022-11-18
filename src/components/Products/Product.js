import React from 'react';
import productStyle from './product.module.css';

const Product = (props) => {
    const {id, title, description, price} = props.product;

    return (
        <div className={productStyle.single__product}>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Product;