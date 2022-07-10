import React from 'react';
import { string } from 'prop-types';

const Header = (props) => {
    const { title, icon } = props;
    return (
        <header className='header'>
            Aquí el header
            {title}
            {icon}
        </header>
    );
};

Header.propTypes = {
title: string,
icon: string
};

Header.defaultProps = {
title: '',
icon: ''
};

export default Header;