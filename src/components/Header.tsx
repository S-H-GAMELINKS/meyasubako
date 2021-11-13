import React from 'react';
import 'bulma/css/bulma.min.css';
import { Navbar, Heading } from 'react-bulma-components';

export const Header: React.FC = () => {
    return (
        <Navbar color="success">
            <Navbar.Brand>
                <Navbar.Item href="/">
                    浜田市目安箱
                </Navbar.Item>
            </Navbar.Brand>
        </Navbar>
    );
}

export default Header;
