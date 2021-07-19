import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

// STYLES
const HeaderConstainer = styled.header`
width: 1920px;
max-width: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`;

const Header = () => {
    return (
        <HeaderConstainer>
            <Navbar />
        </HeaderConstainer>
    )
}

export default Header
