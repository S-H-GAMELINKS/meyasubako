import React, { useState } from 'react';
import { Navbar } from 'react-bulma-components';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuClass, setMenuClass] = useState('');

    const openMenu = (): void => {
        if (isMenuOpen) {
            setMenuClass('');
            setIsMenuOpen(false);
        } else {
            setMenuClass('is-active');
            setIsMenuOpen(true);
        }
    }

    return (
        <Navbar color="success">
            <Navbar.Brand>
                <Navbar.Item href="/">
                    浜田市目安箱
                </Navbar.Item>
                <Navbar.Burger onClick={openMenu} data-target="navbarMenu" aria-label="menu" aria-expanded="false" />
            </Navbar.Brand>
            <Navbar.Menu id="navbarMenu" className={menuClass}>
                <Navbar.Container align="right">
                    <Navbar.Item href="#">
                        プライバシーポリシー
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
}

export default Header;
