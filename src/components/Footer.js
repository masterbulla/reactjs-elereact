import React from 'react';
import './Footer.scss';

const Footer = () => {
    return(
        <div className='footer'>
            <p className="description">
            All formulas are refering from&nbsp;
            <a href="https://genshin-impact.fandom.com/wiki/Elemental_Reactions#Overloaded.2C_Shattered.2C_Electro-charged.2C_Superconduct_and_Swirl">
            Genshin Wiki</a>
            &nbsp;(valid from 0 to 898 elemental mastery).
            </p>
        </div>
    );
}

export default Footer;