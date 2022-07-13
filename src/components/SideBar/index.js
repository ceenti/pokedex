import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import CategoryName from '../CategoryName';
// import Filter 

const SideBar = ({items, icon, gen_items}) => {
    console.log('sideBar', gen_items);
    return (
        <aside className='sideBar'>
            <CategoryName title={'Generation'} icon={icon} categoryItems={gen_items}/>
            <CategoryName title={'Type'} icon={icon} categoryItems={items} />
        </aside>
    );
};

SideBar.propTypes = {
    title: string,
    icon: string,
    items: arrayOf(shape()),
    gen_items: arrayOf(shape())
};

SideBar.defaultProps = {
    title: '',
    icon: '',
    items: [],
    gen_items: []
};

export default SideBar;