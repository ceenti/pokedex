import React from 'react';
import { string } from 'prop-types';
import CategoryName from '../CategoryName';
// import Filter 

const SideBar = (props) => {
    const { title, icon } = props;
    return (
        <aside className='sideBar'>
            <CategoryName title={'Type'} icon={icon} />
            <CategoryName title={'Color'} icon={icon} />
            <CategoryName title={'Generation'} icon={icon} />
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