import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import CategoryName from '../CategoryName';
// import Filter 

const SideBar = ({items, icon}) => {
    console.log(items);
    return (
        <aside className='sideBar'>
            <CategoryName title={'Type'} icon={icon} categoryItems={items} />
            <CategoryName title={'Color'} icon={icon} />
            <CategoryName title={'Generation'} icon={icon} />
        </aside>
    );
};

SideBar.propTypes = {
    title: string,
    icon: string,
    items: arrayOf(shape())
};

SideBar.defaultProps = {
    title: '',
    icon: '',
    items: []
};

export default SideBar;