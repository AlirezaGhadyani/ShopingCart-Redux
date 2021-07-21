import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { FaTimesCircle } from 'react-icons/fa';
import { NavbarBtn } from './Navbar';
import { useSelector } from 'react-redux';

// STYLES
const NavWrapper = styled.ul`
display: flex;
flex-direction: row;
align-items: center;

& li{
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.6s ease;

    :not(:nth-child(4)){
        :hover{
        transform: translateY(-0.4rem);
        transition: transform 0.6s ease;
    }
    }

    :not(:nth-child(1)){
        margin-right: 2rem;
    }
    & a{
        font-size: 1.8rem;
        color: #fff;
        .cart-text{
            display: none;
        }
        @media (max-width:768px){
        .cart-text{
            display: flex;
        }
    }
    }
        & button{
        display: flex!important;
        @media (max-width:768px){
        display: none!important;
    }
        }
    }

    @media (max-width:768px){
        position: fixed;
        height: auto;
        width: 100%;
        background: #ff4757;
        flex-direction: column;
        justify-content: center;
        top: 0;
        right: 0;
        z-index: 100;
        padding: 1rem 0;
        transform: translateY(${props => props.expand});
        transition: transform 0.5s linear;
        & li{
            width: 100%;
            margin: 0!important;
            :hover{
               transform: translateY(0rem)!important;
            }
            & a{
                font-weight: 600;
            }
        }
    }
`;

const TimesAnim = keyframes`
0%{
    transform: rotate(0deg);
}
100%{
    transform: rotate(360deg);
}
`;

const NavbarTimesBtn = styled.button`
position: absolute;
top: 0.8rem;
right: 0.8rem;
background: transparent;
border: 0;
display: none;
cursor: pointer;
& svg{
    font-size: 2.2rem;
    color: #fff;
}
animation: ${TimesAnim} 6s linear infinite;
@media (max-width:768px){
    display: flex;
}
`;

const QtySpan = styled.span`
position: absolute;
top: -0.5rem;
right: -.8rem;
font-size: 1.2rem;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
padding: 0rem 0.4rem;
background: #fff;
color: #ff4757;
border-radius: 50%;
font-family: Quicksand;
`;

const NavbarNav = ( { toggleNav, setToggleNav } ) => {

    const totalQty = useSelector( state => state.cart.totalQty );

    return (
        <NavWrapper expand={toggleNav ? '0' : '-100%'}>
            <li>
                <Link to="/">خانه</Link>
            </li>
            <li>
                <Link to="/AboutUs">درباره ما</Link>
            </li>
            <li>
                <Link to="/ContactUs">ارتباط باما</Link>
            </li>
            <li>
                <Link to="/Cart">
                    <NavbarBtn>
                        <IoCartOutline />
                        <QtySpan>{totalQty}</QtySpan>
                    </NavbarBtn>
                    <span className="cart-text">سبد خرید</span>
                </Link>
            </li>
            <NavbarTimesBtn onClick={() => setToggleNav( false )}>
                <FaTimesCircle />
            </NavbarTimesBtn>
        </NavWrapper>
    )
}

export default NavbarNav
