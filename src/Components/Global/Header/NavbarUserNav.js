import React from 'react';
import styled from 'styled-components';

// STYLES
const UserNavWrapper = styled.ul`
position: absolute;
top: 5rem;
left: 0.5rem;
width: 16rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #ff4757;
color: #fff;
border-radius: 0.4rem;
padding: 0.4rem 1rem;
z-index: 1000;
`;

const UserNavItem = styled.li`
width: 100%;
display: block;
font-size: 1.5rem;
font-weight: 700;
padding: 0.2rem 0;
cursor: pointer;
`;

const NavbarUserNav = () => {
    return (
        <UserNavWrapper>
            <UserNavItem>پروفایل من</UserNavItem>
            <UserNavItem>ورود / ثبت نام</UserNavItem>
            <UserNavItem>خروج از حساب کاربری</UserNavItem>
        </UserNavWrapper>
    )
}

export default NavbarUserNav
