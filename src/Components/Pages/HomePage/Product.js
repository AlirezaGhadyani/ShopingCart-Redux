import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// STYLES
const ProductCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: Quicksand;
padding: 1.2rem;
border-radius: 0.3rem;
cursor: pointer;
box-shadow: 0 0 5px rgba(0,0,0,0.1);
transition: transform 0.2s linear;
:hover{
transform: translateY(-0.4rem);
transition: transform 0.2s linear;
}
`;

const CardImg = styled.img`
width: 100%;
height: 18rem;
object-fit: contain;
`;

const CardTitle = styled.p`
font-size: 1.2rem;
font-weight: 700;
text-align: center;
direction: ltr;
margin: 1rem 0;
& a{
    color: #2c3e50;
}
`;

const CardPricCatWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const PriceCatBadge = styled.span`
font-size: 1rem;
font-weight: 700;
padding: 0.2rem 0.4rem;
border: 1px solid #ff4757;
border-radius: 0.4rem;
direction: ltr;
color: #ff4757;
:nth-child(2){

}
`;

export const AddCartBtn = styled.button`
width: 100%;
background: #ff4757;
border: 0;
font-family: faFont;
font-size: ${props => props.font};
color: #fff;
padding: ${props => props.padd} 1.2rem;
margin: 1rem 0 0 0;
border-radius: 0.4rem;
cursor: pointer;
`;

const Product = ( { product } ) => {
    const { image, title, price, category: cat, id } = product;
    return (
        <ProductCard>
            <Link to={`/${id}product`}>
                <CardImg src={image} />
            </Link>
            <CardTitle>
                <Link to={`/${id}product`}>
                    {title.length > 20 ? `${title.slice( 0, 25 )}...` : title}
                </Link>
            </CardTitle>
            <CardPricCatWrapper>
                <PriceCatBadge>{`$ ${price}`}</PriceCatBadge>
                <PriceCatBadge>{cat}</PriceCatBadge>
            </CardPricCatWrapper>
            <AddCartBtn font="1.6rem" padd="0.4rem">اضافه به سبد خرید</AddCartBtn>
        </ProductCard>
    )
}

export default Product
