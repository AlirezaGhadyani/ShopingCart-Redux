import React from 'react';
import styled from 'styled-components';
import Product from './Product';

// STYLES
const ProductWrapper = styled.section`
width: 100%;
padding: 0 1.8rem;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(16rem,1fr));
grid-gap: 1rem;
margin-top: 70px;
`;

const Products = ( { products } ) => {
    return (
        <ProductWrapper>
            {products.map( product => (
                <Product product={product} key={product.id} />
            ) )}
        </ProductWrapper>
    )
}

export default Products
