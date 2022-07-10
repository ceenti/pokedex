import React from 'react';
import { string } from 'prop-types';
// import Filter 

const SideBar = (props) => {
    const { title, icon } = props;
    return (
        <aside className='sideBar'>
            Aquí el sidebar
            {title}
            {icon}
        </aside>
    );
};

SideBar.propTypes = {
title: string,
icon: string
};

SideBar.defaultProps = {
title: '',
icon: ''
};

export default SideBar;