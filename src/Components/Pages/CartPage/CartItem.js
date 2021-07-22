import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp, FaArrowDown, FaTrashAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartItem, getTotalQty } from '../../../Redux/Actions';

// STYLES
const CartItemWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 1rem 0;
`;

const CartItemImg = styled.img`
width: 6rem;
height: 6rem;
object-fit: contain;
`;

const CartItemTitle = styled.p`
font-size: 1.4rem;
font-weight: 500;
font-family: Quicksand;
direction: ltr;
`;

const CartItemQty = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
& button{
    background: #ff4757;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 0.6rem;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    & svg{
        font-size: 1rem;
    }
}

& span{
    font-size: 1.4rem;
    margin: 0 0.5rem;
}
`;

const CartItemPrice = styled.h3`
font-size: 1.4rem;
font-weight: 600;
direction: ltr;
font-family: Quicksand;
`;

const CartItemRemoveBtn = styled.button`
background: transparent;
border: 0;
cursor: pointer;
& svg{
    font-size: 2rem;
    color: #ff4757;
}
`;

const CartItem = ( { itemData } ) => {
    const dispatch = useDispatch();
    const { image, title, price, qty, id } = itemData;
    const [itemQty, setItemQty] = useState( qty );
    const [itemPrice, setItemPrice] = useState( price );

    const cartItems = useSelector( state => state.cart.items );
    const clickedItem = cartItems.filter( item => item.id === itemData.id );

    // INCREASE QTY
    const handleIncreaseQty = () => {
        clickedItem[0].qty += 1
        setItemQty( clickedItem[0].qty );
        // dispatch( increaseTotalQty() );
        dispatch( getTotalQty() );
    }

    // DECREASE QTY
    const handleDecreaseQty = () => {
        clickedItem[0].qty -= 1
        setItemQty( clickedItem[0].qty );
        // dispatch( decreaseTotalQty() );
        dispatch( getTotalQty() );
    }

    useEffect( () => {
        setItemPrice( price * itemQty );

        if ( itemQty === 0 ) {
            dispatch( removeCartItem( id ) );
            dispatch( getTotalQty() );
        }
        // eslint-disable-next-line
    }, [itemQty] );

    // HANDLE REMOVE ITEM
    const handleRemoveItem = () => {
        dispatch( removeCartItem( id ) );
        dispatch( getTotalQty() );
    }

    return (
        <CartItemWrapper>
            <CartItemImg src={image} />
            <CartItemTitle>{title.length > 20 ? `${title.slice( 0, 20 )}...` : title}</CartItemTitle>
            <CartItemQty>
                <button onClick={handleIncreaseQty}>
                    <FaArrowUp />
                </button>
                <span>{itemQty}</span>
                <button onClick={handleDecreaseQty}>
                    <FaArrowDown />
                </button>
            </CartItemQty>
            <CartItemPrice>{`$${itemPrice.toFixed( 2 )}`}</CartItemPrice>
            <CartItemRemoveBtn onClick={handleRemoveItem}>
                <FaTrashAlt />
            </CartItemRemoveBtn>
        </CartItemWrapper>
    )
}

export default CartItem;
