import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { VscThreeBars } from 'react-icons/vsc';
import { FaRegUserCircle } from 'react-icons/fa';
import NavbarNav from './NavbarNav';

// STYLES
const NavbarWrapper = styled.nav`
width: 100%;
padding: 0.8rem 1.8rem;
background: #ff4757;
position: relative;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
.main-logo{
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
    font-family: Quicksand;
    margin-right: 1rem;
}
`;

const LeftSideWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const NavbarBtn = styled.button`
position: relative;
background: transparent;
border: 0;
color: #fff;
cursor: pointer;
transition: opacity 0.4s ease;
display: flex;
justify-content: center;
align-items: center;
& svg{
    font-size: 2.2rem;
}
:hover{
    opacity: 0.8;
    transition: opacity 0.4s ease;
}
`;

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState( false );

    return (
        <NavbarWrapper>
            <NavbarBtn className="navbar-toggler" onClick={() => setToggleNav( true )}>
                <VscThreeBars />
            </NavbarBtn>
            <NavbarNav toggleNav={toggleNav} setToggleNav={setToggleNav} />

            <LeftSideWrapper>
                <NavbarBtn>
                    <FaRegUserCircle />
                </NavbarBtn>
                <Link to="/" className="main-logo">Lavalo</Link>
            </LeftSideWrapper>
        </NavbarWrapper>
    )
}

export default Navbar;
