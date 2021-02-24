import React from 'react';
import './Header.scss';
import logo from '../img/Genshin-Impact-Logo.png';

const Header = () => {
    return(
        <div className="header">
            <img src={logo}/>
            <h1 className="title"><span>Elemental Reaction Calculator</span></h1>
        </div>
    );
}

export default Header;