import React from 'react';
import { string } from 'prop-types';

const Header = (props) => {
    const { title, logo, icon } = props;
    return (
        <header className='header'>
            {logo ? <img className='logo' src={logo} alt="Pokemon" /> : null}
            {title}
            {icon ? <img className='icon' src={icon} alt="PokeBall" /> : null}
        </header>
    );
};

Header.propTypes = {
    logo: string,
    title: string,
    icon: string
};

Header.defaultProps = {
    logo: null,
    title: '',
    icon: ''
};

export default Header;