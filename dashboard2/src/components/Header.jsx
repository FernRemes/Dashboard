import React from 'react';
import './Header.css';
import Logo from './Logo.jsx';
import SearchBar from './SearchBar.jsx';
import Nav from './Nav.jsx';
function Header() {

    return (
        <header id = 'header' className = "header fixed-top d-flex align-items-center">
            <Logo/>
            <SearchBar/>
            <Nav/>
        </header>
    )
}

export default Header;