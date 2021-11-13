import React from 'react';
import 'bulma/css/bulma.min.css';
import { Navbar } from 'react-bulma-components';

export const Header: React.FC = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <Navbar.Item href="/">浜田市目安箱</Navbar.Item>
            </Navbar.Brand>
            <Navbar.Container align="right">
                <Navbar.Item>浜田市目安箱とは？</Navbar.Item>
                <Navbar.Item>目安箱</Navbar.Item>
                <Navbar.Item>問い合わせ</Navbar.Item>
            </Navbar.Container>
        </Navbar>
    );
}

export default Header;
