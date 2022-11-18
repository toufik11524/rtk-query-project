import React from 'react';
import { useGetAllProductsQuery, useGetProductQuery } from '../../api/apiSlice';
import Product from './Product';
import productStyle from './product.module.css';

const Products = () => {
    const { data: allProducts } = useGetAllProductsQuery();
    const { data: singleProduct } = useGetProductQuery("iphone");

    return (
        <div className={productStyle.product__container}>
            <h1>List of Products</h1>
            <div className={productStyle.product__all}>
                {
                    allProducts?.products.map((item) => 
                        <Product
                            key={item.id}
                            product={item}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Products;